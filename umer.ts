// ASSINGMENT NO 2 
let perSon_naMe:string = "Umer,Shaikh";
console.log(perSon_naMe);

// ASSINGMENT NO 3

let AnotherPers: string = ("IT courSe");
console.log(AnotherPers.toLowerCase());
console.log(AnotherPers.toUpperCase());

// TO TITTLE CASE METHOD IS NOT DEFINE TYPESCRIPT SO FIRST OF ALL WE DECLARED INTO FUCNTION


let TitleCase = (str: string): string => {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

let PrinT = "goVerner, HOUse";
console.log(TitleCase(PrinT));


// ASSINGMENT NO 4

let famousQ:string="Nothing Is Impossible";
let Author:string="Mark zuckerberg"; 
console.log(`famousQ:"${famousQ}"`);
console.log(`Author:${Author}`);

// ASSINGMENT NO 5


let famous_person:string= "UMER SHAIKH";
let Words:string= "NOTHING IS IMPOSSIBLE";
let message:string= `Quote"${Words}"\nAuthor:${famous_person}`;
console.log(message);


// ASSINGMENT NO 6

let NameWithwhiteSpaces:string= "\Umer\t\nShaikh  ";
console.log(NameWithwhiteSpaces);

//ASSINGMENT NO 7


// ADD
console.log(5 +3);
// sub
console.log(13 -5);
// multiply
console.log(4 * 2);
// divide
console.log( 32 / 4);

//ASSINGMENT NO 9

let myFav_Nub:number = 88;
let prinNt:string =`My favourite number is ${myFav_Nub}.`;
console.log(prinNt);

//ASSINGMENT NO 10

console.log(5 +3);
// sub
console.log(13 -5);
// multiply
console.log(4 * 2);
// divide
console.log( 32 / 4);

//ASSINGMENT NO 9

console.log(5 +3);
// sub
console.log(13 -5);
// multiply
console.log(4 * 2);
// divide
console.log( 32 / 4);

//ASSINGMENT NO 10

let myFav_num:number = 88;
let prinnnt:string =`My favourite number is ${myFav_num}.`;
console.log(prinnnt);


//ASSINGMENT NO 11

let Friends_NaMe:string[] = ["HANAN", "UMER", "HAFIE",];
for(let i=0; i < Friends_NaMe.length; i++) {
console.log("LIST OF MY FRIENDS", Friends_NaMe);}

//ASSINGMENT NO 12


let GreeTing_NaMe:string[] = ["HANAN", "UMER", "HAFIE",];
for(let i=0; i < GreeTing_NaMe.length; i++) {
console.log( `Hello, ${GreeTing_NaMe[i]}! KYA HAAL CHALL? `);}


//ASSINGMENT NO 13

let TransportV:string [] = ["Lambourghini","Farari", "BMW", "Tesla"];
for(let i = 0; i < TransportV.length; i++) {
    console.log(`I would Like to Drive These all Cars ${TransportV[i]}`);
}

//ASSINGMENT NO 14       
let GuessT:string [] = ["HASEEB","HAFIE", "HANAN", "UMER"];
for(let i = 0; i < GuessT.length; i++) {
    console.log(`Dear, ${GuessT[i]}, \n\n You are ivited to dinner. `);
}

//ASSINGMENT NO 15



let AGuessT: string[] = ["HASEEB", "HAFIE", "HANAN", "UMER"];

let removedGuest = GuessT.pop();
if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner.`);
} else {
    console.log("No guest to remove.");
}
AGuessT.push("ALI");
for (let i = 0; i < AGuessT.length; i++) {
    console.log(`Dear ${AGuessT[i]}, \nYou are invited to dinner.`);
}

    
    
   

