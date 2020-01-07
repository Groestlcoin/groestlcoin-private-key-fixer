const expect = require('expect')

const fixTypo = require('./fix-typo.js')
const replaceAt = require('../utils').replaceAt

describe('Fix single typo for compressed WIF', () => {
  const publicKey = 'FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd'
  const privateKey = 'L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk'

  it('should fix typo in private key', () => {
    expect(fixTypo(publicKey, replaceAt(privateKey, 12, 'V'))).toEqual(privateKey)
  })

  it('should fix typo if it is the first char', () => {
    expect(fixTypo(publicKey, replaceAt(privateKey, 0, 'V'))).toEqual(privateKey)
  })

  it('should fix typo if it is the last char', () => {
    let index = privateKey.length - 1
    expect(fixTypo(publicKey, replaceAt(privateKey, index, 'V'))).toEqual(privateKey)
  })
})

describe('Fix single typo for uncompressed WIF', () => {
  const publicKey = 'FYaQj3UMkGfostbARMr55KktqCKqGXikt9'
  const privateKey = '5JvMTbrwCEs3vd857GR7PtvpewiHcZQSro7eaqJodmr5Ygddtwk'

  it('should fix typo in private key', () => {
    expect(fixTypo(publicKey, replaceAt(privateKey, 12, 'V'))).toEqual(privateKey)
  })

  it('should fix typo if it is the first char', () => {
    expect(fixTypo(publicKey, replaceAt(privateKey, 0, 'V'))).toEqual(privateKey)
  })

  it('should fix typo if it is the last char', () => {
    let index = privateKey.length - 1
    expect(fixTypo(publicKey, replaceAt(privateKey, index, 'V'))).toEqual(privateKey)
  })
})
