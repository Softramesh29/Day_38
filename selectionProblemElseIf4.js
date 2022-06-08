let a = 50;
let b = 25;
let c = 12;
let cal_1 = a+b*c;
let cal_2 = c+a/b;
let cal_3 = a%b+c;
let cal_4 = a*b+c;
console.log("Maximum Number")
if((cal_1>cal_2) && (cal_1>cal_3) && (cal_1>cal_4))
    console.log("Maximum is : " + cal_1);
    else if((cal_2>cal_1) && (cal_2>cal_3) && (cal_2>cal_4))
          console.log("Maximum is : " + cal_2);
    else if((cal_3>cal_1) && (cal_3>cal_2) && (cal_3>cal_4))
          console.log("Maximum is : " + cal_3);
else 
    console.log("Maximum is : " + cal_4);

console.log("Minimum Number")
if((cal_1<cal_2) && (cal_1<cal_3) && (cal_1<cal_4))
    console.log("Minimum is : " + cal_1);
    else if((cal_2<cal_1) && (cal_2<cal_3) && (cal_2<cal_4))
          console.log("Minimum is : " + cal_2);
    else if((cal_3<cal_1) && (cal_3<cal_2) && (cal_3<cal_4))
          console.log("Minimum is : " + cal_3);
else 
    console.log("Minimum is : " + cal_4);
    