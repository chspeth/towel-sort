module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    return matrix.reduce((acc, curr, i) => {
        return acc.concat((i % 2) ? curr.reverse() : curr);
    })
}
