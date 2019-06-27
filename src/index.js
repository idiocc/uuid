import { debuglog } from 'util'

const LOG = debuglog('@goa/uuid')

/**
 * [fork] Simple, fast generation of RFC4122 UUIDS.
 * @param {_@goa/uuid.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
export default async function uuid(config = {}) {
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
 * @typedef {_goa.UuidConfig} UuidConfig Optional uuid state to apply.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _goa.UuidConfig Optional uuid state to apply.
 * @prop {!Array<number>} [random] Array of 16 numbers (0-255) to use in place of randomly generated values.
 * @prop {function(): !Array<number>} [rng] Random # generator function that returns an Array[16] of byte values (0-255).
 */
