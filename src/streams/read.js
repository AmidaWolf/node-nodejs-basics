import path from "path";
import fs from "fs";
import {dirname} from "./constants.js";

const read = async () => {
    const file = 'fileToRead.txt'
    const filePath = path.resolve(dirname, 'files', file);

    const readableStream = fs.createReadStream(filePath, 'utf-8');

    readableStream.on('error', function (error) {
        console.log(error);
    })

    readableStream.on('data', chunk => {
        process.stdout.write(chunk);
    });
};

await read();