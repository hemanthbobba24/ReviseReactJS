a = 20 //makes a global 
// variable no matter where you declared it. 
// If you declare it in the method and change it outside the method. 
// It is going to change
 
 let b = 20 
 //It is mutable and 
 // can be global if implemented outside the method or loop

 const c = 20
 //immutable and 
 //can be global if implemented outside the method or loop

 var d = 20
 //old style not using anymore
 //can define the same variable number of times
 
 
 function myFunc(){
    const a = 10;
 }
 myFunc();
 console.log(a);
