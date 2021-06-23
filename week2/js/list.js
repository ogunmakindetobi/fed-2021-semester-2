let dwarf1 = 'Doc'
let dwarf2 = 'Bashful'

let dwarves = ['Doc' , 'Bashful',  'Happy' ];

console.log(dwarves[0]);
console.log(dwarves[1]);
console.log(dwarves[2]);

dwarves[3] = 'Sneezy';
console.log(dwarves[3]);

console.log(`Number in list is ${dwarves.length}`)

dwarves.unshift('Grumpy'); // put at the start

dwarves.sort(); 
dwarves.reverse();
dwarves.splice(2,0,'Dopey')
console.log(dwarves.join(','))


let countDwarves = dwarves.length;

for(i = 0; i < countDwarves; i++) {

    console.log(`The dwarf at position ${i} is called ${dwarves[i]}`);
}


// dwarves.pop(); // removes from the end
// countDwarves = dwarves.length;
// for(i = 0; i < countDwarves; i++) {

//     console.log(`After pop : The dwarf at position ${i} is called ${dwarves[i]}`);
// }

while (dwarves.length > 0) {

    let popped = dwarves.pop();
    console.log(`${popped} has left the mine`);
}
console.log(`Everyone gone: turn off the lights, close the mine`);