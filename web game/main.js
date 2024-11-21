// Setting Game Name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By PandaEyes`;

// Setting Game Options
let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry = 1;
let numberOfHints = 2;

// Manage Words
let wordToGuess = "";
const words = ["Update", "Master", "Mainly", "School","aboard"
  ,"abroad"
  ,"absent"
  ,"absorb"
  ,"absurd"
  ,"accent"
  ,"accept"
  ,"access"
  ,"accord"
  ,"across"
  ,"acting"
  ,"action"
  ,"active"
  ,"actual"
  ,"adhere"
  ,"adjust"
  ,"admire"
  ,"advent"
  ,"advice"
  ,"advise"
  ,"aerial"
  ,"affair"
  ,"affect"
  ,"afford"
  ,"afraid"
  ,"agency"
  ,"agenda"
  ,"albeit"
  ,"allied"
  ,"almost"
  ,"always"
  ,"amount"
  ,"anchor"
  ,"animal"
  ,"annual"
  ,"answer"
  ,"anyone"
  ,"anyway"
  ,"appeal"
  ,"appear"
  ,"arctic"
  ,"around"
  ,"arrest"
  ,"arrive"
  ,"artery"
  ,"artist"
  ,"asleep"
  ,"aspect"
  ,"assert"
  ,"assess"
  ,"assign"
  ,"assist"
  ,"assume"
  ,"assure"
  ,"asthma"
  ,"atomic"
  ,"attach"
  ,"attack"
  ,"attain"
  ,"attend"
  ,"august"
  ,"author"
  ,"autumn"
  ,"avenue"
  ,"backed"
  ,"backup"
  ,"bailey"
  ,"ballet"
  ,"ballot"
  ,"banana"
  ,"banker"
  ,"banner"
  ,"barely"
  ,"Barney"
  ,"barred"
  ,"barrel"
  ,"basket"
  ,"battle"
  ,"beaten"
  ,"beauty"
  ,"became"
  ,"become"
  ,"before"
  ,"behalf"
  ,"behave"
  ,"behind"
  ,"belief"
  ,"belong"
  ,"benign"
  ,"berlin"
  ,"beside"
  ,"better"
  ,"beyond"
  ,"biased"
  ,"binary"
  ,"bishop"
  ,"bitter"
  ,"blamed"
  ,"bloody"
  ,"bodily"
  ,"boiler"
  ,"border"
  ,"boring"
  ,"borrow"
  ,"bother"
  ,"bottle"
  ,"bottom"
  ,"bought"
  ,"bounce"
  ,"boxing"
  ,"branch"
  ,"breach"
  ,"breast"
  ,"breath"
  ,"breeze"
  ,"bridge"
  ,"bright"
  ,"broken"
  ,"broker"
  ,"bronze"
  ,"browse"
  ,"brutal"
  ,"bubble"
  ,"bucket"
  ,"budget"
  ,"buffer"
  ,"buffet"
  ,"bullet"
  ,"bundle"
  ,"burden"
  ,"bureau"
  ,"burial"
  ,"burton"
  ,"butler"
  ,"butter"
  ,"button"
  ,"byline"
  ,"bypass"
  ,"caller"
  ,"camera"
  ,"campus"
  ,"cancel"
  ,"cancer"
  ,"candle"
  ,"cannon"
  ,"cannot"
  ,"canvas"
  ,"canyon"
  ,"carbon"
  ,"career"
  ,"caring"
  ,"carpet"
  ,"casino"
  ,"castle"
  ,"casual"
  ,"cattle"
  ,"caught"
  ,"causal"
  ,"cement"
  ,"census"
  ,"center"
  ,"centre"
  ,"chance"
  ,"change"
  ,"chapel"
  ,"charge"
  ,"cheese"
  ,"cherry"
  ,"choice"
  ,"choose"
  ,"chorus"
  ,"chosen"
  ,"church"
  ,"cinema"
  ,"circle"
  ,"circus"
  ,"clause"
  ,"clergy"
  ,"clever"
  ,"client"
  ,"clinic"
  ,"closed"
  ,"closer"
  ,"coffee"
  ,"coffin"
  ,"collar"
  ,"colony"
  ,"colour"
  ,"column"
  ,"combat"
  ,"comedy"
  ,"coming"
  ,"commit"
  ,"common"
  ,"comply"
  ,"convey"
  ,"cooler"
  ,"cooper"
  ,"coping"
  ,"copper"
  ,"corner"
  ,"corpus"
  ,"costly"
  ,"cotton"
  ,"county"
  ,"couple"
  ,"coupon"
  ,"course"
  ,"cousin"
  ,"covers"
  ,"create"
  ,"credit"
  ,"crisis"
  ,"critic"
  ,"cruise"
  ,"crying"
  ,"custom"
  ,"damage"
  ,"danger"
  ,"daring"
  ,"deadly"
  ,"dealer"
  ,"debate"
  ,"debris"
  ,"debtor"
  ,"decade"
  ,"decent"
  ,"decide"
  ,"decree"
  ,"defeat"
  ,"defect"
  ,"defend"
  ,"define"
  ,"degree"
  ,"demand"
  ,"demise"
  ,"denial"
  ,"dental"
  ,"depend"
  ,"deploy"
  ,"deputy"
  ,"derive"
  ,"desert"
  ,"design"
  ,"desire"
  ,"detail"
  ,"detect"
  ,"device"
  ,"devise"
  ,"devote"
  ,"diesel"
  ,"differ"
  ,"digest"
  ,"dinner"
  ,"direct"
  ,"divide"
  ,"divine"
  ,"doctor"
  ,"dollar"
  ,"domain"
  ,"donate"
  ,"double"
  ,"dragon"
  ,"drawer"
  ,"driven"
  ,"driver"
  ,"during"
  ,"easily"
  ,"eating"
  ,"editor"
  ,"effect"
  ,"effort"
  ,"eighth"
  ,"eighty"
  ,"either"
  ,"eleven"
  ,"emerge"
  ,"empire"
  ,"employ"
  ,"enable"
  ,"ending"
  ,"endure"
  ,"energy"
  ,"engage"
  ,"engine"
  ,"enough"
  ,"enroll"
  ,"ensure"
  ,"entire"
  ,"entity"
  ,"enzyme"
  ,"equity"
  ,"escape"
  ,"estate"
  ,"esteem"
  ,"ethnic"
  ,"evolve"
  ,"exceed"
  ,"except"
  ,"excess"
  ,"excise"
  ,"excuse"
  ,"exempt"
  ,"exodus"
  ,"exotic"
  ,"expand"
  ,"expect"
  ,"expert"
  ,"expire"
  ,"export"
  ,"expose"
  ,"extend"
  ,"extent"
  ,"fabric"
  ,"facial"
  ,"facing"
  ,"factor"
  ,"failed"
  ,"fairly"
  ,"fallen"
  ,"family"
  ,"famous"
  ,"farmer"
  ,"father"
  ,"favour"
  ,"fellow"
  ,"female"
  ,"fierce"
  ,"figure"
  ,"filing"
  ,"filter"
  ,"finale"
  ,"finely"
  ,"finger"
  ,"finish"
  ,"finite"
  ,"firing"
  ,"fiscal"
  ,"fisher"
  ,"flavor"
  ,"flight"
  ,"floppy"
  ,"flower"
  ,"flying"
  ,"follow"
  ,"forced"
  ,"forest"
  ,"forget"
  ,"forgot"
  ,"formal"
  ,"format"
  ,"former"
  ,"fossil"
  ,"foster"
  ,"fought"
  ,"fourth"
  ,"freeze"
  ,"french"
  ,"friend"
  ,"fringe"
  ,"frozen"
  ,"fuller"
  ,"fusion"
  ,"future"
  ,"galaxy"
  ,"gallon"
  ,"gamble"
  ,"gaming"
  ,"garage"
  ,"garden"
  ,"garlic"
  ,"gather"
  ,"gender"
  ,"genius"
  ,"gentle"
  ,"german"
  ,"gifted"
  ,"ginger"
  ,"glance"
  ,"global"
  ,"golden"
  ,"Google"
  ,"gospel"
  ,"gossip"
  ,"gotten"
  ,"govern"
  ,"grader"
  ,"gravel"
  ,"ground"
  ,"growth"
  ,"guilty"
  ,"guinea"
  ,"guitar"
  ,"hammer"
  ,"handed"
  ,"handle"
  ,"happen"
  ,"harbor"
  ,"hardly"
  ,"hassle"
  ,"hatred"
  ,"hazard"
  ,"headed"
  ,"health"
  ,"heated"
  ,"heaven"
  ,"height"
  ,"helmet"
  ,"herald"
  ,"hereby"
  ,"herein"
  ,"heroic"
  ,"hidden"
  ,"hockey"
  ,"holder"
  ,"hollow"
  ,"honest"
  ,"honour"
  ,"hooked"
  ,"horror"
  ,"humble"
  ,"hunger"
  ,"hungry"
  ,"hunter"
  ,"hurdle"
  ,"hybrid"
  ,"ignore"
  ,"immune"
  ,"impact"
  ,"import"
  ,"impose"
  ,"income"
  ,"indeed"
  ,"indoor"
  ,"induce"
  ,"infant"
  ,"inform"
  ,"injury"
  ,"inland"
  ,"insect"
  ,"insert"
  ,"inside"
  ,"insist"
  ,"insure"
  ,"intact"
  ,"intake"
  ,"intend"
  ,"intent"
  ,"invest"
  ,"invite"
  ,"ironic"
  ,"island"
  ,"itself"
  ,"jacket"
  ,"jersey"
  ,"jockey"
  ,"johnny"
  ,"joseph"
  ,"jungle"
  ,"junior"
  ,"keeper"
  ,"kidney"
  ,"killed"
  ,"killer"
  ,"kindly"
  ,"knight"
  ,"labour"
  ,"ladder"
  ,"landed"
  ,"lately"
  ,"latest"
  ,"latter"
  ,"launch"
  ,"lawyer"
  ,"layout"
  ,"leader"
  ,"league"
  ,"leaves"
  ,"legacy"
  ,"legend"
  ,"length"
  ,"lesser"
  ,"lesson"
  ,"lethal"
  ,"letter"
  ,"liable"
  ,"lights"
  ,"likely"
  ,"linear"
  ,"lining"
  ,"linked"
  ,"liquid"
  ,"listen"
  ,"little"
  ,"lively"
  ,"living"
  ,"loaded"
  ,"locate"
  ,"lonely"
  ,"losing"
  ];
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
let messageArea = document.querySelector(".message");

