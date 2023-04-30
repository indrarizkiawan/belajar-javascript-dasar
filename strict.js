function useStrictModd() {
  //   "use strict";
  const person = {
    firstname: "Indra",
  };
  with (person) {
    console.info(firstname);
  }
}
useStrictModd();
