const _ = require("lodash");

module.exports.mockRequest = (args = {}) => ({
  say: jest.fn().mockResolvedValue(true),
  context: {
    matches: args.matches,
  },
});

module.exports.runReaction = (reaction, req, dep) => reaction(req, dep);
