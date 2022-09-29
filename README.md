# Secret Messaging - MailChain Assignment


## Problem statement ⚠️
> We help people communicate securely. This task covers a small part of that challenge. The aim of this assignment is to allow two users to communicate securely over an unsecured network. For example, Alice needs to send Bob a message, without an eavesdropper Eve being able to read the contents.
You can assume that Alice’s, Bob’s, and Eve’s public keys are stored or can be stored within your solution. Create a CLI > > that can encrypt an input so that it can only be decrypted by the intended recipient.

## Assumptions 💡
- Based upon the problem statement solution is a monolith cli tool.
- If required more users can be added to constant file at the start of the demostration.
- Public/Private keys are stored in solution for quick demostration of the encryption and decryption.
- Encryption is happening using public key of the reciepeint and decryption is happening using private key of the  intended recipient

## Features 🕹️

- User can be able to pick a role 
- User is able to perform two action "send secret message" and "read secret message"
- If user is sending a message he should select a recipient for that message.
- Message will be encrypted with recipient's public key which is already store in the system. 
- Message will be publish and in the next phase only intended recipient will be able to decrypt that message using its        private keys which is also stored in the cli tool. 
- If decrypted successfully secret message will be shown on the screen.

## Project structure
![Project structure](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/keys.png?raw=true)
- `index.js` - main file for the cli tool
- `core` - this folder contains two files as mentioned below
-- `generateKeys.js` generate 'rsa' keys and store them in `keys` folder
-- `magic.js` does the encryption and decryption of the messages
-  `keys` - this folder stores keys for all users.
-  `static` - contains all the static content.
-  `constant.js` - contains all the contants i.e. users, actions etc

## Tech and modules 💻

- [NodeJS](https://nodejs.org/en/) - CLI tool is written in Node
- [crypto](https://nodejs.org/api/crypto.html) - cryptographic functionality
- [fs](https://nodejs.org/api/fs.html) -  interacting with the file system
- [chalk](https://www.npmjs.com/package/chalk) - terminal string styling
- [chalkAnimation](https://www.npmjs.com/package/chalk-animation) - colorful animations in terminal output
- [inquirer](https://www.npmjs.com/package/inquirer) - common interactive command line user interfaces
- [nanospinner](https://www.npmjs.com/package/nanospinner) - the simplest and tiniest terminal spinner


## Installation ✈️

- tools requires [Node.js](https://nodejs.org/) v10+ to run.

- Install the dependencies start the tool.

```sh
cd mailchainSecureCommunication
npm i
```
- To start the cli tool 
```sh
node .
```
## Flow 🛶
![generate keys in folder](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/genrateKeys.png?raw=true)
Once the `node .` command is trigger for the very first time tools will generate public-private keys of all the users in `keys` folder

![Project structure](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/keys.png?raw=true)
You can view the keys in the `keys` folder generated.

![welcome screen](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/welcome.png?raw=true)
Once you have the keys generated tool will ask you to choose an user from the given list, what type of action you want to perform and whom do you want to send the message. It will encrypt the message using recipient public key so that only recipient can decqrypt the message.

![Encrypted message](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/encryptMsg.png?raw=true)
Once you have added your secret message tool will given you option for select who you are and what action you want to perform.

![Not intended User](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/tryAgain.png?raw=true)

If you are not the intended user tool will check and gives you an error. As reciepient private keys is used to decrypt the message and if you are not the intended user you wont be able to decrypt the secret message.

![Success](https://github.com/mandeep9888/mailchainSecureCommunication/blob/main/static/success.png?raw=true)
If you are the intended user secret message will be decrypted using your private keys and will be shown on the screen.

Complete demo can be accessed here [demo](https://drive.google.com/file/d/1vJW-obXDtHoAn3aoDmPlM7Yha0ZwJZBz/view?usp=sharing) 
