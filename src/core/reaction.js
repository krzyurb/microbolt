const { sendAuthorizedRequest, sendRequest } = require("./requester");

const DEFAULT_OPTIONS = {
  debug: false,
};

const DEFAULT_DEPENDENCIES = {
  sendAuthorizedRequest,
  sendRequest,
};

module.exports.reaction = (fn, options) => {
  const opt = { ...DEFAULT_OPTIONS, ...options };

  return (args, dependencies) => {
    const dep = { ...DEFAULT_DEPENDENCIES, ...dependencies };

    if (opt.debug) {
      console.debug(args.body);
    }

    return fn({ ...args, ...dep, ...opt });
  };
};
