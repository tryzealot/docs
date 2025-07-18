/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const selfHosted = require("./docs/self-hosted/sidebars");
const userGuide = require("./docs/user-guide/sidebars");
const developerGuide = require("./docs/developer-guide/sidebars");

module.exports = {
  selfHosted,
  userGuide,
  developerGuide
};
