import {fileURLToPath} from 'url';
import { fork } from 'node:child_process'
import path from 'path';

const spawnChildProcess = async (args) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const program = 'script.js'
	const programPath = path.resolve(__dirname, 'files', program)

	fork(programPath, args)
};

spawnChildProcess();