// jest.config.js

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files
  // for which coverage information should be collected
  collectCoverageFrom: [
    "**/*.{js,jsx}",
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage/"
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "html",
  ],

  // The root directory that Jest should scan for tests and modules within
  rootDir: "./src",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Indicates whether each individual test should be reported during the run
  verbose: true
};