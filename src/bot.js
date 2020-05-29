const { App } = require("@slack/bolt");

function buildBot(config) {
  return new App({
    token: config.SLACK_BOT_TOKEN,
    signingSecret: config.SLACK_SIGNING_SECRET,
  });
}

module.exports = { buildBot };
