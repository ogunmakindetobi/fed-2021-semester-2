var coloursOfTheRainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Green'];

// iterators start with the letter i
var sizeOfList = coloursOfTheRainbow.length;

for (i = 0; i < sizeOfList; i++) {

    console.log(`Colour is: ${coloursOfTheRainbow[i]}`);
}

outputList(coloursOfTheRainbow)
function outputList(list) {

    var sizeOfList = list.length;
    for (i = 0; i < sizeOfList; i++) {

        console.log(`Item is: ${list[i]}`);
    }

}


let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']


outputList(planets)

WrathOfThanos(coloursOfTheRainbow);
WrathOfThanos(planets);

function WrathOfThanos(listOfThingsToDestroy) {

    while (listOfThingsToDestroy.length) {

        let destroyItem = listOfThingsToDestroy.pop()
        console.log(`I THANOS am destroying ${destroyItem}`);
    }
    console.log(`I THANOS have finished destroying.....for now...`);
}



