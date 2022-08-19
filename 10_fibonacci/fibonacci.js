const fibonacci = (n) => {
  var num = parseInt(n);
  if (num > 0) {
    var array = [0, 1];
    var val = 1;
    for (let i = 0; i < num - 2; i++) {
      array.push(array[array.length - 2] + array[array.length - 1]);
      val = array[array.length - 2] + array[array.length - 1];
    }
    return val;
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
