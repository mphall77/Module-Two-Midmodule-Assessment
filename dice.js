console.log("Hey you!");

diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
diceVal = ["1", "2", "3", "4", "5", "6"];

// SELECTORS
const userInput = document.querySelector("input");
const diceBtn = document.querySelector("button");
const pSum = document.querySelector("#sum-para");
const pDice = document.querySelector("#dice");
let diceList = "";
let sum = 0;

// FUNCTIONS
const getDice = (event) => {
	event.preventDefault();

	rolls = userInput.valueAsNumber;
	for (let i = 0; i < rolls; i++) {
        let num = Math.floor(Math.random() * diceArr.length);
        diceList += ` ${diceArr[num]}`; // how do I display the dice image?
        sum += Number(diceVal[num]);
    }
    pDice.textContent = diceList;
    pSum.textContent = sum;
    userInput.value = "";
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
