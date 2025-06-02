{
    
var weight = 40;

if (weight>=40){//weight-bear test
    console.log("can't bear");
}else{
    console.log("can bear");
}

var age = 19;
if (age>15){//age test for entry
    console.log("you can enter the ghost house");
    if (age>18){
        console.log("you can enter the dark room")
    }else{
        console.log("you can't enter the dark room")
    }
}else{
    console.log("you can't enter the ghost house");
}

let salary = 40000;
let isBCS = true;
let hasHome = false;

if( salary >=30000 && hasHome==true && isBCS==true){// husband quality test
    console.log("Perfect husband material");
}
else if(( salary >=30000 && hasHome==true)|| isBCS==true){
    console.log("ok, husband material");
}else{
    console.log("no, get out");
}

var productPrice = 2000;
var discountPrice;
var paymentPrice;

if (productPrice>8000){//discount test
    discountPrice=productPrice*10/100;
    paymentPrice=productPrice-discountPrice;
    console.log(`you should pay: ${paymentPrice} tk`);
}
else if (productPrice>6000){
    discountPrice=productPrice*8/100;
    paymentPrice=productPrice-discountPrice;
    console.log(`you should pay: ${paymentPrice} tk`);
}
else if (productPrice>5000){
    discountPrice=productPrice*5/100;
    paymentPrice=productPrice-discountPrice;
    console.log(`you should pay: ${paymentPrice} tk`);
}
else if (productPrice>3000){
    discountPrice=productPrice*3/100;
    paymentPrice=productPrice-discountPrice;
    console.log(`you should pay: ${paymentPrice} tk`);
}else{
    paymentPrice=productPrice;
    console.log(`you should pay: ${paymentPrice} tk`);
}


var isGoFair= false;
var hasMoney= true;
var findSweet= true;

if(isGoFair==true){//nested test
    console.log("melay ashsiiii");
    if(hasMoney==true){
        console.log("dekhi to ki ase");
        if(findSweet==true){
            console.log("misty khabo");
        }
    }else{
        console.log("tk nai , only mela ghuri");
    }
}else{
    console.log("mela jaite parlam na");
    if(hasMoney==true){
        console.log("data kine movie dekhbo");
    }else{
        console.log("only muri khabo");
    }
}
}