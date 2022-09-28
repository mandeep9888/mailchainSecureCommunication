import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { generateKeyPairSync } from 'crypto'

// generate private public keys of a user
export function generateKeys(user) {
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
  const folder = './keys';
  if (!existsSync(folder)){
    mkdirSync(folder);
}
  // write user keys to the keys folder
  writeFileSync(`${folder}/${user}_private.pem`, privateKey)
  writeFileSync(`${folder}/${user}_public.pem`, publicKey)
}


