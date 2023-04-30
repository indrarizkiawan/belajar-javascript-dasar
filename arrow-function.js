const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.log(say);
};
sayHello("Indra Rizkiawan");

// Arrow function tanpa block
const sayHello1 = (name) => console.info(`Hello ${name}`);
sayHello1("Indra Rizkiawan");

// Arrow function return value
const sum = (first, second) => first + second;
console.info(`Hasil Penjumlah 10 + 10 = ${sum(10, 10)}`);

// Arrow function sebagai parameter
function giveMeName(callback) {
  callback("Indra Rizkiawan");
}
giveMeName((name) => console.info(`Hello ${name}`));
