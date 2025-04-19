const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", // Added lastName property
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; // Include lastName in greeting
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (
    person //arrow function syntax
  ) =>
    person.numFingers === 6
      ? //If the person has numFingers equal to 6, it returns the famous catchphrase from The Princess Bride. Otherwise, it defaults to "Nice to meet you.".
        "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);
