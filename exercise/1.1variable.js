// varable

// var_keyword var_name = var_value;

var age = 17;
console.log(age);

//number
var num=12;
console.log(num)

//string
var team="Real Madrid";
console.log(team)

//boolean
var isPassed=true;
console.log(isPassed)

//check data type
console.log(typeof num)
console.log(typeof team)
console.log(typeof isPassed)

//data type casting
var char1="12";
console.log(typeof char1);
var char2=parseInt(char1);
console.log(typeof char2);

var char3="12.56";
console.log(typeof char3);
var char4=parseFloat(char3);
console.log(typeof char4);


//arithmetic
var add = age+num;
console.log(add)

var sub = age-num;
console.log(sub)

var mul = age*num;
console.log(mul)

var div = age/num;
console.log(div)

var mod = age%num;
console.log(mod)

var pow = age**num;
console.log(pow)

var a= 0.1;
var b= 0.2;
var c=a+b;
console.log(c.toFixed(2))// tofixed to fix the number after .

console.log(50/0);//infinity
console.log(-50/0);//-infinity

console.log("dasdfa"*23);