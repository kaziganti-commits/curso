function nor(a, b) {
  if (a === false && b === false) {
    return true;
   } else {
    return false;
  }
}

// if (a === false || b === false) {
// return false;
// } else {
// return true;
// }


const x = nor(false, false);
console.log(x)