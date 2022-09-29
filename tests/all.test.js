import { generateKeys } from '../core/generateKeys.js'
import { generatedKeysForAllUsers } from '../core/generateKeysforAll.js';
import { encrypt, decrypt } from '../core/magic.js';
import { usersList } from '../constant.js';

import { existsSync, rmdirSync } from 'fs';
import {expect} from 'chai';

let originalMsg;
let encryptedMsg;
const folder = './temp'

  describe('Testing keys generation', function() {
    it('1. Should be able to generate and save the keys to folder for a user', function(done) {
    this.timeout(5000);
    generateKeys('test', folder);
    expect(existsSync(folder)).to.true;
    done();
    });

    it('2. Should be able to generate and save the keys to folder for all the users in the list', function(done) {
        this.timeout(7000);
        
        generatedKeysForAllUsers(folder);
        expect(existsSync(folder)).to.true;
        done();
        });

    it('3. User Should be able to encrypt message', function(done) {
            this.timeout(7000);
            const alicePub = `${folder}/${usersList[0]}_public.pem`
            originalMsg = "test message";
            encryptedMsg = encrypt(originalMsg, alicePub );
            expect(typeof(encryptedMsg)).to.equal('string');
            done();
        });
    it('4. User Should be able to decrypt message', function(done) {
            this.timeout(7000);
            const alicePrivate = `${folder}/${usersList[0]}_private.pem`
            const res = decrypt(encryptedMsg, alicePrivate );
            expect(res).to.equal(originalMsg);
            done();
        });
    it('5. should delete all the test keys', function(done) {
            this.timeout(7000);
            console.log(`deleting all keys from ${folder} folder`)
            try {
                rmdirSync(folder, { recursive: true })
              
                console.log(`test passed deleted ${folder} folder`)
              } catch (err) {
                console.error(`Error while deleting ${folder}.`)
              }
              expect(existsSync(folder)).to.false;
            done();
        });
    
});