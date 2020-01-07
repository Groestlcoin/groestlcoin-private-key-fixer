const expect = require('expect')

const fixMissingEnd = require('./fix-missing-end')

describe('Fix missing symbols at the end of a WIF compressed private key', () => {
  const publicKey = 'FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd'
  const privateKey = 'L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk'

  it('should recover private key when missing last 1 character', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -1))).toEqual(privateKey)
  })

  it('should recover private key when missing last 2 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -2))).toEqual(privateKey)
  })

  it('should recover private key when missing last 3 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -3))).toEqual(privateKey)
  })

  it('should recover private key when missing last 4 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -4))).toEqual(privateKey)
  })

  it('should recover private key when missing last 5 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -5))).toEqual(privateKey)
  })

  it('should recover private key when missing last 6 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -6))).toEqual(privateKey)
  })
})

describe('Fix missing symbols at the end of a WIF uncompressed private key', () => {
  const publicKey = 'FYaQj3UMkGfostbARMr55KktqCKqGXikt9'
  const privateKey = '5JvMTbrwCEs3vd857GR7PtvpewiHcZQSro7eaqJodmr5Ygddtwk'

  it('should recover private key when missing last 1 character', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -1))).toEqual(privateKey)
  })

  it('should recover private key when missing last 2 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -2))).toEqual(privateKey)
  })

  it('should recover private key when missing last 3 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -3))).toEqual(privateKey)
  })

  it('should recover private key when missing last 4 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -4))).toEqual(privateKey)
  })

  it('should recover private key when missing last 5 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -5))).toEqual(privateKey)
  })

  it('should recover private key when missing last 6 characters', () => {
    expect(fixMissingEnd(publicKey, privateKey.slice(0, -6))).toEqual(privateKey)
  })
})
