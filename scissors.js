let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let usersc=document.querySelector("#userScore");
let compsc=document.querySelector("#compScore");

let genCompchoice= ()=>{
  const option=["rock","paper","scissors"];
  const ranIdx=Math.floor(Math.random()*3);
  return option[ranIdx];
};
const drawGame=()=>{
    console.log("game is draw");
    msg.innerText=" game was Draw Play Again!";
    msg.style.backgroundColor="blue";
}

let  showWinner=(userWin, compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        usersc.innerText=userScore;
        console.log("you Win !");
        msg.innerText=`you Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compsc.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor= "red";
    }
}
const playGame= (userChoice)=>{
    console.log("user choice =", userChoice);
     const compChoice =genCompchoice();
    console.log("computer choice = " , compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"? true:false;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="rock"?true:false;
        }
        else{
            userWin=compChoice=="scissors"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
        }
};
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});

