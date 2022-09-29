# Secret Messaging - MailChain Assignment


### Problem statement
> We help people communicate securely. This task covers a small part of that challenge. The aim of this assignment is to allow two users to communicate securely over an unsecured network. For example, Alice needs to send Bob a message, without an eavesdropper Eve being able to read the contents.
You can assume that Alice’s, Bob’s, and Eve’s public keys are stored or can be stored within your solution. Create a CLI > > that can encrypt an input so that it can only be decrypted by the intended recipient.

### Assumptions
- Based upon the problem statement solution is a monolith cli tool.
- If required more users can be added to constant file at the start of the demostration.
- Public/Private keys are stored in solution for quick demostration of the encryption and decryption.
- Encryption is happening using public key of the reciepeint and decryption is happening using private key of the  intended recipient

## Features

- User can be able to pick a role 
- User is able to perform two action "send a message" and "read a secret message"
- If user is sending a message he should select a recipient for that message.
- Message will be encrypted with recipient's public key which is already store in the system. 
- Message will be publish and in the next phase only intended recipient will be able to decrypt that message using its        private keys which is also stored in the cli tool. 
- If decrypted successfully secret message will be shown on the screen.
