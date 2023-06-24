function generateParenthesesPair(numberOfPairs) {
  if (numberOfPairs < 0) {
    return "Parameter harus bilangan bulat positif";
  }
  //cara1
  const result = ``;
  //cara2
  let frontParantheses = ``;
  let backParantheses = ``;

  //for (initial; condition; increment)
  for (let i = 0; i < numberOfPairs; i++) {
   // result += "";
    frontParantheses += "(";
    // console.log("1st loop front", frontParantheses);
    backParantheses += ")";
    // console.log("1st loop back", backParantheses);
    // console.log("-------------------------");
  }

  // //for (initial; condition; increment)
  // for (let i = 0; i < numberOfPairs; i++) {
  //   result += "";
    
  //  }
  console.log(result);
  return frontParantheses + backParantheses;
};


console.log(generateParenthesesPair(5)); // ''
console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
