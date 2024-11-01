const data = {
    "rock":"./images/rock.png",
    "paper":"./images/paper.png",
    "scissor":"./images/scissors.png"
}

const message = document.getElementById('mssg');

const restartButton = document.createElement('button');

const paperImg = document.getElementById('paper');
const scissorImg = document.getElementById('scissor');
const rockImg = document.getElementById('rock');

const button = document.querySelector('.submit-btn');


let  getComputerChoice = () => {
    const keys = Object.keys(data);  
    const randomIndex = Math.floor(Math.random() * keys.length);  
    const randomKey = keys[randomIndex];  
    return randomKey;  
};

let getCombinaisonResult = (computerChoice,personChoice) =>{

    if(computerChoice === "paper"){
        if(personChoice === "paper"){
            return 0;
        }else if(personChoice === "scissor"){
            return 1;
        }else{
            return -1;
        }
    }
    else if(computerChoice === "scissor"){
        if(personChoice === "paper"){
            return -1;
        }else if(personChoice === "scissor"){
            return 0;
        }else{
            return 1;
        }

    }else if(computerChoice === "rock"){
        if(personChoice === "paper"){
            return 1;
        }else if(personChoice === "scissor"){
            return -1;
        }else{
            return 0;
        }
    }

};

let checkValue = (number,choice) =>{
    if(number == 0){
        message.innerHTML = `computer selected ${choice}, DRAW HERE !`;
    }else if(number === 1){
        message.innerHTML = `computer selected ${choice}, YOU WIN !`;
    }
    else if(number === -1){
        message.innerHTML = `computer selected ${choice}, YOU LOSE !`;
    }
}

let createButtonRestart = () =>{

    restartButton.innerText = 'Restart';

    button.appendChild(restartButton);
}

paperImg.addEventListener('click', function() {

    const buttonExists = button.querySelector('button') !== null;

    if(!buttonExists){
        let choice = getComputerChoice();
        let result = getCombinaisonResult(choice,"paper");
        checkValue(result,choice);
        createButtonRestart();
    }
    
    
  });
  
  scissorImg.addEventListener('click', function() {
    const buttonExists = button.querySelector('button') !== null;
    if(!buttonExists){
    let choice = getComputerChoice();
    let result = getCombinaisonResult(choice,"scissor");
    checkValue(result,choice);
    createButtonRestart();

    }

  });
  
  rockImg.addEventListener('click', function() {
    const buttonExists = button.querySelector('button') !== null;
    if(!buttonExists){
    let choice = getComputerChoice();
    let result = getCombinaisonResult(choice,"rock");
    checkValue(result,choice);
    createButtonRestart();
    }

  });


  button.addEventListener('click', function() {
    button.removeChild(restartButton);
    message.innerHTML='';
    location.reload();
});

