import {errorText} from "./constants.js";

export const errorHandler = (doesExist, callback) => {
    if (doesExist) {
        throw new Error(errorText)
    } else {
        callback()
    }
}