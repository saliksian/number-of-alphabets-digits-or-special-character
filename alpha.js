// In this code I compare ascii code of each characters
let str = "salik@091";

var alpha=0;
let specialcharacters = 0;
let digits = 0;

for(let i=0; i<str.length; i++){
    //charCodeAt(index) method returns an integer between 0 and 65535 regarding to index
    if((str.charCodeAt(i)>= 65 &&str.charCodeAt(i)<= 90 )|| (str.charCodeAt(i)>= 97 && str.charCodeAt(i)<=122))
     alpha++;
    
    else if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)
         digits++;
    else
         specialcharacters++;
 
}

console.log(alpha);
console.log(digits);
console.log(specialcharacters);

//The following code return 115, because it is the ascii code of 1st letter of my string str which id small 's'
// console.log(str.charCodeAt(0));