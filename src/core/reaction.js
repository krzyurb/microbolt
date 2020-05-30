const { sendRequest } = require("./requester");

const DEFAULT_OPTIONS = {
  debug: false,
};

module.exports.reaction = (fn, options) => {
  const opt = { ...DEFAULT_OPTIONS, ...options };

  return (args) => {
    if (opt.debug) {
      console.debug(args.body);
    }

    return fn({ sendRequest, ...args, ...opt });
  };
};
