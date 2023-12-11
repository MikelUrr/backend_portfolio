const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const PORT = 3000;
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3668'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const token = '6615779832:AAHWrqmWsylq7KorbgYfJ1WeXN9zCaWUck8'; 
const bot = new TelegramBot(token, { polling: true });

let chatId;

bot.on('message', function(msg) {
  chatId = msg.chat.id;
  const messageText = msg.text;
  bot.sendMessage(chatId, '¡Hola! Soy tu bot de prueba. Gracias por iniciar el chat.');
  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Hooooooli');
  }
});

// Ruta para recibir información y enviar al bot de Telegram
app.post('/enviar', (req, res) => {
  const mensaje  = req.body;
  console.log("UNOOOO", req.params, "DOOOS" ,req.body, "TRES", req.query)
console.log(typeof mensaje)
const miCadenaJSON = JSON.stringify(mensaje);
  if (miCadenaJSON ) {
    bot.on('message', function(msg) {
      chatId = msg.chat.id;
      const messageText = msg.text;
      if (messageText === '/check') {
        bot.sendMessage(chatId, miCadenaJSON);
      }
    });
    res.status(200).json({ message: 'Mensaje enviado.' });
  } else {
    res.status(400).json({ error: 'Mensaje no proporcionado o chatId no disponible.' });
  }
});

app.get('/check-api-connection', async (req, res) => {
  try {
    res.status(200).json({ message: 'Conexión con la API exitosa.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al intentar conectar con la API.' });
  }
});

app.listen(PORT, function() {
  console.log("Servidor web en marcha en puerto 3000.");
});
