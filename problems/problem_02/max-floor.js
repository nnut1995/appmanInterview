const maxFloor = input => {
  var total = 0
  for (i = 0; i < 100; i++){
    total += i
    if (total > input ){
      return i-1
    }
  }
};
console.log(maxFloor(4000))

module.exports = { maxFloor };
