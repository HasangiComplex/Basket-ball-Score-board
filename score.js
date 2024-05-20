let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
const resetBtn = document.getElementById("reset-btn");
const endBtn = document.getElementById("end-btn");
let isGameEnd = false;



function addScoresForHome(points) {
    let displayScoreHome = parseInt(homeScore.textContent)
    displayScoreHome+= points;
    homeScore.textContent = displayScoreHome

}

function addScoresForGuest(points) {
    let displayScoreGuest =parseInt(guestScore.textContent)
    displayScoreGuest+= points;
    guestScore.textContent = displayScoreGuest
}



function reset(){
    isGameEnd = true;
    homeScore.textContent = 0 ;
    guestScore.textContent = 0;
}

function endGame(){
    isGameEnd = true;
    document.getElementById("main-content").style.display = none;
}
