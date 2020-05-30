const { sendAuthorizedRequest, sendRequest } = require("./requester");

const DEFAULT_OPT = {
  sendAuthorizedRequest,
  sendRequest,
  debug: false,
};

module.exports.reaction = (fn, opt) => {
  const options = { ...DEFAULT_OPT, ...opt };

  return (args) => {
    if (options.debug) {
      console.debug(args.body);
    }

    fn({ ...args, ...options });
  };
};
