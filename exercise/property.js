const pc ={
    processor:"Ryzen",
    motherboard:"gigabyte",
    ram: 8,
    isUps: false
}

//access property value and print
//1st way dot notation
console.log(pc.processor);

//2nd way third bracket
console.log(pc["motherboard"]);

//why need second way
const pc2 ={
    processor:"Ryzen",
    motherboard:"gigabyte",
    ram: 8,
    isUps: false,
    "others": ["rom","casing","mouse"]
}

console.log(pc2["others"]);