// Manage Hints
document.querySelector(".hint span").innerHTML = numberOfHints;
const getHintButton = document.querySelector(".hint");
getHintButton.addEventListener("click", getHint);

function generateInput() {
  const inputsContainer = document.querySelector(".inputs");

  // Create Main Try Div
  for (let i = 1; i <= numbersOfTries; i++) {
    const tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>Try ${i}</span>`;

    if (i !== 1) tryDiv.classList.add("disabled-inputs");

    // Create Inputes
    for (let j = 1; j <= numbersOfLetters; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.id = `guess-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      tryDiv.appendChild(input);
    }

    inputsContainer.appendChild(tryDiv);
  }
  // Focus On First Input In First Try Element
  inputsContainer.children[0].children[1].focus();

  // Disable All Inputs Except First One
  const inputsInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
  inputsInDisabledDiv.forEach((input) => (input.disabled = true));

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    // Convert Input To Uppercase
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      // console.log(index);
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });

    input.addEventListener("keydown", function (event) {
      // console.log(event);
      const currentIndex = Array.from(inputs).indexOf(event.target); // Or this
      // console.log(currentIndex);
      if (event.key === "ArrowRight") {
        const nextInput = currentIndex + 1;
        if (nextInput < inputs.length) inputs[nextInput].focus();
      }
      if (event.key === "ArrowLeft") {
        const prevInput = currentIndex - 1;
        if (prevInput >= 0) inputs[prevInput].focus();
      }
    });
  });
}

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

