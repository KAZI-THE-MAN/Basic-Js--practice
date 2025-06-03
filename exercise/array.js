//array

let number = [22,45,5456,46,35,3535,535,356,35,36,36,36,3636,66];
console.log(number)
console.log(number.length)
console.log(number[2])

let partNumber = number.slice(4,8);
console.log(partNumber)


let position = ["first","second","third","fourth"];
position.push("fifth");
console.log(position);// array after push

sub= position.pop();
console.log(sub);// that item del
console.log(position);// array after pop

position.shift();
console.log(position);

position.unshift("kazi");
console.log(position);

console.log(position.includes("third"));
console.log(position.includes("sixth"));

if(position.includes("kazi")){
    console.log("kazi ok");
}else{
    console.log("kazi no");
}

console.log(position.indexOf("third"));
console.log(position.indexOf("ten"));


tree=["mango","berry","jack-fruit"]
tree2=["aaa","bbb"]

console.log(tree.join("  & "));

console.log(tree.concat(tree2));