require("dotenv").config();

const { buildBot } = require("./src/bot");
const { buildConfig } = require("./src/config");
const { getNoteReaction, GET_NOTE_REACTION_REGEX } = require("./src/reactions");

async function bootstrap() {
  const config = buildConfig();
  const bot = buildBot(config);

  bot.message(GET_NOTE_REACTION_REGEX, getNoteReaction);

  await bot.start(config.PORT);
  console.log(`⚡️ Bolt app is running! :${config.PORT}`);
}

bootstrap();
