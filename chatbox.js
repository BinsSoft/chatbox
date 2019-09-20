/*!
 * Bins Chatbox
 * A chat library
 * Copyright BinsSoft
 * Released under the MIT license
 * Date: 2019-09-17
 */
class ChatBox {
    constructor(config) {

        this.emojiList = [];
        this.activeEmojiGroup = null;
        this.readJSONFile('../emoji.json', (text)=>{
           var data = JSON.parse(text);
           this.emojiList = data;
       });
        
        this.currentUser = {
            id: new Date().getTime()
        };
        if (config.current_user) {
            this.currentUser = config.current_user;
        }
        this.socket = null;
        this.socketUrl = null;
        if (config.socket_url) {
           this.socketUrl = config.socket_url;
        }
        this.addScript("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js", () => {
            this.socket = io(config.socket_url, {
                transports: ['websocket']
            });
            this.socket.on("receive", (data) => {
                let roomDom = document.querySelector('div.chat-box[data-room="' + data.room.id + '"]');
                
                if (roomDom) {
                    let currentTime = new Date().getTime();
                    this.appendMessage(data.room, {
                        id: 'room-'+data.room.id + '-' + currentTime,
                        senderId: data.sender.id,
                        type: 'TEXT',
                        message: data.message
                    });
   
                    let chatBody = roomDom.querySelector('.chat-body');
                    if (chatBody.classList.contains('minimize-body') && data.sender.id != this.currentUser.id) {
                       document.querySelector('div.chat-box[data-room="' + data.room.id + '"] .chat-header').classList.add('minimize-emit');
                    }
                } else {
                    this.generateChatBox({
                       id : data.room.id,
                       status:true,
                       person: data.sender
                    })
                }
                
            });
            this.socket.on("friend-leave", (data) => {
                let statusSpan = document.querySelector('div.chat-box[data-room="' + data.room.id + '"] span.status');
                statusSpan.classList.remove('online')
               statusSpan.classList.remove('offline');
               statusSpan.classList.add('offline');
            });
            this.socket.on("friend-join", (data) => {
               if (data.room.person.id === this.currentUser.id) {
                   
                   this.socket.emit("join", {
                       room: {
                           id: data.room.id,
                           status:true,
                           person: {
                               id: data.currentuser.id,
                               name: data.currentuser.name,
                               photo: data.currentuser.photo,
                           }
                        },
                       currentuser: this.currentUser
                   });
               }
                let statusSpan = document.querySelector('div.chat-box[data-room="' + data.room.id + '"] span.status');
                if (statusSpan && (this.currentUser && (data.currentuser.id != this.currentUser.id)) || data.client_no === 2) {
                    statusSpan.classList.remove('online')
                    statusSpan.classList.remove('offline');
                    statusSpan.classList.add('online');
                }
            });
        });

        this.roomList = [];
        if (config.rooms) {
            this.roomList = config.rooms;
        }
        this.listContainer = null;
        this.chatRoomContainer = null;
        this.chatBoxContainer = null;
        if (config.list_container) {
            this.listContainer = document.querySelector(config.list_container);
            this.chatRoomContainer = document.createElement('div');
            this.chatRoomContainer.classList.add('chat-room-container');
            this.listContainer.appendChild(this.chatRoomContainer);

            this.chatBoxContainer = document.createElement('div');
            this.chatBoxContainer.classList.add('chat-box-container');
            this.listContainer.appendChild(this.chatBoxContainer);
        }

        this.listButtonText = null;
        if (config.list_button_text) {
            this.listButtonText = config.list_button_text;
        }


        this.emojiStatus = true;
        if (config.emoji === false) {
            this.emojiStatus = config.emoji;
        }
        this.activeRoom = {};

    }



