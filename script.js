let userscore = 0;
let compscore = 0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame=()=>{
    msg.innerText="Game is draw play again";
    msg.style.backgroundColor="#081b31";

};
 const showWinner=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorepara.innerText=compscore;
        msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    // Implement game logic here
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userwin;
        if(userChoice === "rock"){
            userwin=compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin=compChoice === "scissors" ? false : true;
        }else{
            userwin=compChoice ==="rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})