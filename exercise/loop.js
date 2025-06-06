//1st part
const mobile={
    brand: "nokia",
    battery: "1000MAmp",
    camera: "12mp",
    weight: "200g"
}
//for of: array
//for in: object
for(const prop in mobile){
    console.log(prop);
}


//2nd part
const mobile11={
    brand: "samsung",
    battery: "5000MAmp",
    camera: "48mp",
    weight: "400g"
}
//for of: array
//for in: object
for(const prop1 in mobile11){
    console.log(`${prop1}:${mobile11[prop1]}`);
}