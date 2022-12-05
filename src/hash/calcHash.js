import fs from "fs";
import crypto from "crypto";
import path from "path";
import {fileURLToPath} from "url";

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = 'fileToCalculateHashFor.txt'

    const filePath = path.resolve(__dirname, 'files', file)
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
};

await calculateHash();