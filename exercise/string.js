// let str ="Bangladesh";
// console.log(str);
// console.log(str.length);
// console.log(str[1]);

// // str[0] = "w";//string index value is immutable
// // console.log(str);

// str1 = "aafahHDSFDSGDHHGS";
// console.log(str1.toUpperCase());
// console.log(str1.length);

// str2 = "aafahHDSFDSGDHHGS";
// console.log(str2.toLowerCase());


// //slice, split, join, concat, includes
// let namee = "KAZI MEHEDI HASAN RABBI";
// console.log(namee.slice(1,8));//slicing part print

// console.log(namee.split(" "));//splitting 

// let name2= ["kazi","mehedi","hasan","rabbi"];
// console.log(name2.join());
// console.log(name2.join("/"));
// console.log(name2.join("-"));

// let name3="kazi";
// let name4="mehedi";

// let fullname = name3 +" "+name4;
// console.log(fullname);

// let fullname2 = name3.concat(" ").concat(name4);
// console.log(fullname2);

// console.log(name3.includes("a"));//check the element in or not in


//reverse

let line= "I am Kazi Mehedi";


// let reverse=""; //1st way

// for(let letter of line){
//      reverse= letter+reverse;
// }
// console.log(reverse);


// let rev = "";//2nd way
// for ( let i=0; i<line.length; i++){
//     rev=line[i]+rev;
// }
// console.log(rev);

let rev= line.split("").reverse().join("")//3rd way
console.log(rev)