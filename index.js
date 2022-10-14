let homeScore = 0
let guestScore = 0

let homeBoard = document.getElementById("home-score")
let guestBoard = document.getElementById("guest-score")

function home1() {
    homeScore += 1
    homeBoard.textContent = homeScore    
}

function home2() {
    homeScore += 2
    homeBoard.textContent = homeScore    
}

function home3() {
    homeScore += 3
    homeBoard.textContent = homeScore    
}

function guest1() {
    guestScore += 1
    guestBoard.textContent = guestScore    
}

function guest2() {
    guestScore += 2
    guestBoard.textContent = guestScore    
}

function guest3() {
    guestScore += 3
    guestBoard.textContent = guestScore    
}