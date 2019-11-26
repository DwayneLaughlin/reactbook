function perfSquare (num) {
    for (let i = 1; i < (num / 2); i++) {
        let tmp = i * i;
        if ( tmp === num ) {
            return true;
        } else if (tmp > num) {
            return false;
        }
    }
    return false;
}

let output = perfSquare(+process.argv[2]);

console.log(output);