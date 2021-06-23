
//http://listofrandomnames.com/index.cfm?textarea
const listOfNames = [
    'Daysi',
    'Bryanna',
    'Gaylene',
    'Frida',
    'Jama',
    'Wally',
    'Margherita',
    'Tuan',
    'Ashlea',
    'Sherrie',
    'Laurena']

    for(i = 0; i < listOfNames.length; i++) {
        let currentItem = listOfNames[i];
        if(currentItem == 'Wally') {
            console.log(`Found Wally at position ${i}`);
        }
        console.log(`${listOfNames[i]}`);
    }
// assumes it is a simple of list of strings with a string to find
    function findItemInList(listOfItems, itemToFind) {
        let position = -1;
        for(i = 0; i < listOfItems.length; i++) {
            let currentItem = listOfItems[i];
            if(currentItem === itemToFind) {
                console.log(`Found ${itemToFind} at position ${i}`);
                position = i;
                break;
            }
           
        }

        return position;
    }
let findItem = "Wally";
let findPosition = findItemInList(listOfNames, findItem)
if(findPosition !== -1) {
console.log(`Found ${findItem} at position ${findPosition}`)
} else {
    console.log(`Could not find  ${findItem} in the list`)

}

findItem = "Waldo";
 findPosition = findItemInList(listOfNames, findItem)
if(findPosition !== -1) {
console.log(`Found ${findItem} at position ${findPosition}`)
} else {
    console.log(`Could not find  ${findItem} in the list`)

}