console.log(wordToGuess);

function handleGuesses() {
  let successGuess = true;
  console.log(wordToGuess);
  for (let i = 1; i <= numbersOfLetters; i++) {
    const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
    const letter = inputField.value.toLowerCase();
    const actualLetter = wordToGuess[i - 1];

    // Game Logic
    if (letter === actualLetter) {
      // Letter Is Correct And In Place
      inputField.classList.add("yes-in-place");
    } else if (wordToGuess.includes(letter) && letter !== "") {
      // Letter Is Correct And Not In Place
      inputField.classList.add("not-in-place");
      successGuess = false;
    } else {
      inputField.classList.add("no");
      successGuess = false;
    }
  }

  // Check If User Win Or Lose
  if (successGuess) {
    messageArea.innerHTML = `You Win The Word Is <span>${wordToGuess}</span>`;
    if (numberOfHints === 2) {
      messageArea.innerHTML = `<p>Congratz You Didn't Use Hints</p>`;
    }

    // Add Disabled Class On All Try Divs
    let allTries = document.querySelectorAll(".inputs > div");
    allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));

    // Disable Guess Button
    guessButton.disabled = true;
    getHintButton.disabled = true;
  } else {
    document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
    const currentTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    currentTryInputs.forEach((input) => (input.disabled = true));

    currentTry++;

    const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    nextTryInputs.forEach((input) => (input.disabled = false));

    let el = document.querySelector(`.try-${currentTry}`);
    if (el) {
      document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
      el.children[1].focus();
    } else {
      // Disable Guess Button
      guessButton.disabled = true;
      getHintButton.disabled = true;
      messageArea.innerHTML = `You Lose The Word Is <span>${wordToGuess}</span>`;
    }
  }
}

