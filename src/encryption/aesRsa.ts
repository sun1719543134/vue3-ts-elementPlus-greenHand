import CryptoJS from 'crypto-js'

/**
 * AES 加密
 * @param word: 需要加密的文本
 * KEY: // 需要前后端保持一致
 * mode: ECB // 需要前后端保持一致
 * pad: Pkcs7 //前端 Pkcs7 对应 后端 Pkcs5
 */
// const KEY = CryptoJS.enc.Utf8.parse('d7b85f6e214abcde')

/**
 * AES 加密
 */
export function AES_Encrypt(plaintext: string, KEY?: string) {
  KEY = KEY || 'kun8ik9khn7gf45n'
  let ciphertext = CryptoJS.AES.encrypt(plaintext, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return ciphertext
}

/**
 * AES 解密
 */
export function AES_Decrypt(jsonStr: string, KEY?: string) {
  KEY = KEY || 'kun8ik9khn7gf45n'
  let plaintext = CryptoJS.AES.decrypt(jsonStr, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)

  return plaintext
}

/**
 * Random_Character 随机字符获取(默认16位)
 */
export function Random_Character(length?: number) {
  length = length || 16
  var t = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPLKJHGFDSAZXCVBNM",
    a = t.length,
    n = "";
  for (var i = 0; i < length; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}