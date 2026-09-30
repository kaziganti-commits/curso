function nand(a, b) {
   if (a === true && b === true) {
  return false;
    } else {
  return true;
  }
}

const x  = nand(true, false);
console.log(x)