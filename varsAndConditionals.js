/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterattack =35;

let johnSnowheath = 100;
let jonSnowDefense = 10;
/*
if ( jonSnowAttack > jamieLannisterattack){
    console.log("jon's attack is better")
}

else if( jamieLannisterattack > jonSnowAttack) {
    console.log("jamie Lannester attack is better")
}
else{
    console.log("jon and jamie are the samie")

}
*/
/*
if ( johnSnowheath <= jamieLannisterattack - jonSnowDefense  ){
    console.log("jon dies")
}
else {
johnSnowheath -=(jamieLannisterattack - jonSnowDefense)
console.log(`Jon has ${johnSnowheath} health`)
}

if (johnSnowheath +50 >= 100){
johnSnowheath =100
console.log("jon is back at full health")
}

else{
    johnSnowheath +=50;
    console.log(`jon's health has been increased to ${johnSnowheath}`)
}
*/


let coinHeads = true

if( coinHeads !== false){
    console.log("the fight contines");
}
else{
    console.log("JOn is allowed to run away")
}