let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


document.getElementById("addOne").addEventListener("click",()=>{

    let displayVal =parseInt(homeScore.textContent)
    displayVal += 1 ;
    homeScore.textContent = displayVal
})

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

