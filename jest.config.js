module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testEnvironement: "node",
  testMatch: ["**/test/*.test.ts"],
  moduleFileExtension: ["js", "ts"]
};
