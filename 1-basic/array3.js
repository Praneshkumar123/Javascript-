
let userlist =[
    {
        city : "Bangalore",
        customer:['Varun', 'Suhas', 'Akash']
    },
    {
        city:"Chennai",
        customer:['Yuvan','Pranesh','Gokul','Sathish']
    },
    {
        city:"Delhi",
        customer:['Shadik Kapoor', 'Sarukh khan']
    }
];

userlist.map((user, index)=>{
    console.log(index, user.city,);
    console.log("\t",user.customer.length, "-Customer");
    user.customer.map((fullname, index2)=>{
        console.log("\t", fullname);
    })
})