fruits=["mango","banana","olive","grapes"];
for(let i of fruits){
    console.log(i);
}

fruits2=["mango","banana","olive","grapes","peanut"];
n= fruits2.length
while(n>1){
    console.log(fruits2[n-1]);
    n--;
}


let num=[12,4,67,99,6,4,3,6,8,3,22,57,86,356]
n=num.length
let sum=0

while (n>0){
    console.log(num[n-1]);
    sum=sum+ num[n-1];
    console.log(`sum is now ${sum}`);
    if(num[n-1]%2==0){
        console.log(`index : ${[n-1]} is even and it is ${num[n-1]}`);
    }else{
        console.log(`index : ${[n-1]} is odd and it is ${num[n-1]}`)
    }
    n--;
}

for (let i=0; i<n ; i++ ){
    console.log(num[i]);
}



for (let i=0; i<=100; i=i+5){
    if(i>80){
        break;
    }
    if(i===50){
        continue;
    }
    if(i%10===0){
      console.log(i) 
    }
    
}

let i=0;
do{
    console.log(i);
    i++;
}
while(i<20);

