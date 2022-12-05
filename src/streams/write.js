import {dirname} from "./constants.js"
import path from "path"
import fs from "fs"
import * as readline from "readline"

const write = async () => {
    const file = 'fileToWrite.txt'
    const filePath = path.resolve(dirname, 'files', file)

    const writableStream  = fs.createWriteStream(filePath)

    writableStream.on('error',  (error) => {
        console.log(error);
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter a text: ',
    });

    console.log('Write text, press ENTER for save. Write \'exit\' for exit or press CTRL+C')

    rl.prompt()

    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                writableStream.write(line + '\n');
                rl.prompt();
                break;
        }
    }).on('close', () => {
        writableStream.end();
        writableStream.on('finish', () => {
            console.log(`\nAll your text have been written to ${filePath}`)
        })
        setTimeout(() => {
            process.exit(0);
        }, 100)
    })
}

await write()