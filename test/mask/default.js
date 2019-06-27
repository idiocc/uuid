import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import uuid from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await uuid({
      text: this.input,
    })
    return res
  },
  context: Context,
})