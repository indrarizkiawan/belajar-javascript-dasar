// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

const person = {
  name: "Indra Rizkiawan",
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
};
person.sayHello("Popi Afriani");

const person1 = {
  name: "Arumi Nasha Piandra",
};
person1.sayHello = function (name) {
  console.log(`Hello ${name}`);
};
person1.sayHello("Popi Afriani");
