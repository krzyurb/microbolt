module.exports.mockRequest = (args = {}) => ({
  say: jest.fn().mockResolvedValue(true),
  sendRequest: args.sendRequest || jest.fn(),
  context: {
    matches: args.matches,
  },
});
