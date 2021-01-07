

let card = document.querySelector(".card")
let up = document.querySelector(".up-suit")
let number = document.querySelector(".number")
let down = document.querySelector(".down-suit")

let suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
let color=['black','black','red','red']

function randomCard() {
    let randomSuit = Math.floor(Math.random() * suits.length);
    let randomNum = Math.floor(Math.random() * nums.length);
    
    up.style='color:'+ color[randomSuit]
    down.style='color:'+ color[randomSuit]
    number.style='color:'+ color[randomSuit]


    up.innerHTML = suits[randomSuit];
    down.innerHTML = suits[randomSuit];
    number.innerHTML = nums[randomNum];
}

window.onload = randomCard();