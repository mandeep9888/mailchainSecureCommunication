# Secret Messaging - MailChain Assignment


## Problem statement ⚠️
> We help people communicate securely. This task covers a small part of that challenge. The aim of this assignment is to allow two users to communicate securely over an unsecured network. For example, Alice needs to send Bob a message, without an eavesdropper Eve being able to read the contents.
You can assume that Alice’s, Bob’s, and Eve’s public keys are stored or can be stored within your solution. Create a CLI > > that can encrypt an input so that it can only be decrypted by the intended recipient.

## Assumptions 💡
- Based upon the problem statement solution is a monolith cli tool.
- If required more users can be added to constant file at the start of the demostration.
- Public/Private keys are stored in solution for quick demostration of the encryption and decryption.
- Encryption is happening using public key of the recipeint and decryption is happening using private key of the  intended recipient

## Features 🕹️

- User can be able to pick a role 
- User is able to perform two action "send a message" and "read a secret message"
- If user is sending a message he should select a recipient for that message.
- Message will be encrypted with recipient's public key which is already store in the system. 
- Message will be publish and in the next phase only intended recipient will be able to decrypt that message using its private keys which is also stored in the cli tool. 
- If decrypted successfully secret message will be shown on the screen.

## Tech and modules 💻

- [NodeJS](https://nodejs.org/en/) - CLI tool is written in Node
- [crypto](https://nodejs.org/api/crypto.html) - cryptographic functionality
- [fs](https://nodejs.org/api/fs.html) -  interacting with the file system
- [chalk](https://www.npmjs.com/package/chalk) - terminal string styling
- [chalkAnimation](https://www.npmjs.com/package/chalk-animation) - colorful animations in terminal output
- [inquirer](https://www.npmjs.com/package/inquirer) - common interactive command line user interfaces
- [nanospinner](https://www.npmjs.com/package/nanospinner) - the simplest and tiniest terminal spinner


## Installation ✈️

tools requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies start the tool.

```sh
cd mailchainSecureCommunication
npm i
node .
```
## Flow 
