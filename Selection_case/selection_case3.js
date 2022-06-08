let num = 56245;
switch(num){
case (num>=0 && num <= 9):
    console.log("Single digit");
    break;
case (num>=10 && num <= 99):
    console.log("Digit is Ten");
    break;  
case (num>=100 && num <= 999):
    console.log("Digit is Hundred");
    break;
case (num>=1000 && num <= 9999):
    console.log("Digit is Thousand");
    break;
case (num>=10000 && num <= 99999):
    console.log("Digit is Ten Thousand");  
    break;
default:
    console.log("Please Enter the valid number");
    break;
}