import { validSecret } from "./utils/devops.js";
import TelegramBot from "node-telegram-bot-api";

const token = process.env["TOKEN"] || null;
validSecret(token);

const bot = new TelegramBot(token, { polling: true });
const wepAppUrl = "https://master--thunderous-souffle-b419f1.netlify.app";

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, `Ниже появится кнопка`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Заполнить форму",
                        web_app: { url: wepAppUrl + "/form" },
                    },
                ],
            ],
            one_time_keyboard: true,
        },
    });

    await bot.sendMessage(chatId, `Ниже появится кнопка`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "DildoShop", web_app: { url: wepAppUrl } }],
            ],
        },
    });

    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data);
            console.log(data);
            console.log(msg.web_app_data);
        } catch (e) {
            console.log(e);
        }
    }
});
