const todo = process.argv[2] === "todo";

const getPath = path => `${path}${todo ? ".todo" : ""}`;

require(getPath("./setup"));
require(getPath("./sum.test"));
// require(getPath("./tjson.test"));
