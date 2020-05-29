require("dotenv").config();

const { buildBot } = require("./src/bot");
const { buildConfig } = require("./src/config");
const { helloReaction } = require("./src/reactions/hello");

async function bootstrap() {
  const config = buildConfig();
  const bot = buildBot(config);

  bot.message("hello", helloReaction);

  await bot.start(config.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
}

bootstrap();
