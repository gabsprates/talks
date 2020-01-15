module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy"
  },
  setupFiles: ["./test/enzyme.ts"],
  setupFilesAfterEnv: ["./test/setup.ts"]
};
