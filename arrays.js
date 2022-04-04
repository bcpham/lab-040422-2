'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const listItems = [];
  
  for (const i in items) {
    
    if (i % 2 === 0) {
      listItems.push(items[i]);
    }
  }
  console.log(listItems);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const smallItems = items.sort((a,b) => a - b).slice(0,n);
  smallItems.reverse();
}
  console.log(smallItems);
