function* createNames() {
  yield "Indra";
  yield "Rizkiawan";
}
console.info(createNames());
const names = createNames();
for (const name of names) {
  console.info(name);
}

// Function Generator Kompleks
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`yield ${i}`);
      yield i;
    }
  }
}

function buatGanjilArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`yield ${i}`);
      result.push(i);
    }
  }
  return result;
}

const angkaGanjil = buatGanjil(100);
console.info(angkaGanjil.next().value);
console.info(angkaGanjil.next().value);
console.info(angkaGanjil.next().value);
// for (const angka of angkaGanjil) {
//   console.info(angka);
// }
