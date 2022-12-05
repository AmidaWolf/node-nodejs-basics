const parseArgs = () => {
    const args = process.argv.slice(2);
    let resultString = ''

    for (let i = 0; i<args.length; i +=2) {
        resultString = resultString + `${args[i].slice(2)} is ${args[i+1]}, `
    }

    console.log(resultString.slice(0, -2))
};

parseArgs();