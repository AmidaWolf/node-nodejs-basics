import * as stream from "stream";
import readline from "readline";

const transform = async () => {
    const reverseString = (str) => [...str].reverse().join('');

    class ReverseStream extends stream.Transform {
        constructor(options = {}) {
            super(options);
        }

        _transform(chunk, encoding, callback) {
            this.push(reverseString(chunk.toString(), 'utf-8'))
            callback()
        }
    }

    const rl = readline.createInterface({
        input: process.stdin.pipe(new ReverseStream()),
        output: process.stdout,
        prompt: 'Enter a text for take reverse: ',
    });

    rl.prompt()

    rl.on('line', (line) => {
        if (line.trim()) {
            rl.write(line)
            rl.close();
        }
    }).on('close', () => {
        process.exit(0);
    })
}

await transform();