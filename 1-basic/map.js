    let itemlist = ['Apple', 'Water', 'Milk', 'Mango', 'Orange', 'Grapes'];

        itemlist.map(temp=>{
             console.log(temp);
         });

console.log("map with index");

itemlist.map((temp, index)=>{
    console.log(index, temp);
})




console.log("map with index");

itemlist.map(function(temp, index){
    console.log(index, temp);
});