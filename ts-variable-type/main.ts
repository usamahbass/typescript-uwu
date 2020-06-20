let learnTypescript: boolean = true;
let total: number = 0;
let username: string = "Bass";

let sentence: string = `My name ${username}, i just learn Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Bass", 18];

enum Color {
  red = 5,
  green,
  blue,
}

let c: Color = Color.green;

console.log(c); // default red = 0, green = 1, dst.

let randomValue: any = 10;
randomValue = true;
randomValue = "Bass";

console.log(randomValue);

let myVar: any = 30;

console.log(myVar.name);

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && name in obj;
}

if (hasName(myVar)) {
  console.log(myVar.name);
}

let a;

a = 10;
a = true;

// or

let multiType: string | boolean;
multiType = "Bass";
multiType = true;

// not this !

let anyType: any;
anyType = 10;
anyType = false;
