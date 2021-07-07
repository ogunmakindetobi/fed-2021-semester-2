let listOfCities = ["Dublin", "Cork", "Limerick", "Galway"];


let listOfCitiesAsObjects = [
    { name: 'Please select a city', id: 0 },
    { name: 'Dublin', id: 100 },
    { name: 'Cork', id: 101 },
    { name: 'Limerick', id: 102 },
    { name: 'Galway', id: 103 }
]

function init() {
    // renderCityListing();

}

function LoadItems() {
    renderCityListingFromObjects();
    
}
function ClearItems() {
    const selectedObject = document.querySelector('#listOfCities')

    selectedObject.length = 0;

}

function onSelectChange(element) {
    console.log(`Item has changed`)
    const currentIndex = element.selectedIndex;


    if (currentIndex > 0) {
        const currentValue = element.value;
        const textValue = element.options[currentIndex].text
        console.log(`Item has changed: Index is ${currentIndex} and text is ${textValue}`)
    }

}


/*
    //Alternative method
    for(let city of listOfCities) {

        let option = document.createElement("option");
        option.value = city;
        option.text = city;
        selectedObject.add(option,null);
    }
*/





function renderCityListingFromObjects() {
    const selectedObject = document.querySelector('#listOfCities')

    selectedObject.length = 0;

    listOfCitiesAsObjects.forEach((city, index) => {
        let option = document.createElement("option");
        option.value = city.id;
        option.text = city.name;
        selectedObject.add(option, null);

    });

}

function renderCityListing() {
    const selectedObject = document.querySelector('#listOfCities')

    selectedObject.length = 0;

    for (let i = 0; i < listOfCities.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = listOfCities[i];
        selectedObject.add(option, null);
        // console.log(`${listOfCities[i]}`)
    }
}