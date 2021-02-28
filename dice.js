console.log("I am awesome!");

diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
diceVal = ["1", "2", "3", "4", "5", "6"];

// SUM SELECTORS
const userInput = document.querySelector("input");
const diceBtn = document.querySelector("button");
const pSum = document.querySelector("#sum-para");
const pDice = document.querySelector("#dice-para");
let diceList = "";
let sum = 0;

// HISTORY SELECTORS
const ul = document.querySelector("ul");
let historyLog;
let HistoryLog2;
let clicks = 0;

// FUNCTIONS

const getDice = (event) => {
	let rolls = userInput.valueAsNumber;
	for (let i = 0; i < rolls; i++) {
        let num = Math.floor(Math.random() * 5) + 1;
        let die = diceArr[num].replace("&#", "");
		diceList += String.fromCharCode(die);
		sum += Number(diceVal[num]);
	}
	
	pDice.textContent = diceList;
	pSum.textContent = sum;
	userInput.value = "";

	const reset = () => {
		historyLog2 = historyLog;
		diceList = "";
		sum = 0;
		historyLog = "";
	};

	const createHistory = () => {
		const li = document.createElement("li");
		li.textContent = historyLog2;
		ul.appendChild(li);
		reset();
	};

	clicks++;
	historyLog = `${pDice.textContent} = ${sum}`;
	clicks <= 1 ? reset() : createHistory();
};

// EVENT LISTENERS
diceBtn.addEventListener("click", getDice);



// RESOURCES
// https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/

/* var decodeHTML = function (html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
};

// Example
// Returns "<p>In this course, you'll learn:</p>"
var decoded = decodeHTML(
	"&lt;p&gt;In this course, you&rsquo;ll learn:&lt;/p&gt;"
); */

// JUST THINKING
// const convertDice = () => {
	// how do I display the dice image?
	// needs to go into the html w/o the quotes
	// TEST: remove &# and pass the numbers into String.fromCharCode() gives me the die image
	//  die = (diceArr[num]);
    // die.replace(/&#/, "");

	// die += diceList.fromCharCode(9856); // null[die image]
	// console.log(die);
	// diceList += die;
	// diceList += diceArr[num];
	// };