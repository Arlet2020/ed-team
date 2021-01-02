function math (x, y, z) {
  var mult = y * z;
  mult = mult + x;
  return mult;
}

console.log(math(53, 61, 67));

// optimizing

function math (a, b, c) {
  return (b * c) + a
}

console.log(math(53, 61, 67));