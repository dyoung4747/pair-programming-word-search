const transpose = function(matrix) {
    const result = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0));
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
        result[c][r] = matrix[r][c];
        }
    }
    return result;
};

const wordSearch = (letters, word) => {

    if(letters.length === 0) return undefined;

    if(word.length === 0) return undefined;

    const horizontalJoin = letters.map(ls => ls.join(''));

    let isTrue = false;

    const verticalArr = transpose(letters);
    const verticalJoin = verticalArr.map(ls => ls.join(''));
    // console.log(verticalJoin)

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return isTrue = true;
        }
    }

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return isTrue = true;
        }
    }

    return isTrue;
};

module.exports = wordSearch;