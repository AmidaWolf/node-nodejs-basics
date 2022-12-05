import path from "path";
import {dirname} from "./constants.js";
import {doesExist} from "./doesExist.js";
import {errorHandler} from "./errorHandler.js";
import fs from "fs";

const remove = async () => {
    const file = 'fileToRemove.txt'
    const filePath = path.resolve(dirname, 'files', file)

    const fileDoesExist = await doesExist(filePath)

    errorHandler(fileDoesExist, () => {
        fs.unlink(filePath, (error) => {
            if (error) throw error
        })
    })
};

await remove();