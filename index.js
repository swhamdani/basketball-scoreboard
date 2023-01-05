let guestEl = document.getElementById("guest-el")
let homeEl =  document.getElementById("home-el")

let homeCount = 0
let guestCount = 0

function newGame(){

    homeEl.textContent = 0
    guestEl.textContent = 0
}

function guestSingleIncrement() {

    guestCount += 1
    guestEl.textContent = guestCount
}

function guestDoubleIncrement() {

    guestCount += 2
    guestEl.textContent = guestCount
}

function guestTrippleIncrement() {

    guestCount += 3
    guestEl.textContent = guestCount
}


function homeSingleIncrement() {

    homeCount += 1
    homeEl.textContent = homeCount
}

function homeDoubleIncrement() {

    homeCount += 2
    homeEl.textContent = homeCount
}

function homeTrippleIncrement() {

    homeCount += 3
    homeEl.textContent = homeCount
}