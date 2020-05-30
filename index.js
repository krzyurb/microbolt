require("dotenv").config();

const { buildBot } = require("./src/bot");
const { notes } = require("./src/modules");

buildBot().module(notes).start();