    generateChatRoomList() {
        if (this.listContainer && this.roomList && this.roomList.length > 0) {
            let listRow = null;
            for (let roomIndex = 0; roomIndex < this.roomList.length; roomIndex++) {
                let room = this.roomList[roomIndex];
                listRow = document.createElement('div');
                listRow.classList.add('room');
                listRow.setAttribute('data-room', room.id);
                let roomHeading = document.createElement('div');
                roomHeading.classList.add('room-heading');

                let roomPerson = document.createElement('div');
                roomPerson.classList.add('room-person');
                if (room.person.photo) {
                    let personPhoto = document.createElement('img');
                    personPhoto.classList.add('room-person-img')
                    personPhoto.setAttribute('src', room.person.photo);
                    roomPerson.appendChild(personPhoto);
                }
                if (room.person.name) {
                    let personName = document.createElement('span');
                    personName.classList.add('room-person-name');
                    personName.innerText = room.person.name;
                    roomPerson.appendChild(personName);
                }
                roomHeading.appendChild(roomPerson);
                let roomBtn = document.createElement('div');
                roomBtn.classList.add('room-btn')
                let btn = document.createElement('button');
                btn.innerText = this.listButtonText;
                btn.addEventListener('click', () => {
                   this.generateChatBox(room)
               })
                roomBtn.appendChild(btn);
                roomHeading.appendChild(roomBtn);

                listRow.appendChild(roomHeading);
                this.chatRoomContainer.appendChild(listRow);
            }
        }
    }
    generateChatBox(room) {
        this.activeRoom = room;
        if (document.querySelectorAll('div.chat-box[data-room="' + room.id + '"]').length == 0) {

            this.socket.emit("join", {
                room: room,
                currentuser: this.currentUser
            });

            let chatBox = document.createElement('div');
            chatBox.classList.add('chat-box');
            chatBox.setAttribute('data-room', room.id);
            let chatBoxHeader = document.createElement('div');
            chatBoxHeader.classList.add('chat-header');
            let chatBoxHeaderLeft = document.createElement('div');
            chatBoxHeaderLeft.classList.add('chat-header-left');
            let personImgContent = document.createElement('div');
            personImgContent.classList.add('person-img');
            if (room.person.photo) {
               let personPhoto = document.createElement('img');
               personPhoto.setAttribute('src', room.person.photo);
               personImgContent.appendChild(personPhoto);    
           } else {
               let personPhoto = document.createElement('span');
               personPhoto.classList.add('avatar');
               personPhoto.innerHTML = '&#128100;';
               personImgContent.appendChild(personPhoto);    
           }
           let status = document.createElement('span'); 
           status.classList.add('status');
           status.classList.add((room.status) ? 'online' : 'offline');
           personImgContent.appendChild(status);
           chatBoxHeaderLeft.appendChild(personImgContent);
            if (room.person.name) {
                let personNameContent = document.createElement('div');
                personNameContent.classList.add('person-name');
                let name = document.createElement('label'); 
                name.classList.add('person-name');
                name.innerText = room.person.name;
            
                personNameContent.appendChild(name);
                
                chatBoxHeaderLeft.appendChild(personNameContent)
            }
            chatBoxHeader.appendChild(chatBoxHeaderLeft);

            let chatBoxHeaderRight = document.createElement('div'); 
            chatBoxHeaderRight.classList.add('chat-header-right');

            let minimizeDiv = document.createElement('span');
            minimizeDiv.innerHTML = '&#9601;';
            minimizeDiv.addEventListener('click', ()=>{
               let chatBody = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-body');
               if (chatBody.classList.contains('minimize-body')) {
                   chatBody.classList.remove('minimize-body');
                   minimizeDiv.innerHTML = '&#9601;';
                   document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-header').classList.remove('minimize-emit');
               } else {
                   chatBody.classList.add('minimize-body');
                   minimizeDiv.innerHTML = '&#9620;';
                  
               }
               // if (chatBody.style.display === 'none') {
               //     chatBody.style.display = 'block';
               //     chatBody.style.height = 'auto';
               // } else {
               //     chatBody.style.display = 'none';
               //     chatBody.style.height = 0;
               // }
            })
           chatBoxHeaderRight.appendChild(minimizeDiv)

            let closeDiv = document.createElement('span');
            closeDiv.innerHTML = '&#10005;';
            closeDiv.addEventListener('click', ()=>{
               this.chatBoxContainer.removeChild( document.querySelector('div.chat-box[data-room="' + room.id + '"]'));

               this.socket.emit("leave", {
                   room: room,
                   curretuser: this.currentUser
               });
            });

            chatBoxHeaderRight.appendChild(closeDiv)
            chatBoxHeader.appendChild(chatBoxHeaderRight);

            chatBox.appendChild(chatBoxHeader);

            let chatBoxBody = document.createElement('div');
            chatBoxBody.classList.add('chat-body');
            let chatBoxMessageBody = document.createElement('div');
            chatBoxMessageBody.classList.add('chat-message-body');
            let chatBoxLoaderContainer = document.createElement('div');
            chatBoxLoaderContainer.classList.add('chat-loader-container');
            let chatBoxLoader = document.createElement('div');
            chatBoxLoaderContainer.classList.add('hidden');
            chatBoxLoader.classList.add('chat-loader');
            chatBoxLoaderContainer.appendChild(chatBoxLoader);
            chatBoxMessageBody.appendChild(chatBoxLoaderContainer);

            let chatBoxMessageBodyUl = document.createElement('ul');
            chatBoxMessageBodyUl.classList.add('chat-text-ul');
            chatBoxMessageBodyUl.setAttribute('data-page', 1);
            chatBoxMessageBodyUl.setAttribute('data-total', 0);
            chatBoxMessageBodyUl.addEventListener('scroll', ()=>{
                this.scrollChatHistory(room);
            })
            chatBoxMessageBody.appendChild(chatBoxMessageBodyUl);

            if (this.emojiStatus) {

                let chatBoxEmojiContainer = document.createElement('div');
                chatBoxEmojiContainer.classList.add('emoji-container');
                chatBoxEmojiContainer.setAttribute('data-show', false);

                let emojiContent = document.createElement('ul');
                emojiContent.classList.add('emoji-group-content');
                chatBoxEmojiContainer.appendChild(emojiContent);

                let emojiGroupContent = document.createElement('ul');
                emojiGroupContent.classList.add('emoji-group-container');
                chatBoxEmojiContainer.appendChild(emojiGroupContent);
                for (let i = 0; i < this.emojiList.length; i++) {
                    let emojiLi = document.createElement('li');
                    emojiLi.setAttribute('title', this.emojiList[i].name);
                    let emojiSpan = document.createElement('span');
                    emojiSpan.innerHTML = this.emojiList[i].icon;
                    emojiLi.appendChild(emojiSpan);
                    emojiGroupContent.appendChild(emojiLi);

                    emojiLi.addEventListener('click', ()=>{
                       this.activeEmojiGroup = this.emojiList[i];
                       emojiContent.innerHTML = '';
                       for (let emojiIndex = 0; emojiIndex < this.activeEmojiGroup.smilyList.length; emojiIndex++) {
                           let activeEmoji = this.activeEmojiGroup.smilyList[emojiIndex];
                           let subemojiLi = document.createElement('li');
                           subemojiLi.setAttribute('title', activeEmoji.title);
                           let emojiSpan = document.createElement('span');
                           emojiSpan.innerHTML = activeEmoji.code;
                           subemojiLi.appendChild(emojiSpan);

                           subemojiLi.addEventListener('click', ()=>{
                               let appendHtml = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text').innerHTML;
                               document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text').innerHTML = appendHtml + activeEmoji.code;
                           });
                           emojiContent.appendChild(subemojiLi);

                       }
                    });
                
                }
                chatBoxMessageBody.appendChild(chatBoxEmojiContainer);
            }
            chatBoxBody.appendChild(chatBoxMessageBody);

            let chatBoxAction = document.createElement('div');
            chatBoxAction.classList.add('chat-action');
            let chatBoxActionText = document.createElement('div');
            chatBoxActionText.classList.add('chat-text');
            chatBoxActionText.setAttribute('contenteditable', true);
            chatBoxActionText.addEventListener('keydown', (event)=>{
               this.sendMessage(room, event);
            })
            chatBoxAction.appendChild(chatBoxActionText);
            let chatBoxActionButtons = document.createElement('div');
            chatBoxActionButtons.classList.add('chat-action-btns');
            if (this.emojiStatus) {
                let emojiSpan = document.createElement('div');;
                emojiSpan.innerHTML = '&#x1F642;';
                emojiSpan.addEventListener('click', ()=>{
                   this.showHideEmoji();
                })
                chatBoxActionButtons.appendChild(emojiSpan);
            }

            chatBoxAction.appendChild(chatBoxActionButtons);
            chatBoxBody.appendChild(chatBoxAction);


            chatBox.appendChild(chatBoxBody);

            this.chatBoxContainer.appendChild(chatBox);
// get chat history
            this.getChatHistory(room).then((responseData)=>{
               for (let chatIndex = 0; chatIndex < responseData.data.length; chatIndex ++) {
                   let chat = responseData.data[chatIndex];
                   this.appendMessage(room,{
                       id : 'room-'+room.id+'-'+chat.id,
                       senderId: chat.send_user_id,
                       type: (chat.type == 0)?'TEXT':'MEDIA',
                       message: chat.message}, true);
               }
               chatBoxMessageBodyUl.setAttribute('data-page', 2);
               chatBoxMessageBodyUl.setAttribute('data-total', responseData.total);
               let ulObj = chatBoxMessageBodyUl.lastChild;
               if (ulObj){
                   setTimeout(() => {
                       ulObj.scrollIntoView();
                   }, 20);
               }
            });
        }
    }

