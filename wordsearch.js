const transpose = function (matrix) {
  let output = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output[j].push(matrix[i][j]);
    }
  }

  return output;
};
  
const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  const backwardsJoin = letters.map((ls) => ls.reverse().join(""));
  console.log(backwardsJoin);

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  for (b of backwardsJoin) {
    if (b.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;