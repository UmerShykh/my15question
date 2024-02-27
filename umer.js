// ASSINGMENT NO 2 
var perSon_naMe = "Umer,Shaikh";
console.log(perSon_naMe);
// ASSINGMENT NO 3
var AnotherPers = ("IT courSe");
console.log(AnotherPers.toLowerCase());
console.log(AnotherPers.toUpperCase());
// TO TITTLE CASE METHOD IS NOT DEFINE TYPESCRIPT SO FIRST OF ALL WE DECLARED INTO FUCNTION
var TitleCase = function (str) {
    return str.toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
};
var PrinT = "goVerner, HOUse";
console.log(TitleCase(PrinT));
// ASSINGMENT NO 4
var famousQ = "Nothing Is Impossible";
var Author = "Mark zuckerberg";
console.log("famousQ:\"".concat(famousQ, "\""));
console.log("Author:".concat(Author));
// ASSINGMENT NO 5
var famous_person = "UMER SHAIKH";
var Words = "NOTHING IS IMPOSSIBLE";
var message = "Quote\"".concat(Words, "\"\nAuthor:").concat(famous_person);
console.log(message);
// ASSINGMENT NO 6
var NameWithwhiteSpaces = "\Umer\t\nShaikh  ";
console.log(NameWithwhiteSpaces);
//ASSINGMENT NO 7
// ADD
console.log(5 + 3);
// sub
console.log(13 - 5);
// multiply
console.log(4 * 2);
// divide
console.log(32 / 4);
//ASSINGMENT NO 9
var myFav_Nub = 88;
var prinNt = "My favourite number is ".concat(myFav_Nub, ".");
console.log(prinNt);
//ASSINGMENT NO 10
console.log(5 + 3);
// sub
console.log(13 - 5);
// multiply
console.log(4 * 2);
// divide
console.log(32 / 4);
//ASSINGMENT NO 9
console.log(5 + 3);
// sub
console.log(13 - 5);
// multiply
console.log(4 * 2);
// divide
console.log(32 / 4);
//ASSINGMENT NO 10
var myFav_num = 88;
var prinnnt = "My favourite number is ".concat(myFav_num, ".");
console.log(prinnnt);
//ASSINGMENT NO 11
var Friends_NaMe = ["HANAN", "UMER", "HAFIE",];
for (var i = 0; i < Friends_NaMe.length; i++) {
    console.log("LIST OF MY FRIENDS", Friends_NaMe);
}
//ASSINGMENT NO 12
var GreeTing_NaMe = ["HANAN", "UMER", "HAFIE",];
for (var i = 0; i < GreeTing_NaMe.length; i++) {
    console.log("Hello, ".concat(GreeTing_NaMe[i], "! KYA HAAL CHALL? "));
}
//ASSINGMENT NO 13
var TransportV = ["Lambourghini", "Farari", "BMW", "Tesla"];
for (var i = 0; i < TransportV.length; i++) {
    console.log("I would Like to Drive These all Cars ".concat(TransportV[i]));
}
//ASSINGMENT NO 14       
var GuessT = ["HASEEB", "HAFIE", "HANAN", "UMER"];
for (var i = 0; i < GuessT.length; i++) {
    console.log("Dear, ".concat(GuessT[i], ", \n\n You are ivited to dinner. "));
}
//ASSINGMENT NO 15
var AGuessT = ["HASEEB", "HAFIE", "HANAN", "UMER"];
var removedGuest = GuessT.pop();
if (removedGuest) {
    console.log("Sorry, ".concat(removedGuest, ", you are no longer invited to dinner."));
}
else {
    console.log("No guest to remove.");
}
AGuessT.push("ALI");
for (var i = 0; i < AGuessT.length; i++) {
    console.log("Dear ".concat(AGuessT[i], ", \nYou are invited to dinner."));
}
//ASSINGMENT NO 16
