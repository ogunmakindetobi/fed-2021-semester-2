// let carMF1 = `Volkswagen`;
// let carModel1 = `Golf`;
// let carEngine1 = '1.6';
// let carEngineType1 = 'petrol'
// let carType2 = 'Hatchback'


// let carMF2 = `Nissan`;
// let carModel2 = `Navara`;
// let carEngine2 = '2.5';
// let carEngineType2 = 'diesel'
// let carType2 = 'Hatchback'

// let carMF3 = `Nissan`;
// let carModel3 = `Leaf`;
// let carEngine3 = '2.5';
// let carEngineType3 = 'electric'

// JSON 
let car1 = {
    'mf': `Volkswagen`,
    'model': `Golf`,
    'engine': '1.6',
    'engineType': 'petrol',
    'bodyType': 'Hatchback'
}

let car2 = {
    'mf': 'Ford',
    'model': `Fiesta`,
    'engine': '0.1',
    'colour': 'Pink',
    'type': 'Sedan'
}

let car3 = {


    'mf': 'Nissan',
    'model': `Navara`,
    'engine': '2.5',
    'colour': 'Grey',
    'type': 'Pickup'

}

let fleet = [
    {
        'mf': `Volkswagen`,
        'model': `Golf`,
        'engine': '1.6',
        'engineType': 'petrol',
        'bodyType': 'Hatchback'
    },
    {
        'mf': 'Ford',
        'model': `Fiesta`,
        'engine': '0.1',
        'colour': 'Pink',
        'type': 'Sedan'
    },
    {
        'mf': 'Nissan',
        'model': `Navara`,
        'engine': '2.5',
        'colour': 'Grey',
        'type': 'Pickup'

    },
    {
        'mf': 'Opel',
        'model': `Senator`,
        'engine': '0.1',
        'colour': 'Red',
        'type': 'Hatchback'
    }
]

const fleetSize = fleet.length;
for (let i = 0; i < fleetSize; i++) {
    const currentCar = fleet[i];
    console.log(`Car #${i} :${currentCar.mf} | ${currentCar.model}`)
}

for (const currentCar of fleet) {

    const message = `FOREACH Car  :${currentCar.mf} | ${currentCar.model}`
    console.log(message);
}

// Getting the index
// https://flaviocopes.com/how-to-get-index-in-for-of-loop/

for (const [index, currentCar] of fleet.entries()) {

    const message = `FOREACH Car ${index}  :${currentCar.mf} | ${currentCar.model}`
    console.log(message);
}


function getAllManufacturers(listOfCars) {
    console.log(`Invoking getAllManufacturers(): ${listOfCars.length}`);

    let listOfManufacturers = [];

    for(const currentCar of listOfCars) {

        const currentManufacturer = currentCar.mf;

        listOfManufacturers.push(currentManufacturer)

     //   console.log(`${currentManufacturer}`);
    }
    // note the return is the final line in the function 
    return listOfManufacturers;

}

let listOfManufacturersReturned = getAllManufacturers(fleet);
console.log(listOfManufacturersReturned.join());


