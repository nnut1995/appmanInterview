const minStep = input => {
  var counter = 0
  while (true) {
    if (input == 1){
      return counter
    }
    else if (input%2 == 0){
      input = input/2
    }
    else{
      input = input + 1
    }
    counter += 1
}
};

console.log(minStep(15))
module.exports = { minStep };
