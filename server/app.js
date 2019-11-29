/*!
 * **************************************************
 * Name : Chatbox                                   *
 * Description : A chat library                     *
 * Author: Tonmoy Nandy                             *
 * Date: 2019-09-17                                 *
 * **************************************************
 */
var app = require('express')();
require('dotenv').config();

if (process.env.PRODUCTION == 'true') {
  const fs = require('fs');
  var options = {
    key: fs.readFileSync(process.env.SSLKEY),
    cert: fs.readFileSync(process.env.SSLPEM),
    requestCert: true,
    rejectUnauthorized: false
  };
  var server = require('https').createServer(options, app);
} else {
  var server = require('http').createServer(app);
}
var io = require('socket.io')(server);

var Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
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

    if (clientsNo == 0 || clientsNo <= 2) {
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
app.get("/", function(req, res) {
  res.json({status:1,msg:'home'});
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
    ChatHistory.update({
      status: '1'
    }, /* set attributes' value */ {
      where: {
        room: req.params.room
      }
    } /* where criteria */ );
    res.json({
      data: chatData.rows,
      total: chatData.count
    });
  });
});

const port = process.env.PORT;
server.listen(port, function (e) {
  
  console.log('\x1b[31m', '*********************************');
  console.log('\x1b[31m', '*                               *');
  console.log('\x1b[32m', '* 🚀 Server ready               *');
  console.log('\x1b[33m%s\x1b[0m', ' * Listening on  :'+port+'           *');
  console.log('\x1b[31m', '*                               *');
  console.log('\x1b[31m', '*********************************');
});