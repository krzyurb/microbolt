const { App } = require("@slack/bolt");
const { buildConfig } = require("./config");

class Bot {
  constructor(config = buildConfig()) {
    this.config = config;
    this.bolt = new App({
      token: config.SLACK_BOT_TOKEN,
      signingSecret: config.SLACK_SIGNING_SECRET,
    });
  }

  module(registerModule) {
    registerModule(this.bolt, this.config);
    return this;
  }

  async start() {
    await this.bolt.start(this.config.PORT);
    console.log(`⚡️ Bolt app is running! :${this.config.PORT}`);
  }
}

module.exports.buildBot = (config) => new Bot(config);
