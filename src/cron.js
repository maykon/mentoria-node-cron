require("dotenv").config();

const axios = require("axios");
var CronJob = require("cron").CronJob;

module.exports = (callback) => {
  new CronJob(
    process.env.CRON_PROCESS,
    async () => callback(),
    null,
    true,
    "America/Los_Angeles"
  ).start();
};
