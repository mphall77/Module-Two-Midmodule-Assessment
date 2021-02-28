console.log("I am awesome!");

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
let HistoryLog2;
let clicks = 0;

// FUNCTIONS
const getDice = (event) => {
	rolls = userInput.valueAsNumber;
	for (let i = 0; i < rolls; i++) {
		let num = Math.floor(Math.random() * 5) + 1;
		diceList += diceArr[num];
		// how do I display the dice image?
		// needs to go into the html w/o the quotes
		// convertDice()
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
