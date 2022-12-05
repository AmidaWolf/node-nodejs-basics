import path from "path";
import fs from "fs";
import * as zlib from "zlib";
import * as stream from "stream";
import {dirname} from "./constants.js";

const compress = async () => {
    const file = 'fileToCompress.txt'
    const archive = 'archive.gz'
    const filePath = path.resolve(dirname, 'files', file);
    const archivePath = path.resolve(dirname, 'files', archive);

    const readableStream = fs.createReadStream(filePath)
    const writableStream = fs.createWriteStream(archivePath)
    const gzip = zlib.createGzip()

    stream.pipeline(readableStream, gzip, writableStream, (err) => {
        console.log(err)
    })
};

await compress();