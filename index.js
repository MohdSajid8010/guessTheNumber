let userInputEl = document.getElementById("userInput");
let submitBtnEl = document.getElementById("submitBtn");
let startAgainEl = document.getElementById("startAgainB");

let resUltEl = document.getElementById("resUlt");
let arrAyEl = document.getElementById("arrAy");
let formEl = document.getElementById("form");


// const submitbtn=document.getElementsByClassName("submit-btn")[0];
// submitbtn.addEventListener('click',UserInput);


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    UserInput();
});
let arr = [];
function UserInput() {
    console.log("fuhruhcllaede")
    let userInp = userInputEl.value;
    userInputEl.value="";
    arr.push(userInp);
    let cpuInp = Math.floor(Math.random() * 101);
    if (userInp < cpuInp) {
        resUltEl.textContent = "too low";
        arrAyEl.textContent = `your guess: ${arr.join(",")}`;
    } else if (userInp > cpuInp) {
        resUltEl.textContent = "too high";
        arrAyEl.textContent = `your guess: ${arr.join(",")}`;
    }
    else {
        resUltEl.textContent = `you win! in ${arr.length} guess`;
        // resUltEl.style.color="#4caf50";
        endGame();
    }

    if(arr.length==10)
    {
        resUltEl.textContent = `you loose the game no. was ${cpuInp}`; 

        endGame();
    }
    userInputEl.focus();
}

function endGame(){
    submitBtnEl.disabled=true;
    startAgainB.disabled=false;
    userInputEl.focus();
}
startAgainEl.addEventListener("click" , startGameAgain);


function startGameAgain(){
    submitBtnEl.disabled=false;
    startAgainB.disabled=true;
    resUltEl.textContent="";
    arrAyEl.textContent="";
    arr=[];
    userInputEl.focus();
}



