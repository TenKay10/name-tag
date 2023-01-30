// grab DOM elements

// set event listeners
console.log('hello world');
console.log('42', 42);

//variables
//allow us to reuse individual pieces of data
const dogName = 'Buttons';
console.log('My dogs name is "dogName"). $(dogName) is very cute. $(dogName)');

//functions
//allow us to reuse behavior on multiple lines
function sayHello(name) {
    
    console.log('have a beautiful day');
    
    console.log('Machs gut');

}
sayHello('Thorsten');
sayHello('Anna');

//make a variable that contains a reference to html element

const nameElem = document.getElementById('name');
// change the text content of the html element
nameElem.textContent = 'Buttons';

//make a variable that references the update button
// listen for a click on that button
const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking on the button!');
    const nameInput = document.getElementById('input');
//Make a variable that contains a reference to the html element
    const nameElem = document.getElementById('name');
//change the text content of the Html element to the value
// of the input

    nameElem.textContent = nameInput.value;
});

