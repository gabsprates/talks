const describe = (msg, fn) => {
  console.log(`=== ${msg}`);
  fn();
};

const it = (msg, fn) => {
  try {
    fn();
    console.log(`✅ ${msg}`);
  } catch (e) {
    console.error(`🚫 ${msg}`);
    console.error(e);
  }
};

const expect = received => {
  const toEqual = expected => received == expected;
  const throwError = expected => {
    throw new Error(
      `\nReceived: ${received} \t| ${typeof received}\nExpected: ${expected} \t| ${typeof expected}`
    );
  };

  return {
    not: {
      toEqual: expected => {
        if (!toEqual(expected)) return;
        throwError(expected);
      }
    },
    toEqual: expected => {
      if (toEqual(expected)) return;
      throwError(expected);
    }
  };
};

global.it = it;
global.expect = expect;
global.describe = describe;