    showHideEmoji(onlyHide = false) {
        let emojiContainer = document.querySelector('div.chat-box[data-room="' + this.activeRoom.id + '"] .emoji-container');
        if (onlyHide === true) {
            emojiContainer.setAttribute('data-show', false)
        } else {
            if (emojiContainer.getAttribute('data-show') == 'true') {
                emojiContainer.setAttribute('data-show', false)
            } else {
                emojiContainer.setAttribute('data-show', true);
            }
        }
    }

    sendMessage(room, e) {
        if (e.which == 13) {
           
            let text = encodeURIComponent(e.target.innerText);
            if (text) {
                let currentTime = new Date().getTime();
                let message = e.target.innerText;
                e.target.innerText = '';
                this.socket.emit("send", {
                    room: room,
                    sender: this.currentUser,
                    time: currentTime,
                    message: message
                });
                this.showHideEmoji(true);
            }
            e.preventDefault();
        }
    }

    appendMessage(room, message, history=false) {
        if (document.querySelectorAll("#" + message.id).length == 0) {
           
            let messageLi = document.createElement('li');
            messageLi.classList.add((message.senderId === this.currentUser.id) ? 'own' : 'friend');
            messageLi.classList.add('message');

         
            let msgText = document.createElement('div');
            msgText.classList.add('msg-txt');

           if (message.type === 'TEXT') {
                msgText.innerText = message.message;
            }
            /*else if (message.type === 'MEDIA') {
                if (message.message.file_name) {
                    let media = $("<div/>").addClass((message.message.is_image || message.message.is_temp_image) ? 'mediaImage' : '')

                    let mediaAnchor = $("<a/>").prop('href', message.message.file_name).prop('target', '_blank');
                    if (message.message.is_image || message.message.is_temp_image) {
                        mediaAnchor.append($("<img/>").prop('src', message.message.file_name));
                    } else {
                        mediaAnchor.text(message.message.name);
                    }
                    msgText.append(media);
                } else {
                    msgText.append(
                        $("<div/>").append(
                            $("<span/>").addClass('msg-err').text('🚫 Old file removed')
                        )
                    )
                }
            }*/
            messageLi.appendChild(msgText);
            let messageRoomUl = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text-ul');
            if (!history) {
                messageRoomUl.appendChild(messageLi);
                setTimeout(() => {
                    var objDiv = messageRoomUl.lastChild;
                    objDiv.scrollIntoView();
                }, 20);
            } else {
                if (messageRoomUl.firstChild) {
                   messageRoomUl.insertBefore(messageLi, messageRoomUl.firstChild);
                } else {
                   messageRoomUl.appendChild(messageLi);
                }
            }
        }


    }

