// Global Scope
let counter = 0;
// Global Scope
function hitMe() {
  // Local Scope
  counter++;
}
hitMe();
hitMe();
console.info(counter);

// Global Scope
function first() {
  // Local Scope
  let firstVariable = "First";
  function firstNested() {
    console.info(firstVariable);
  }
  firstNested();
}

function second() {
  // Local Scope
  let secondVariable = "Second";
}
first();
second();
// console.info(firstVariable);
// console.info(secondVariable);
