import path from "path";
import fs from "fs";
import {errorHandler} from "./errorHandler.js";
import {doesExist} from "./doesExist.js";
import {dirname} from "./constants.js";

const list = async () => {
    const folderPath = path.resolve(dirname, 'files')

    const folderDoesExist = await doesExist(folderPath)

    errorHandler(!folderDoesExist, () => {
        fs.readdir(folderPath, (err, files) => {
            let arrFiles = []
            files.forEach(file => {
                arrFiles.push(path.parse(file).name)
            });

            console.table(arrFiles);
        });
    })
};

await list();