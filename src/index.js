require("dotenv").config();

const { buildBot } = require("./loaders/bot");
const { notes } = require("./modules");

buildBot().module(notes).start();
