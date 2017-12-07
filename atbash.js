'use strict'

/**
 * @param {char} input - Character to transform.
 * @returns {char} - Transformed output.
 * @description - Checks if input is lowercase transforms with Atbash logic.
 */
const atbashTransformer = (input) => {
  const charCode = input.charCodeAt(0)

  // checking if input char is lowercase
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(charCode + (122 - charCode - (charCode - 97)))
  }

  // checking if input char is uppercase
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(charCode + (90 - charCode - (charCode - 65)))
  }

  return String.fromCharCode(charCode)
}

/**
 * @param {string} input - Text which will be ciphered.
 * @returns {string} - Cipher output.
 * @description - Atbush cipher function which converts original string to ciphered one using cipher mapping.
 */
module.exports = function(input) {
	if (Number.isFinite(input) || input === undefined || input === null || typeof input === 'number') return input

	return Array.prototype.map.call(input, atbashTransformer).join('')
}
