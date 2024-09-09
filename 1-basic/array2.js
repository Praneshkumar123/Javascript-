
    let user = {
        fullname:"Ben Tennsyon",
        mobile:9638520741,
        age:"21 years",
        gender:"Male"
    }

    console.log(user.fullname);
    console.log(user.mobile);
    console.log(user.age);
    console.log(user.gender);

    let userlist =[
        
            { fullname : "Varun", mobile : 7410852963, age:"22 years",gender: "Male", edu:"Diplamo"},
            { fullname : "Suhas", mobile : 9638527410, age:"19 years",gender: "Male", edu:"Diplamo"},
            { fullname : "Akash", mobile : 8527410369, age:"19 years",gender: "Male", edu:"Diplamo"},
            { fullname : "Yuvan", mobile : 6354127890, age:"23 years",gender: "Male", edu:"MCA"}       
    ];

    console.log("Total User :", userlist.length);

    userlist.map((oneUser, index)=>{
        console.log( index,oneUser.fullname,oneUser.mobile,oneUser.age,oneUser.gender,oneUser.edu );
        console.log("-------------------------------------")
    });
