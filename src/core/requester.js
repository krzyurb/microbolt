const axios = require("axios");

const buildBotHeader = (auth) => (auth ? { "X-Bot-Auth": "XXX" } : {});

/**
 * Fetch URL of service from process.env
 */
function getService(serviceName) {
  const result = process.env[`${serviceName}_SERVICE_URL`];
  if (!result) {
    throw new Error(`${serviceName}_SERVICE_URL need to be defined!`);
  }
  return result;
}

module.exports.sendRequest = async ({
  service,
  url,
  method = "GET",
  data,
  headers,
  params,
  auth = false,
}) => {
  const response = await axios({
    url: [getService(service), url].join("/"),
    method,
    data,
    headers: { ...headers, ...buildBotHeader(auth) },
    params,
  });

  return response.data;
};
