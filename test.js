const atbash = require('./atbash')

const plainText = process.env.string

const encryptedText = atbash(plainText)
console.log(encryptedText)

const decryptedText = atbash(plainText)
console.log(decryptedText)
