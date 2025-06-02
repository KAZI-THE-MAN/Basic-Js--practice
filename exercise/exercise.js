{// js practice17

// 1st part


// arithmetic
console.log("kazi");
console.log(233);
console.log(20.445);

console.log(typeof "kazi");
console.log(typeof 233);
console.log(typeof 20.445);

console.log("kazi" + 233);
console.log("233" + 20.445);
console.log(parseInt("20.445"));
console.log(parseInt(20.445));

console.log("kazi"-22);
console.log(233/0);
console.log(-233/0);

var sub=0.1;
var g=0.2;
var sum=sub+g;
console.log(sum.toFixed(2));

console.log(233%8);

console.log(20.4*34);


var isFruits = false;
console.log(isFruits);



// comparison

let a=23;
let b=20;
let c=45;
let d=20;
let e="20";
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a==d);
console.log(a!=b);
console.log(b==e);
console.log(b===e);
console.log(b!=e);
console.log(b!==e);

// if case
if("karim"=="rahim"){
    console.log("mil geya");
}


if("karim"!="rahim"){
    console.log("mila nehi");
}


// if-else case
if("karim"=="rahim"){
    console.log("mil geya");
}else{
    console.log("noo noo");
}


if("karim"!="rahim"){
    console.log("mila nehi");
}else{
    console.log("different");
}


// if    else if    else

let appleRate=200;
let orangeRate=240;
let grapesRate=400;

let s1=  appleRate +orangeRate +grapesRate;
console.log(s1);

let s2=  (appleRate+orangeRate ) - grapesRate;
console.log(s2);

let multi=  appleRate*orangeRate;
console.log(multi);

let div= grapesRate/appleRate;
console.log(div);

let mod=  grapesRate % appleRate;
console.log(mod);


if (( appleRate < orangeRate)&&(grapesRate < orangeRate)){
    console.log("orangeRate is the highest");
}else if(( appleRate < grapesRate)&&(orangeRate < grapesRate)){
    console.log("grapesRate is the highest");
}else{
    console.log("appleRate is the highest");
}



//ternary
let karimAge= 17;
let voter = karimAge>=18? "Yes Karim" : "No Karim" ;
console.log(voter)

let rahimAge= 19;
let voter2 = rahimAge>=18? "Yes Rahim" : "No Rahim" ;
console.log(voter2)






// againnn startttttttttt

print
console.log(131)

console.log(131.534534)

console.log("131")

console.log("kazi_vai")

// check type -    typeof
console.log(typeof 131)

console.log(typeof 131.534534)

console.log(typeof "131")

console.log(typeof "kazi_vai")

console.log(typeof true)


//arithmetic


var a1=12
var a2=22
var a3="30"
var a=a1+a2
// when a string add with a number and the inner string is a number then the addition time , the concat happened. 
var b=a3+a2

// but when string and num both in subtract or multiply or divide and string inner value is number , then normal operation happened
var c=a3-a2
console.log(a)
console.log(b)
console.log(c)



var num1=0.1
var num2=0.2
var num=num1+num2
// tofixed is used when need to fix decimal number after point
console.log(num.toFixed(2))


var n2="23"
var n=parseInt(n2) //change into int
console.log(n)
console.log(typeof n)



var x=23
var y=16
var x1=x+y
var x2=x-y
var x3=x*y
var x4=x/y
var x5=x%y
var x6=x**3
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)
console.log(x6)




//logical

var l=20
var j=5
var k=35
var z="35"

console.log(l>j)
console.log(l<j)
console.log(l>=j)
console.log(l<=j)
console.log(l==j)
console.log(l!=j)


console.log(k==z)
console.log(k===z)
console.log(k!=z)
console.log(k!==z)


console.log(l>j && k>j)
console.log(l>j && j>k)
console.log(l>j || j>k)


//if else
var age=19
if(age>=18){
    console.log("You are eligible for voter");
}else{
    console.log("You aren't eligible for voter");
}


var publicAge=17
if(publicAge>=18){
    console.log("You are eligible for voter");
}else if(publicAge==17){
    console.log("You will be eligible the next year");
}else{
    console.log("You aren't eligible for voter");
}


var salary = 40000
var isHandsome = true
var familyHighProfile = true
var property=2000000

if ((salary>30000 && isHandsome==true)&&(property>2500000 && familyHighProfile==true)){
    console.log("good choice");
}else{
    console.log("bad choice");

}
}

