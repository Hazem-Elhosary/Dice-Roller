var nam1 = prompt("Enter player 1 Name");
var nam2 = prompt("Enter player 2 Name");

function play() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1); //random nymber between 1-6
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png
    var randomImageSource = "images/" + randomDiceImage;
    var images1 = document.querySelectorAll("img")[0];
    images1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1); //random nymber between 1-6
    var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png
    var randomImageSource2 = "images/" + randomDiceImage;
    var images1 = document.querySelectorAll("img")[1];
    images1.setAttribute("src", randomImageSource2);


    if (randomImageSource > randomImageSource2) {
        document.querySelector("h1").innerHTML = nam1 + " is winner 🚩"
    } else if (randomImageSource2 > randomImageSource) {
        document.querySelector("h1").innerHTML = nam2 + " is winner 🚩"

    } else {
        document.querySelector("h1").innerHTML = "The two Teams is Draw"

    }
    document.querySelector(".player1").innerHTML = nam1;
    document.querySelector(".player2").innerHTML = nam2;

}
play();