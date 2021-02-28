console.log("Hey you!");

diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
diceVal = ["1", "2", "3", "4", "5", "6"];

// SUM SELECTORS
const userInput = document.querySelector("input");
const diceBtn = document.querySelector("button");
const pSum = document.querySelector("#sum-para");
const pDice = document.querySelector("#dice");
let diceList = "";
let sum = 0;

// HISTORY SELECTORS
const ul = document.querySelector("ul");
let historyLog;
let clicks = 0;


// FUNCTIONS
const getDice = (event) => {
	event.preventDefault();

	rolls = userInput.valueAsNumber;
	for (let i = 0; i < rolls; i++) {
        let num = Math.floor(Math.random() * 6) + 1; 
        diceList += diceArr[num]; 
        // how do I display the dice image?
        // needs to go into the html w/o the quotes
        // convertDice()
        sum += Number(diceVal[num]);
    }
    pDice.textContent = diceList; //need to store this before the second click
    pSum.textContent = sum;
    userInput.value = "";

    const createHistory = (historyLog2) => {
        // event.preventDefault();
        const li = document.createElement("li");
        li.textContent = historyLog2;
        ul.appendChild(li);
        historyLog = "";
}

    clicks++;
    if (clicks === 1) {
        historyLog = `${pDice.textContent} = ${sum}`;
        historyLog2 = historyLog;
        historyLog = "";
    } 
    if (clicks > 1) {
        // historyLog2 = historyLog;
        // historyLog = "";
        createHistory(historyLog2);
    } 

    
        
        
};
// get the user input value as a number
// loop userInput times to generate the dice $ value
// add to string ==> need a variable
// add the sum
// reset input to 0

// create li
// add dice to p
// append to ul

// EVENT LISTENERS
/**
 * Clicking the roll button the first time should not add anything to the history
 * Subsequent clicks to the rolls button should add the previous roll to the history
 *
 */
diceBtn.addEventListener("click", getDice);
