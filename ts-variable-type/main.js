var learnTypescript = true;
var total = 0;
var username = "Bass";
var sentence = "My name " + username + ", i just learn Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Bass", 18];
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c); // default red = 0, green = 1, dst.
var randomValue = 10;
randomValue = true;
randomValue = "Bass";
console.log(randomValue);
var myVar = 30;
console.log(myVar.name);
function hasName(obj) {
    return !!obj && typeof obj === "object" && name in obj;
}
if (hasName(myVar)) {
    console.log(myVar.name);
}
var a;
a = 10;
a = true;
// or
var multiType;
multiType = "Bass";
multiType = true;
// not this !
var anyType;
anyType = 10;
anyType = false;
