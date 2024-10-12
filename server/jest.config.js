/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  rootDir: "src/tests",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};