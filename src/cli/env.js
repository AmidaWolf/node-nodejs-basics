const parseEnv = () => {
    const searchString = 'RSS_'
    let resultString = ''

    Object.keys(process.env).filter((key) => {
        if (key.includes(searchString)) return key
    }).forEach((key) => {
        resultString = resultString + `${key}=${process.env[key]}; `
    })

    console.log(resultString.slice(0, -2))
};

parseEnv();