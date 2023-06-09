console.log("Welkom")

const myName = prompt("Wat is je naam?")
const myAge = prompt(`Wat is uw leeftijd, ${myName}?`)

if (myAge >= 18) {
    alert('Welkom')
} else {
    alert("Je bent te jong")
    window.location.href = 'tooyoung.html'
}

const maxWorp = 6;
let computerCredits = 5;
let playerCredits = 5;
let computerDice = 0;
let playerDice = 0;

const computerBtn = document.body.querySelector(".computerbtn")

if (computerBtn) {
    computerBtn.addEventListener("click", function (click) {
        computerDice = Math.floor(Math.random() * maxWorp);
        computerDice++;
        alert(`Computer gooit ${computerDice}`)
        playerDice = Math.floor(Math.random() * maxWorp);
        playerDice++;
        alert(`${myName} gooit ${playerDice}`)
        checkWinner()
    })

} else {
    console.log("Computer button not found!!")
}


function checkWinner() {
    if (computerDice > playerDice) {
        computerCredits = computerCredits + 1;
        playerCredits = playerCredits - 1;
        alert(`De computer wint`)
    } else if (playerDice > computerDice) {
        playerCredits = playerCredits + 1;
        computerCredits = computerCredits - 1;
        alert(`${myName} wint`)
    } else {
        alert("Draw")
    }
    document.querySelector(".computerCredits").innerHTML = `De computer heeft ${computerCredits} credits.`
    document.querySelector(".playerCredits").innerHTML = `${myName} heeft ${playerCredits} credits.`
}



// }
// document.querySelector(".computerCredits").innerHTML = `Computer heeft ${computerCredits} credits!`
// document.querySelector(".playerCredits").innerHTML = `${myName} heeft ${playerCredits} credits!`
