// array of length n -> 1 to n + 1
// a number is missing
// not sorted
// array of length 5 -> 1 to 6 -> missing 3

function missing() {
    let obj = {};
    const array = [2, 3, 1, 6, 5];

    for (const item of array) {
        obj[item] = 1;
    }

    for (let i = 0; i < array.length; i++) {
        if (obj[i + 1] === undefined) {
            console.log(i + 1, "is missing!");
            break;
        }
    }
}

missing();