function init() {
    // alert('Hello World');
    ShowDate();
    Greeting();
}

function ClearEmail() {
    let field = document.getElementById("email");

    console.log(`Current Value is ${field.value}`)
    field.value = "";

}

function SetEmail() {
    let field = document.getElementById("email");
    console.log(`Current Value is ${field.value}`)
    field.value = "Put your email here";

}

function ClickMe() {

    console.log(`Button has been clicked`);
    const planets = ['mercury', 'venus', 'earth'];
  //  WriteList(planets);

    WriteListAsHTML(planets)

   // WriteList(['a','b','c']);
}

function WriteList(listOfItems) {



    let messagePanel = document.getElementById("messagePanel");

    messagePanel.innerHTML = listOfItems.join();

}

function WriteListAsHTML(listOfItems) {
    let messagePanel = document.getElementById("messagePanel");

    let htmlText = ['<ul>'];

    let list = listOfItems.map(currentItem => {

        return `<li>${currentItem}</li>`
    })

    htmlText = htmlText.concat(list);

    htmlText.push(`</ul>`);

    messagePanel.innerHTML = htmlText.join('');
}





function WriteListAsHTML_2(listOfItems) {
    let messagePanel = document.getElementById("messagePanel");

    let holdingText = ['<ol>'];

    for(const item of listOfItems) {

        holdingText.push(`<li>${item}</li>`);
        console.log(holdingText.join());
    }

    holdingText.push(`</ol>`);

    messagePanel.innerHTML = holdingText.join(' ');
}




function WriteListAsHTML_1(listOfItems) {
    let messagePanel = document.getElementById("messagePanel");

    let holdingText = '<ol>';

    for(const item of listOfItems) {

        holdingText += `<li>${item}</li>`;
        console.log(holdingText);
    }

    holdingText+= `</ol>`;

    messagePanel.innerHTML = holdingText;
}



function Greeting() {
    let htmlElement = document.getElementById("greeting");
    htmlElement.innerHTML = 'Hello World';

}

function ShowDate() {
    console.log(`Show Date has been called`);
    let currentDate = new Date();
    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();

    console.log(`Long Date is ${longDate}`)
    console.log(`Short Date is ${shortDate}`)

    let htmlElement = document.getElementById("currentDate");
    htmlElement.innerHTML = shortDate;

}