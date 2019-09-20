var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var Sequelize = require('sequelize');
const sequelize = new Sequelize('laravel57_expertgully', 'root', 'matrix', {
  host: '192.168.1.179',
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  }
});
const ChatHistory = sequelize.define('chat_history', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  room: Sequelize.STRING,
  send_user_id: Sequelize.INTEGER,
  receive_user_id: Sequelize.INTEGER,
  message: Sequelize.TEXT,
  file_name: Sequelize.STRING,
  is_image: Sequelize.ENUM('1', '0'),
  type: Sequelize.ENUM('0', '1'),
  status: Sequelize.ENUM('0', '1'),
  posted_on: Sequelize.BIGINT
}, {
  timestamps: false,
  tableName: 'chat_history'
});
module.exports = ChatHistory;

var cors = require('cors');
var corsOptions = {
  origin: "*",
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-reset-token', 'x-invite-token', 'x-access-token', '_token', 'x-api-key', 'x-www-form-urlencoded'],
  credentials: false
};
app.use(cors(corsOptions));

io.on('connection', function (socket) {
  // console.log(socket.id + ' user connected');
  socket.on("join", (data) => {

    let clientsNo = 0;
    if (io.sockets.adapter.rooms[data.room.id]) {
      clientsNo = io.sockets.adapter.rooms[data.room.id].length;
    }
    
    if(clientsNo==0 || clientsNo<=2) {
      socket.join(data.room.id);
      if (clientsNo != 2) {
        data['client_no'] = clientsNo;
        io.sockets.emit('friend-join', data);
      }
    }

  });
  socket.on("leave", (data) => {
    socket.leave(data.room.id);
    io.sockets.in(data.room.id).emit('friend-leave', data);
  });
  socket.on("send", (data) => {
    let addData = {
      room: data.room.id,
      send_user_id: data.sender.id,
      receive_user_id: data.room.person.id,
      message: data.message,
      type: '0',
      status: '0',
      posted_on: data.time
    };
    ChatHistory.create(addData).then((newChat) => {})
    io.sockets.in(data.room.id).emit("receive", data);
  });
});

app.get("/chat-history/:room/:page", (req, res) => {
  let limit = 10;
  let offset = (req.params.page) ? (Number(req.params.page) - 1) * limit : 0;
  ChatHistory.findAndCountAll({
    where: {
      room: req.params.room
    },
    order: [
      ['posted_on', 'DESC'],
    
    ],
    offset: offset,
    limit: 10
  }).then((chatData) => {
    res.json({
      data: chatData.rows,
      total : chatData.count
    });
  });
});

http.listen(5030, function () {
  console.log('listening on *:5030');
});