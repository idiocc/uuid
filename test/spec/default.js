import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import uuid from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof uuid, 'function')
  },
  async 'calls package without error'() {
    await uuid()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await uuid({
      text,
    })
    ok(res, text)
  },
}

export default T