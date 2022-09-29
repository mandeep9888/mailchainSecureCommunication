import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { generateKeyPairSync } from 'crypto'
import { folder } from "../constant.js";

// generate private public keys of a user
export function generateKeys(user, dir) {
  const keyfolder = dir  !== 'undefined' ?  dir  : folder;
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: '',
    },
  })

  // create keys folder if does not exist
  if (!existsSync(keyfolder)){
    mkdirSync(keyfolder);
}
  // write user keys to the keys folder
  writeFileSync(`${keyfolder}/${user}_private.pem`, privateKey)
  writeFileSync(`${keyfolder}/${user}_public.pem`, publicKey)
}


