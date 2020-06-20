interface Person {
  firstName: string;
  lastName: string;
}

/* 
    before use interface ||| 
*/

// function fullName(person: { firstName: string; lastName: string }) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

/* 
    after 
*/

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let theName = {
  firstName: "Usamah",
  lastName: "Basalamah",
};

fullName(theName); // => Usamah Basalamah
