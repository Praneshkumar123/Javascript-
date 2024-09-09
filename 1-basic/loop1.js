
/*
    for( init; condition; ++/-- ){
        statement 
    }
*/

    for( let i=1; i<=10; i++){
        console.log(i);
    }
    console.log("---Descending Order Loop---");
    for( let i=10; i>=1; i--){
        console.log(i);
    }

    console.log("---increase by 2---");
    for( let i=1; i<=20; i=i+2){
        console.log("The Odd Number : ", i);
    }

    let oddlist="";
    let evenlist="";

    for(let i=1; i<=20; i++){
        if(i%2==0)
            evenlist = evenlist + i + ",";

        else
        oddlist = oddlist + i + ",";
    }

    console.log("Odd Number 1 to 20 : ", oddlist);

    console.log("Even Number 1 to 20 : ", evenlist);
