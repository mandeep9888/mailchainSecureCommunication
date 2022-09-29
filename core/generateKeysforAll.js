import {usersList, folder } from "../constant.js";
import { generateKeys } from './generateKeys.js'

export function generatedKeysForAllUsers(dir = folder) {
    usersList.forEach(element => {
        generateKeys(element, dir);
    });
}