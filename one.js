// WB 01 AB 1234
// A B C .... Z
// AA AB AC ... AZ
// BA BB BC ... BZ
// ....
// ZA ZB ZC .... ZZ

function series() {
    let letters = 'ABCDEFGHIJKLMNO';

    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
    }

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            console.log(letters[i] + letters[j]);
        }
    }
}

series();