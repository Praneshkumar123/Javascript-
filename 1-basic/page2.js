// what is difference between var, let, const ?

var a = 100;    //number
    a = true;   //boolen
    a ="Hi";    //string

console.log("---incase of var---");
    var b =100;     // variable declaration and assign the value
    console.log(b);

    b =200;         // value change 
    console.log(b);

    var b = "Bangalore";     // variable re-declaration - bad
    console.log(b);

console.log("---incase of let---");
    let c =500; // variable declaration
    console.log(c);

    c =600;     // change the value 
    console.log(c);

   // let c ="Bangalore" // variable not re-declaration
   // console.log(c);


console.log("---incase of const---");
   const x = 1000;    
   console.log(x);

  // x = 1100;  // does not change the value
  // console.log(x);