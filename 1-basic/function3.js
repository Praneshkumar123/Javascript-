
const printList = (start=1, end=10)=>{
    console.log("\n The Number Between",start,"to", end); 
    for(let i=start; i<=end; i++ ){
        console.log(i);
    }
    console.log("\n The End ");
}
printList();

printList(30, 40);

printList(30, 300);