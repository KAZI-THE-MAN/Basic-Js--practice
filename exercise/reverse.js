var subject =["bangla","english","math","physics","chemistry"];

// rev_sub= subject.reverse();//1st way
// console.log(subject);

// let rev_subject=[]//2nd way
// for (let sub of subject){
//     rev_subject.unshift(sub);
// }
// console.log(rev_subject);


// let rev_subject1=[]//3rd way
// for ( let i=0; i<subject.length; i++){
//     rev_subject1.unshift(subject[i]);
// }
// console.log(rev_subject1);


let rev_subject2=[]//4th way
for ( let i=subject.length-1; i>=0; i--){
    rev_subject2.push(subject[i]);
}
console.log(rev_subject2);