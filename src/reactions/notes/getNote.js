const { sendAuthorizedRequest } = require("../../core/requester");

module.exports.GET_NOTE_REACTION_REGEX = /get\s*note\s*(\d)+/;

module.exports.getNoteReaction = async ({ say, context }) => {
  const noteId = context.matches[1];

  const result = await sendAuthorizedRequest({
    service: "EXAMPLE",
    url: `todos/${noteId}`,
  });

  await say(result.title);
};
