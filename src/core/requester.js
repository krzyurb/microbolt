const axios = require("axios");
const _ = require("lodash");

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

async function sendRequest({
  service,
  url,
  method = "GET",
  data,
  headers,
  params,
}) {
  const response = await axios({
    url: [getService(service), url].join("/"),
    method,
    data,
    headers,
    params,
  });

  return response.data;
}

async function sendAuthorizedRequest(args) {
  const authHeader = { headers: { Authorization: "XXX" } };
  return sendRequest(_.merge(args, authHeader));
}

module.exports = { sendRequest, sendAuthorizedRequest };
