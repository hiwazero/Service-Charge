export const computeAge = (pastDate) => {

    const today = new Date();
    const differenceInMs = today - pastDate

    const daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    return daysPassed
}