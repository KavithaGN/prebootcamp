// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  var A = userInput[0];
  var B = userInput[1];
  var C = userInput[2];
  var a = parseInt(A);
  var b = parseInt(B);
  var c = parseInt(C);
 if(a>b && a>c){
  console.log(a);
 } else{
     if(b>c) {
         console.log(b);
     } else {
         console.log(c);
     }
 }
  //end-here
});
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  var centi = userInput[0];
  var faran = parseFloat(centi).toFixed(2) *9/5 + 32;
  console.log(faran);

  //end-here
});

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  var c = +userInput[0]+ +userInput[1];
  console.log(c);
 var inputNum = +userInput[0];
  var fact=1; 
  if(inputNum == 0) {
      console.log(1);
  } else {
     for(var i=1; i<=inputNum; i++) {
      fact = fact* i;
  } 
  console.log(fact);
  }
var num = userInput[0];
  var N = 0;
  if(num < 0) {
      console.log("Error");
  } else {
      if (num === 0) {
          console.log(N);
      } else {
          N = num*num;
      }
  }
     console.log(N);
var num = userInput[0];
       var N = Math.round(num);
       
       if (N === 0) {
          console.log(0);
      } else {
          if(N%2 === 0) {
              console.log("Even");
          } else {
              console.log("Odd");
          }
      }
console.log(userInput[0]* 1000);
  console.log(userInput[0] * 100000);
for(var i=0; i<5; i++) {
      console.log(userInput[0]);
  }
var inputarray = userInput[0].split(" ");
  var si = parseFloat(inputarray[0]) * parseFloat(inputarray[1]) * parseFloat(inputarray[2])/100;
  console.log(si.toFixed(2));
 var inputarray = userInput[0].split(" ");
       var a, b, c;
       a = inputarray[0];
       b = inputarray[1];
       c = inputarray[2];
  var si1 = ((-b + Math.sqrt((b*b) - (4 * a * c))))/(2 * a);
  var si2 = ((-b - Math.sqrt((b*b) - (4 * a * c))))/(2 * a);
  console.log(si1.toFixed(2));
  console.log(si2.toFixed(2));

  //end-here
});
