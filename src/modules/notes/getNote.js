const { reaction } = require("../../core/reaction");

module.exports.GET_NOTE_REACTION_REGEX = /get\s*note\s*(\d)+/;

module.exports.getNoteReaction = reaction(
  async ({ say, context, sendRequest }) => {
    const noteId = context.matches[1];

    const result = await sendRequest({
      service: "EXAMPLE",
      url: `todos/${noteId}`,
    });

    return say(result.title);
  }
);
