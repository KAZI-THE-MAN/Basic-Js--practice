//ternary

let age = 19;
const isLeader = false;

// if (age>=18){
//     console.log("can vote");
//     if(isLeader===true){
//         console.log("can entry with press public");
//     }else{
//         console.log("can't entry with press public");
//     }
// }else{
//     console.log("can't vote and entry with press public");
// }

age>=18?console.log("can vote") ||
             (isLeader ===true?
                console.log("can entry with press public"):console.log("can't  entry with press public")):
                console.log("can't vote and entry with press public");