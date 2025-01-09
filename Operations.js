//Arthimetic Operations
/*console.log("1" + 2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
+,-,*,/,--,++,**,%*/

//Conversion
//console.log((3*4) + (5+3))

//Comparision
let a = 3;
let b = "3"
console.log(a===b);
//!=,===,!==,>,>=,<=,<

/*Datatypes : Primitive : String,number,boolean,null,undefined,symbol,BigInt
Nonprimitive : object,array,functions*/ 
const BigNumber = 466415465654656n
console.log(typeof BigNumber);

//Stack and Heap Memory
let myName = "Sriharsh"
let otherName = myName
otherName = "Sri"
console.log(myName);
console.log(otherName);

let user={
    name : "Sriharsh",
    BankName : "Kotak",
    Upi : "sriharsh43@ybl"
} //If we made any changes in the values then the original values are refelcted in the heap
let user2 = user
user2.BankName = "Union"
console.log(user.BankName);
console.log(user2.BankName);