    readJSONFile(file, callback) {
       var rawFile = new XMLHttpRequest();
       rawFile.overrideMimeType("application/json");
       rawFile.open("GET", file, true);
       rawFile.onreadystatechange = function() {
           if (rawFile.readyState === 4 && rawFile.status == "200") {
               callback(rawFile.responseText);
           }
       }
       rawFile.send(null);
   }

   addScript(path, callback) {
       
       const script = document.createElement('script');
       script.setAttribute('src',path);
       document.head.appendChild(script);
       script.onload = ()=>{
           callback();
       }
   
   }
    scrollChatHistory(room) {
        var objDiv = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-text-ul');
        let page = Number(objDiv.getAttribute('data-page'));
        let total = Number(objDiv.getAttribute('data-total'));
        if (objDiv.scrollTop == 0) {
            if (total > 0 && objDiv.childElementCount < total ) {
               this.getChatHistory(room, page).then((responseData)=>{
                   for (let chatIndex = 0; chatIndex < responseData.data.length; chatIndex ++) {
                       let chat = responseData.data[chatIndex];
                       this.appendMessage(room,{
                           id : 'room-'+room.id+'-'+chat.id,
                           senderId: chat.send_user_id,
                           type: (chat.type == 0)?'TEXT':'MEDIA',
                           message: chat.message}, true);
                   }
                   objDiv.setAttribute('data-page', (page+1));
                   objDiv.setAttribute('data-total', responseData.total);
               });
           }
        }
    }

    getChatHistory(room, page=1) {
       return new Promise((resolve, reject) => {
           var loader = document.querySelector('div.chat-box[data-room="' + room.id + '"] .chat-loader-container');
           loader.classList.remove('hidden');

           var xhttp = new XMLHttpRequest();
           xhttp.responseType = 'json';
           xhttp.open('GET', this.socketUrl+'chat-history/'+room.id+'/'+page, true);
           xhttp.send();
           xhttp.onreadystatechange = function () {
               if (this.readyState == 4) {
                   if (this.status == 200) {
                       resolve(this.response);
                   } else {
                       resolve('something error');
                   }
                   loader.classList.add('hidden');
               }
           }
       });

    }
}