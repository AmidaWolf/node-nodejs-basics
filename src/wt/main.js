import {fileURLToPath} from "url";
import path from "path";
import * as os from "os";
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const workerFile = 'worker.js'
    const workerFilePath = path.resolve(__dirname, workerFile)
    const numberForStartFunc = 10;

    const cpus = os.cpus()

    const promises = []

    cpus.forEach((value, index) => {
        const num = numberForStartFunc + index
        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(workerFilePath, {
                    workerData: num
                });
                worker.on('message', value => {
                    resolve({ status: 'resolved', data: value })
                });
                worker.on('error', reject => {
                    resolve({ status: 'error', data: null });
                });
                worker.on('exit', (code) => {
                    if (code !== 0)
                        reject(new Error(`Worker stopped with exit code ${code}`));
                });
            })
        )
    })

    await Promise.all(promises).then(results => {
        console.log(results)
    })
};

await performCalculations();