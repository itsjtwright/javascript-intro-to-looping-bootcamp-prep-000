function forLoop(array) {
  for (let i = 0; i<25;i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '':'s'}.`);
  }
}

function whileLoop(n) {
  while(n>0) {
    console.log(n);
    n--
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while(array.lenth > 0 || maybeTrue());
}