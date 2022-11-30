import path from "path";
import {dirname} from "./constants.js";
import {doesExist} from "./doesExist.js";
import fs from "fs";
import {errorHandler} from "./errorHandler.js";

const copy = async () => {
    const folderPath = path.resolve(dirname, 'files')
    const copyFolderPath = path.resolve(dirname, 'files_copy')

    const folderDoesExist = await doesExist(folderPath)
    const folderCopyDoesExist = await doesExist(copyFolderPath)

    errorHandler((!folderDoesExist || folderCopyDoesExist), () => {
        fs.cp(folderPath, copyFolderPath, {recursive: true}, (error) => {
            if (error) throw error
        })
    })
};

copy();