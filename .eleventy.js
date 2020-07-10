const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};