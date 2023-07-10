const readline = require('readline'); // Includes the readline module in the program

const rl = readline.createInterface({ // Creates a readline interface that will allow the user to input values via the command line terminal
  input: process.stdin,
  output: process.stdout
});

 function euclideanAlgo() {
   
 
  rl.question('Enter a: ', (a) => { // Input value a

  rl.question('Enter b: ', (b) => { // Input value b
  
  a = parseInt(a); // Converts a String value to a numeric one

  b = parseInt(b); // Converts a String value to a numeric one
 
   let r = []; // Declared an array of remainder values

   r[0] = b % a;

   r[1] = a % r[0];

   let gcd;

   if (r[0] === 0) { // If b/a leaves no remainder, a is the greatest common divisor
     gcd = a;
   }
 
   else if (r[1] === 0) { // If a/r[0] yields no remainder, the greatest common divisor is r[0]
     gcd = r[0];
   }
   
   else {

     for (let x = 2; r[x - 1] > 0; x++) { // Loop through succesive remainders and divide by the previous remainder until r[x] == to 0
      
     r[x] = r[x-2] % r[x-1]; 
    
       if (r[x] === 0) {
         gcd = r[x - 1];        // The remainder before r[x] = 0 will be the greatest common divisor
       }

     }
   }


 
   console.log(gcd); // Outputs the greatest common divisor into the console

   rl.close(); // Close the readline interface after receiving input
  });

});

 }
 
 euclideanAlgo(); // Calls the function
 
 