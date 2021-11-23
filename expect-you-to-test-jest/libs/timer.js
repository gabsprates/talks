/**
 * @callback DefineTimeout
 * @param {function(): void} fn
 * @param {number} ms
 * @returns {function(): void}
 */

/** @type DefineTimeout */
const defineTimeout = (fn, ms) => {
  const timer = setTimeout(fn, ms);

  return () => clearTimeout(timer);
};

module.exports = {
  defineTimeout
};
