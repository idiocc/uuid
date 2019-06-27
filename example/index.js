/* alanode example/ */
import uuid from '../src'

(async () => {
  const res = await uuid({
    text: 'example',
  })
  console.log(res)
})()