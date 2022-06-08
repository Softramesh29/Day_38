let random_1 = Math.floor(Math.random() * 1000);
let random_2 = Math.floor(Math.random() * 1000);
let random_3 = Math.floor(Math.random() * 1000);
let random_4 = Math.floor(Math.random() * 1000);
let random_5 = Math.floor(Math.random() * 1000);
if((random_1>random_2) && (random_1>random_3) && (random_1>random_4) && (random_1>random_5)){
    console.log("Maximum NUmber is : "+random_1);
}
if((random_2>random_1) && (random_2>random_3) && (random_2>random_4) && (random_2>random_5)){
    console.log("Maximum NUmber is : "+random_2);
}
if(random_3>random_1 && random_3>random_2 && random_3>random_4 && random_3>random_5){
    console.log("Maximum NUmber is : "+random_3);
}
if(random_4>random_2 && random_4>random_3 && random_4>random_1 && random_4>random_5){
    console.log("Maximum NUmber is : "+random_4);
}
else
console.log("Maximum NUmber is : "+random_5);

if((random_1<random_2) && (random_1<random_3) && (random_1<random_4) && (random_1<random_5)){
    console.log("Minimum NUmber is : "+random_1);
}
if((random_2<random_1) && (random_2<random_3) && (random_2<random_4) && (random_2<random_5)){
    console.log("Minimum NUmber is : "+random_2);
}
if(random_3<random_1 && random_3<random_2 && random_3<random_4 && random_3<random_5){
    console.log("Minimum NUmber is : "+random_3);
}
if(random_4<random_2 && random_4<random_3 && random_4<random_1 && random_4<random_5){
    console.log("Minimum NUmber is : "+random_4);
}
else
console.log("Minimum NUmber is : "+random_5);
