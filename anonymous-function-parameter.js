function giveMeName(callback) {
  callback("Indra");
}

giveMeName(function (name) {
  console.log(`Hello ${name}`);
});
