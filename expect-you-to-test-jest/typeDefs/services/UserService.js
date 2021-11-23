/**
 * @typedef {Object} UserService
 * @property {Authenticate} authenticate
 */

/**
 * @callback Authenticate
 * @param {string} email
 * @returns {PromiseLike<UserData>}
 */
