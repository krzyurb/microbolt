const { GET_NOTE_REACTION_REGEX, getNoteReaction } = require("./getNote");

module.exports = (bot) => {
  bot.message(GET_NOTE_REACTION_REGEX, getNoteReaction);
};
