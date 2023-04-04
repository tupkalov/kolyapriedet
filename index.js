const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const arrivalDate = moment(1681870680000); // Дата приезда Коли
const message = 'До приезда Коли осталось: ';

bot.on('message', (message) => {
  const chatId = message.chat.id;
  const currentDate = moment();
  const remainingDays = arrivalDate.diff(currentDate, 'days');
  const remainingHours = arrivalDate.diff(currentDate, 'hours') % 24;
  const remainingMinutes = arrivalDate.diff(currentDate, 'minutes') % 60;
  if (message.text.toLowerCase().includes("когда")) {
    bot.sendMessage(chatId, "Осталось " + remainingDays + ' дней, ' + remainingHours + ' часов и ' + remainingMinutes + ' минут.');
  } else {
    bot.sendMessage(chatId, "Надо писать слово когда.")
  }
});
