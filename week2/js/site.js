console.log(`Hello World`);

const topOfStairs = 10; // setting a condition to end loop

let step = 1;
while (step < topOfStairs) {
    console.log(`I am on step ${step}`); // actions of the loop
    step++; // increment the loop - iterate
}

//resetting for this exercise
step = 1; // initialise statement
do {
    console.log(`I am on step ${step}`);
    step++;  // increment the loop - iterate

} while (step < topOfStairs)

for (step = 1; step < topOfStairs; step++) {

    console.log(`For loop: I am on step ${step}`);
}


function travelOnStairs(start, end) {
    for (i = start; i < end; i++) {

        // let oddOrEven = ""
        // let remainder = i % 2; //modulo
        // if(remainder == 0) {
        //     oddOrEven = "even"
        // } else {
        //     oddOrEven = "odd"
        // }

        // ternary operator
        let oddOrEven = i % 2 == 0 ? 'even' : 'odd';

        console.log(`For loop: I am on step ${i} and it is ${oddOrEven}`);


    }
}
travelOnStairs(0,15);
// travelOnStairs(70,100);
// travelOnStairs(80,90);

// function travelDownStairs(start, end) {
//     for (i = start; i > end; i--) {

//         console.log(`For loop: I am going down step ${i}`);
//     }
// }

// travelDownStairs(40,20)







