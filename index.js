#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import {existsSync} from 'fs';

import { generateKeys } from './core/generateKeys.js'
import { encrypt, decrypt } from "./core/magic.js";
import {usersList, actionsList, folder } from "./constant.js";
const users = usersList;

const actions = actionsList;

//generate keys for all the users specify in the constant.js file.
function generatedKeysForAllUsers() {
    users.forEach(element => {
        generateKeys(element);
    });
}

const log = console.log;
let user;
let action;
let msgReciever;
let secretMsg;

const pause = (ms = 1800) => new Promise ((arg) => setTimeout(arg, ms));

// generate keys if does not exist
if (!existsSync(folder)){
    const spinner = createSpinner('Genrating keys..... ⌛').start();
    generatedKeysForAllUsers();
    spinner.stop();
    spinner.success({text: `keys generated in ${folder} folder !! \n\n\n`})
    await pause();
}

async function welcome() {
    
    const title = chalkAnimation.rainbow(
        secretMsg ? '\n One new secret message found !! \n' : '\n Welcome to the world of secret messages..!!!\n'
    );
    await pause();
    title.stop();
    if (secretMsg) {
        log(`${chalk.yellowBright(secretMsg)}\n`);
        log(
            `${chalk.blue(`If you want to read the message try selecting an appropriate user and action from list!!\n 
                Or create a new message..`)}
            `)
    }
    else 
    {
        log(
            `${chalk.blue('HOW TO USE.. !!\n')}
            ${chalk.yellow(`CHOOSE ROLE FROM ALREADY CREATED LIST OF USERS
            CHOOSE THE ACTION YOU WANT TO PERFORM
            FOLLOW FURTHER INSTRUCTIONS FROM THE CLI `)}
        `)
    }
   
    await askName();

}

async function askName() {
    const response = await inquirer.prompt({
        name: 'user',
        type: 'list',
        message : " What's your name !! 🗿\n",
        choices: users,
    });
    user = response.user;

    await askAction();
}

async function askAction() {
    const response = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message : "Which action you want to perform.. ?? \n",
        choices: Object.values(actions),
    });

    action = Object.keys(actions).find(key => actions[key] === response.action);
    if(action == 'encrypt')
    {
        await askReciver();
    }
    else{
        if(!secretMsg)
        {
            const spinner = createSpinner('Checking message to decrypt..... 📬').start();
            await pause();
            spinner.stop()
            spinner.error({ text : '\n  There is no  message for your to decrypt  🗞️\n'});
            await pause();

            await welcome();
        }
        await decryptSecret(secretMsg);
    }
}

async function askReciver() {
    const response = await inquirer.prompt(
        {
        name: 'msgReciever',
        type: 'list',
        message : "Whom do you want to send the secret message 👀\n",
        choices: users.filter((el)=> el != user),
    });
    msgReciever = response.msgReciever;
    log(`** ${chalk.magenta(`only ${msgReciever} will be able to see the messege\n`)}`)
    await pause();
    await askSecretMsg();
}

async function askSecretMsg() {
    const response = await inquirer.prompt({
        name: 'msg',
        type: 'input',
        message : " Enter your secret message 📬\n",
    });
    return encryptSecret(response.msg);
}

async function encryptSecret(msg) {
    const spinner = createSpinner('Encrypting message..... ⌛').start();
    secretMsg = encrypt(msg, `${folder}/${msgReciever}_public.pem`);
    await pause();
    spinner.stop();
    spinner.success({text : 'Message Encrypted..!! 🤐 \n'});
    await pause();
    await welcome();
    
}

async function decryptSecret(secretMsg) {
    const spinner = createSpinner('Decrypting msg.....⌛\n \n ').start();
    await pause();
    try {
        const dec = decrypt(secretMsg, `${folder}/${user}_private.pem`);
        const txt = `${chalk.greenBright(dec)}`
        spinner.stop();
        log(`${chalk.blueBright(`HURRAY !! HERE'S YOUR SECRET MESSAGE 🔏\n`)}`);
        spinner.success({text: txt });
    } catch (error) {
        spinner.stop();
        const txt = `${chalk.red(
            '\n 💀💀💀 You are not the intended recipient of this messege \n'
            )}`
        spinner.error({ text : txt });
        log(`${chalk.yellow('TRY AGAIN 🔂!!\n')}`);
        await pause();
        await welcome();
    }
}


await welcome();
