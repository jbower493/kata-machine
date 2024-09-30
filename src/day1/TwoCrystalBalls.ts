export default function two_crystal_balls(breaks: boolean[]): number {
    const incrementor = Math.floor(Math.sqrt(breaks.length));

    for (let i = incrementor; i < breaks.length; i += incrementor) {
        if (breaks[i]) {
            for (let j = i - incrementor; j < i; j++) {
                if (breaks[j]) {
                    return j;
                }
            }
        }
    }

    const lastKnownFalse = breaks.length - (breaks.length % incrementor) - 1;
    for (let i = lastKnownFalse + 1; i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
