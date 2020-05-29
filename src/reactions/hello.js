async function helloReaction({ say, message }) {
  await say(`Hey there <@${message.user}>!`);
}

module.exports = { helloReaction };
