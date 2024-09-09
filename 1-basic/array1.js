
    let itemlist = ['Apple', 'Water', 'Milk', 'Orange', 'Grapes'];
    /*
        arrayname[index]=> Element

        example
            itemlist[0]=>Apple
            itemlist[1]=>Water
            itemlist[2]=>Milk
            itemlist[3]=>Mango
            itemlist[4]=>Orange
            itemlist[5]=>Grapes
    */

            console.log(itemlist[0]);

            console.log( itemlist[ itemlist.length-1]);

            console.log("-----Print All Element Using Array-----");
            console.log("---Itemlist---")
            for( let i=0; i<itemlist.length;i++){
                    console.log(itemlist[i]);
            }
            console.log("------------------")
            console.log("---Booklist---")
            let booklist = new Array('html', 'css', 'bootstrap', 'js', 'react', 'nodejs');
            for( let i=0; i<=booklist.length;i++){
                console.log(booklist[i]);
        }