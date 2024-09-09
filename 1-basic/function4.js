
    const userList = (index) =>{
        let alluser = [
            {name:"Mahesh", age:"21 years", gender:"Male", edu:"BCA"},
            {name:"Venkatesh", age:"24 years", gender:"Male", edu:"MCA"},
            {name:"Giri", age:"21 years", gender:"Male", edu:"DCA"},
            {name:"Sunitha", age:"22 years", gender:"Female", edu:"CA"},
            {name:"Divya Bharathi", age:"25 years", gender:"Female", edu:"MA"}
        ];

        if(index >= alluser.length ){
                console.log("Record Not Found");
        }else{
             console.log("Record Found");
            let info = alluser[index];

            console.log(info.name, info.age, info.gender,info.edu);
        }
    }

    userList(5);
    userList(4);
    userList(2);
    userList(0);