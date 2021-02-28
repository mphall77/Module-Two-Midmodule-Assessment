console.log("I am awesome!");

diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
diceVal = ["1", "2", "3", "4", "5", "6"];

// SUM SELECTORS
const userInput = document.querySelector("input");
const diceBtn = document.querySelector("button");
const pSum = document.querySelector("#sum-para");
const pDice = document.querySelector("#dice");
let pTest = document.querySelector("#test");
let diceList = "";
let sum = 0;
let die = document.querySelector("#test");

// HISTORY SELECTORS
const ul = document.querySelector("ul");
let historyLog;
let HistoryLog2;
let clicks = 0;

// FUNCTIONS

const getDice = (event) => {
	rolls = userInput.valueAsNumber;
	for (let i = 0; i < rolls; i++) {
        let num = Math.floor(Math.random() * 5) + 1;
        // die = (diceArr[num]);
        // die.replace("&#", "");
        die = diceArr[num].replace("&#", "");
		diceList += String.fromCharCode(die);
		sum += Number(diceVal[num]);
        console.log(die);
	}
	
	pDice.textContent = diceList;
	pSum.textContent = sum;
	userInput.value = "";

    pTest.textContent = String.fromCharCode(die);

	const reset = () => {
		historyLog2 = historyLog;
		diceList = "";
		sum = 0;
		historyLog = "";
	};

	// const convertDice = () => {
	// how do I display the dice image?
	// needs to go into the html w/o the quotes
	// remove &# and pass the numbers into fromCharCode gives me the dice
	//  die = (diceArr[num]);
    // die.replace(/&#/, "");

	// die += diceList.fromCharCode(9856); // null[die]
	// console.log(die);
	// diceList += die;
	// diceList += diceArr[num];
	// };

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
