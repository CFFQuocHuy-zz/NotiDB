require("dotenv").config();

const WEBHOOK_URL = process.env.WEBHOOK_URL;

const axios = require("axios");

const body = {
  alias: "Huyz",
  text: "Hello",
  attachments: [
    {
      title: "Rocket.Chat",
      title_link: "https://rocket.chat",
      text: "Rocket.Chat, the best open source chat",
      image_url: "/images/integration-attachment-example.png",
      color: "#764FA5",
    },
  ],
};

function sendMessage() {
  axios
    .post(WEBHOOK_URL, body)
    .then((webHookRes) => {
      console.log(`statusCode: ${webHookRes.status}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

const cron = require("node-cron");

cron.schedule("0 10 * * 1-5", () => {
  sendMessage();
});
