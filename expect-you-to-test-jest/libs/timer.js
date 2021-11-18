const defineTimeout = (fn, ms) => {
  const timer = setTimeout(fn, ms);

  return () => clearTimeout(timer);
};

module.exports = {
  defineTimeout
};
