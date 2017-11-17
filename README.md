# atbash-cipher

The Atbash cipher is a particular type of monoalphabetic cipher formed by taking the alphabet and mapping it to its reverse, so that the first letter becomes the last letter, the second letter becomes the second to last letter, and so on. For example, the Latin alphabet would work like this:

Text type | Accordingly
----------------|----------------------
Plain       | ` ABCDEFGHIJKLMNOPQRSTUVWXYZ `
Cipher      | ` ZYXWVUTSRQPONMLKJIHGFEDCBA `


Due to the fact that there is only one way to perform this, the Atbash cipher provides no communications security, as it lacks any sort of key. If multiple collating orders are available, which one was used in encryption can be used as a key, but this does not provide significantly more security.