
 /*
    isNaN() - is not a number
        ->it return true for string
        ->it return false for number
 */

    let a = "5000";

    let result = isNaN( a );

    if( result==true)
    {
        console.log( a, "is string type....");
    }
    else{
        console.log(a, "is number type...");
        if( a%2 ==0){
            console.log(a, "is even number");
        }
        else{
            console.log( a, "is odd number")
        }
    }