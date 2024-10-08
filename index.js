let homescore = 0
let guestscore = 0
let countHome = document.getElementById("countHome")
let countGuest = document.getElementById("countGuest")

function addOneHome () {
    homescore += 1
    countHome.textContent = homescore
}

function addTwoHome () {
    homescore += 2
    countHome.textContent = homescore
}

function addThreeHome () {
    homescore += 3
    countHome.textContent = homescore
}

function addOneGuest () {
    guestscore += 1
    countGuest.textContent = guestscore
}


function addTwoGuest () {
    guestscore += 2
    countGuest.textContent = guestscore
}

function addThreeGuest () {
    guestscore += 3
    countGuest.textContent = guestscore
}