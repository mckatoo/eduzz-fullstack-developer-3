/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testEnvironment: 'node',
  coverageProvider: "v8",
  transform: {
    "^.+\\.ts?$": ["@swc/jest"],
  },
};
