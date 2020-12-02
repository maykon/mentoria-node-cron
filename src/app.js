require("dotenv").config();

const cron = require("./cron");
const server = require("./server");
const { executeProjects } = require("./api");

cron(executeProjects);

server.post("/", async (req, res) => {
  const total = await executeProjects();
  res.json(total);
});

server.listen(3333);
