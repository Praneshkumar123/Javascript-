let itemlist = ['Apple', 'Water', 'Milk', 'Mango', 'Orange', 'Grapes'];

    itemlist.forEach(itemName=>{
        console.log(itemName);
    });
    console.log("----Foreach with index----")
    itemlist.forEach((itemName, index)=>{
        console.log(index, "----------", itemName)
    });

    console.log("----filter with index----")
    itemlist.filter((itemName, index)=>{
        console.log(index, "----------", itemName);
    });