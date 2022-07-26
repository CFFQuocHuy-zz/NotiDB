require("dotenv").config();
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const axios = require("axios");
const cron = require("node-cron");


const body = {
  alias: "Dan Abramov",
  text: "Xin chào các mọi người, điền daily report (https://docs.google.com/spreadsheets/d/1YcA3l1YD22-kWPa-BvsSqsE4u2hRD1Ee/edit#gid=709533652) và lướt một vòng plan 6 tháng cũng như mục tiêu của your nha.",
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

cron.schedule("0 9 * * 1-5", () => {
  sendMessage();
});

cron.schedule("0 21 * * 1-5", () => {
  sendMessage();
});
