const expect = require('expect')
const fixMissing = require('./fix-missing.js')
const replaceAt = require('../utils').replaceAt

describe('Fix missing symbols at known positions for compressed WIF', () => {
  const publicKey = 'FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd'
  const privateKey = 'L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk'

  it('should fix one missing char in private key', () => {
    expect(fixMissing(publicKey, replaceAt(privateKey, 23, '_'))).toEqual(privateKey)
  })

  it('should fix two missing chars in private key', () => {
    let badPrivateKey = replaceAt(privateKey, 18, '_')
    badPrivateKey = replaceAt(badPrivateKey, 46, '_')
    expect(fixMissing(publicKey, badPrivateKey)).toEqual(privateKey)
  })

  it('should fix two consecutive chars', () => {
    let badPrivateKey = replaceAt(privateKey, 2, '_')
    badPrivateKey = replaceAt(badPrivateKey, 3, '_')
    expect(fixMissing(publicKey, badPrivateKey)).toEqual(privateKey)
  })
})

describe('Fix missing symbols at known positions for uncompressed WIF', () => {
  const publicKey = 'FYaQj3UMkGfostbARMr55KktqCKqGXikt9'
  const privateKey = '5JvMTbrwCEs3vd857GR7PtvpewiHcZQSro7eaqJodmr5Ygddtwk'

  it('should fix one missing char in private key', () => {
    expect(fixMissing(publicKey, replaceAt(privateKey, 23, '_'))).toEqual(privateKey)
  })

  it('should fix two missing chars in private key', () => {
    let badPrivateKey = replaceAt(privateKey, 18, '_')
    badPrivateKey = replaceAt(badPrivateKey, 46, '_')
    expect(fixMissing(publicKey, badPrivateKey)).toEqual(privateKey)
  })

  it('should fix two consecutive chars', () => {
    let badPrivateKey = replaceAt(privateKey, 2, '_')
    badPrivateKey = replaceAt(badPrivateKey, 3, '_')
    expect(fixMissing(publicKey, badPrivateKey)).toEqual(privateKey)
  })
})
