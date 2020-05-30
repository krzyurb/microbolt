const { reaction } = require("../../core/reaction");

module.exports.GET_NOTE_REACTION_REGEX = /get\s*note\s*(\d)+/;

module.exports.getNoteReaction = reaction(
  async ({ say, context, sendAuthorizedRequest }) => {
    const noteId = context.matches[1];

    const result = await sendAuthorizedRequest({
      service: "EXAMPLE",
      url: `todos/${noteId}`,
    });

    await say(result.title);
  }
);
