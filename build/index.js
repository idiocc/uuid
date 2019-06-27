const { debuglog } = require('util');

const LOG = debuglog('@goa/uuid')

/**
 * [fork] Simple, fast generation of RFC4122 UUIDS.
 * @param {_@goa/uuid.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function uuid(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@goa/uuid called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_@goa/uuid.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _@goa/uuid.Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = uuid