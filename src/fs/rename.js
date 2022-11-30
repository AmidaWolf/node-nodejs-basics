import path from "path";
import {dirname} from "./constants.js";
import {doesExist} from "./doesExist.js";
import {errorHandler} from "./errorHandler.js";
import fs from "fs";

const rename = async () => {
    const filePath = path.resolve(dirname, 'files', 'wrongFilename.txt')
    const editedFilePath = path.resolve(dirname, 'files', 'properFilename.md')

    const fileDoesExist = await doesExist(filePath)
    const editedFileDoesExist = await doesExist(editedFilePath)

    errorHandler((!fileDoesExist || editedFileDoesExist), () => {
        fs.rename(filePath, editedFilePath, (error) => {
            if (error) throw error
        })
    })
};

await rename();