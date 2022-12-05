import path from "path";
import fs from "fs";
import {doesExist} from "./doesExist.js";
import {dirname} from "./constants.js";
import {errorHandler} from "./errorHandler.js";

const create = async () => {
    const file = 'fresh.txt'
    const filePath = path.resolve(dirname, 'files', file)
    const standard = 'utf8'
    const text = 'I am fresh and young'

    const fileDoesExist = await doesExist(filePath)

    errorHandler(fileDoesExist, () => {
        fs.writeFile(filePath, text, standard, (error) => {
            if (error) throw error
        })
    })
}

await create();