function getHint() {
  if (numberOfHints > 0) {
    numberOfHints--;
    document.querySelector(".hint span").innerHTML = numberOfHints;
  }
  if (numberOfHints === 0) {
    getHintButton.disabled = true;
  }

  const enabledInputs = document.querySelectorAll("input:not([disabled])");
  // console.log(enabledInputs);
  const emptyEnabledInputs = Array.from(enabledInputs).filter((input) => input.value === "");
  // console.log(emptyEnabledInputs);

  if (emptyEnabledInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
    const randomInput = emptyEnabledInputs[randomIndex];
    const indexToFill = Array.from(enabledInputs).indexOf(randomInput);
    // console.log(randomIndex);
    // console.log(randomInput);
    // console.log(indexToFill);
    if (indexToFill !== -1) {
      randomInput.value = wordToGuess[indexToFill].toUpperCase();
    }
  }
}

function handleBackspace(event) {
  if (event.key === "Backspace") {
    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentIndex = Array.from(inputs).indexOf(document.activeElement);
    // console.log(currentIndex);
    if (currentIndex > 0) {
      const currentInput = inputs[currentIndex];
      const prevInput = inputs[currentIndex - 1];
      currentInput.value = "";
      prevInput.value = "";
      prevInput.focus();
    }
  }
}

document.addEventListener("keydown", handleBackspace);

window.onload = function () {
  generateInput();
};

// Add reference to the Play Again button
const playAgainButton = document.querySelector(".play-again");

guessButton.addEventListener("click", handleGuesses);
playAgainButton.addEventListener("click", resetGame);

function handleGuesses() {
  let successGuess = true;

  for (let i = 1; i <= numbersOfLetters; i++) {
    const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
    const letter = inputField.value.toLowerCase();
    const actualLetter = wordToGuess[i - 1];

    if (letter === actualLetter) {
      inputField.classList.add("yes-in-place");
    } else if (wordToGuess.includes(letter) && letter !== "") {
      inputField.classList.add("not-in-place");
      successGuess = false;
    } else {
      inputField.classList.add("no");
      successGuess = false;
    }
  }

  if (successGuess) {
    messageArea.innerHTML = `You Win! The Word Is <span>${wordToGuess}</span>`;
    if (numberOfHints === 2) {
      messageArea.innerHTML += `<p>Congrats! You didn't use any hints.</p>`;
    }

    disableGame();
  } else {
    document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
    const currentTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    currentTryInputs.forEach((input) => (input.disabled = true));

    currentTry++;

    const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    nextTryInputs.forEach((input) => (input.disabled = false));

    let el = document.querySelector(`.try-${currentTry}`);
    if (el) {
      document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
      el.children[1].focus();
    } else {
      messageArea.innerHTML = `You Lose! The Word Is <span>${wordToGuess}</span>`;
      disableGame();
    }
  }
}

function disableGame() {
  guessButton.disabled = true;
  getHintButton.disabled = true;

  // Show the Play Again button
  playAgainButton.style.display = "block";
}

function resetGame() {
  // Reset variables
  currentTry = 1;
  numberOfHints = 2;

  // Clear the message area
  messageArea.innerHTML = "";

  // Hide the Play Again button
  playAgainButton.style.display = "grid";

  // Reset inputs and classes
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("yes-in-place", "not-in-place", "no");
    input.disabled = true;
  });

  // Enable first row inputs
  document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
  const firstRowInputs = document.querySelectorAll(`.try-${currentTry} input`);
  firstRowInputs.forEach((input) => (input.disabled = false));

  firstRowInputs[0].focus();

  // Reset hint button
  getHintButton.disabled = false;
  document.querySelector(".hint span").innerHTML = numberOfHints;

  // Re-enable Guess button
  guessButton.disabled = false;

  // Pick a new word
  wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
  console.log(wordToGuess); // For debugging
}
