export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0,
        hi = haystack.length;

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v < needle) {
            // search the right half

            // lo = m + 1, because lower bound is inclusive, and we don't want to check m again, so we need the new lo to be m + 1
            lo = m + 1;
        } else {
            // search the left half

            // hi = m, because higher bound is exclusive, by setting high to m (not m + 1), we won't check m again
            hi = m;
        }
    }

    return false;
}

// high is exclusive, low is inclusive
