let num = 56245;
if(num>=0 && num <= 9)
    console.log("Single digit");
    else if (num>=10 && num <= 99)
        console.log("Digit is Ten");
    else if (num>=100 && num <= 999)
        console.log("Digit is Hundred");
    else if (num>=1000 && num <= 9999)
        console.log("Digit is Thousand");
    else if (num>=10000 && num <= 99999)
        console.log("Digit is Ten Thousand");  
else
    console.log("Please Enter the valid number");