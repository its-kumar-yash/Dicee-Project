//function to generate random number
function randomGen(){
    //Generating random numbers
    var randomNum = Math.random();
    //changing range between 1 - 6
    var randomNum1 = Math.floor(randomNum * 6) + 1;
    return randomNum1;
}

//function to set image according to random number
function setImage(n,i){
    switch (n){
        case 1:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice1.png");
            break;
        case 2:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice2.png");
            break;
        case 3:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice3.png");
            break;
        case 4:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice4.png");
            break;
        case 5:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice5.png");
            break;    
        case 6:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice6.png");
            break;
        default:
            document.getElementsByTagName("img")[i].setAttribute("src", "images/dice6.png");
    }
}

// generate random number
var randomNumber1 = randomGen();
var randomNumber2 = randomGen();
console.log(randomNumber1 + " " + randomNumber2);

// setting image
setImage(randomNumber1, 0);
setImage(randomNumber2, 1);


//result displaying
if( randomNumber1 === randomNumber2 ){
    document.querySelector("h1").textContent = "Draw!";
}
else if( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = 'Player 1 Wins! &#128681'; 
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}


