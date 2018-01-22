function duplicateCount (text) {
  let stuff = text.toLowerCase();
  let count = 0;
  let items = {};
  for (let i = 0; i < stuff.length; i++) {
    items[stuff[i]] = (items[stuff[i]] || 0) +1;
  }
  for (let x in items){
    if (items[x] > 1){
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("AaaB12334566"));
