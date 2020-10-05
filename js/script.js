var options = ["rock", "paper", "scissors"];
var totalScoreComputer = 0;
var totalScoreUser = 0;
var totalAttempts = 0;

//play button
function play(){
    
    totalAttempts++;
    //user Option
    var userOption = inputOption('Choose your move (rock, paper or scissors)');
    
    //Random computer Option
    var myRandom = Math.floor(Math.random() * 3);
    var computerOption  = options[myRandom];
    alert('The computer chose: ' + computerOption);
    
    //game
    if (computerOption == userOption){
        switch(computerOption){
            case "rock":
                document.getElementById('imageResult').src = "images/rock_rock.png";
                break;
            case "paper":
                document.getElementById('imageResult').src = "images/paper_paper.png";
                break;
            case "scissors":
                document.getElementById('imageResult').src = "images/scissors_scissors.png";
                break;
        }
        alert('It is a tie!');
    } else{ 
        if (computerOption == "rock"){
            if (userOption == "paper"){
                totalScoreUser++;
                document.getElementById('imageResult').src = "images/paper_rock.png";
                alert('Paper beats rock. You win!');
            } else{
                totalScoreComputer++;
                document.getElementById('imageResult').src = "images/rock_scissors.png";
                alert('Rock beats scissors. You loose!');
            }
        }
        if (computerOption == "paper"){
            if (userOption == "rock"){
                totalScoreComputer++;
                document.getElementById('imageResult').src = "images/paper_rock.png";
                alert('Paper beats rock. You loose!');
            } else{
                totalScoreUser++;
                document.getElementById('imageResult').src = "images/scissors_paper.png";
                alert('Scissors beats paper. You win!');
            }
        }
        if (computerOption == "scissors"){ 
            if (userOption == "paper"){
                totalScoreComputer++;
                document.getElementById('imageResult').src = "images/scissors_paper.png";
                alert('Scissor beats paper. You loose!');
            } else{
                totalScoreUser++;
                document.getElementById('imageResult').src = "images/rock_scissors.png";
                alert('Rock beats scissors. You win!');
            }
        }
    }



        /*
    } else if (computerOption == "rock" && userOption == "paper"){
            totalScoreUser++;
            document.getElementById('imageResult').src = "images/paper_rock.png";
            alert('Paper beats rock. You win!');
    } else if (computerOption == "rock" && userOption == "scissors"){
            totalScoreComputer++;
            document.getElementById('imageResult').src = "images/rock_scissors.png";
            alert('Rock beats scissors. You loose!');
    } else if (computerOption == "paper" && userOption == "rock"){
            totalScoreComputer++;
            document.getElementById('imageResult').src = "images/paper_rock.png";
            alert('Paper beats rock. You loose!');
    } else if (computerOption == "paper" && userOption == "scissors"){
            totalScoreUser++;
            document.getElementById('imageResult').src = "images/scissors_paper.png";
            alert('Scissors beats paper. You win!');
    } else if (computerOption == "scissors" && userOption == "paper"){
            totalScoreComputer++;
            document.getElementById('imageResult').src = "images/scissors_paper.png";
            alert('Scissor beats paper. You loose!');
    } else if (computerOption == "scissors" && userOption == "rock"){
            totalScoreUser++;
            document.getElementById('imageResult').src = "images/rock_scissors.png";
            alert('Rock beats scissors. You win!');
    }*/
    //results
    document.getElementById('resultUser').innerHTML = `${totalScoreUser}`;
    document.getElementById('resultComputer').innerHTML = `${totalScoreComputer}`;
    document.getElementById('numberAttempts').innerHTML = `Total of Attempts: ${totalAttempts}`;
}

//inputs something from the uses and validate that it is one of the options then returns it
function inputOption(message){
    do{
        var messageInput = prompt(message);
        messageInput = messageInput.toLowerCase();
    }while(messageInput != "rock" && messageInput != "paper" && messageInput != "scissors");
    return (messageInput);
}