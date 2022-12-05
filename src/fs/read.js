import path from "path";
import {dirname} from "./constants.js";
import {doesExist} from "./doesExist.js";
import {errorHandler} from "./errorHandler.js";
import fs from "fs";

const read = async () => {
    const file = 'fileToRead.txt'
    const filePath = path.resolve(dirname, 'files', file)

    const fileDoesExist = await doesExist(filePath)

    errorHandler(!fileDoesExist, () => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) throw error
            console.info(data)
        })
    })
};

await read();