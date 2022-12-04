import path from "path";
import {dirname} from "./constants.js";
import fs from "fs";
import * as zlib from "zlib";
import * as stream from "stream";

const decompress = async () => {
    const file = 'fileToCompress.txt'
    const archive = 'archive.gz'
    const filePath = path.resolve(dirname, 'files', file);
    const archivePath = path.resolve(dirname, 'files', archive);

    const readableStream = fs.createReadStream(archivePath)
    const writableStream = fs.createWriteStream(filePath)
    const unzip = zlib.createUnzip()

    stream.pipeline(readableStream, unzip, writableStream, (err) => {
        console.log(err)
    })
};

await decompress();