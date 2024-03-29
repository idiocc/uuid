import rng from './rng'
import bytesToUuid from './bytes-to-uuid'

/**
 * Generate and return a RFC4122 v4 UUID.
 * @param {_goa.UuidConfig|string} options Options, or "binary" string.
 * @param {Array|Buffer} [buffer] Array or buffer where UUID bytes are to be written.

 * @param {number} [offset] Starting index in `buffer` at which to begin writing.
 */
export default function v4(options = {}, buffer = null, offset = 0) {
  var i = buffer && offset

  if (typeof options == 'string') {
    buffer = options == 'binary' ? new Array(16) : null
    options = null
  }
  const { random, rng: rngFn = rng } = /** @type {_goa.UuidConfig} */ (options)

  const rnds = random || rngFn()

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40
  rnds[8] = (rnds[8] & 0x3f) | 0x80

  // Copy bytes to buffer, if provided
  if (buffer) {
    for (var ii = 0; ii < 16; ++ii) {
      buffer[i + ii] = rnds[ii]
    }
  }

  return buffer || bytesToUuid(rnds)
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('./types').UuidConfig} _goa.UuidConfig
 */