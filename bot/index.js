import {validSecret} from "./utils/devops.js";
import TelegramBot from "node-telegram-bot-api";


const token = process.env["TOKEN"] || null
validSecret(token)

const bot = new TelegramBot(token, {polling: true});
const wepAppUrl = "http://192.168.33.230:3000"

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, `Ниже появится кнопка`, {
        reply_markup : {
keyboard:[[{text:"Заполнить форму"}]],
            one_time_keyboard: true,

        },


    });

    await bot.sendMessage(chatId, `Ниже появится кнопка`, {
        reply_markup : {
            inline_keyboard:[[{text:"DildoShop", web_app:{url:wepAppUrl}}]]
        }
    });
});
