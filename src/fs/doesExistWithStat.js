import fs from "fs/promises";

export const doesExistWithStat = async (path) => {
    try {
        await fs.stat(path);
        return true;
    } catch (err) {
        return false;
    }
}