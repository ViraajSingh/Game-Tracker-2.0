data = new Map([
    //initial state of the games for each player and also this will be used to reference for the postion and to add new games 
    ["Viraaj", new Set(["MarioKart", "SuperSmashBros", "Zelda"])],
    ["John", new Set(["MarioKart", "Zelda"])],
    ["Alice", new Set(["MarioKart", "Zelda"])],
    
]);

const games = ["FORZA", "Zelda", "MarioKart", "SuperSmashBros", "CallOfDuty"];//this is an array that is used fo that we can add a random game to the player
function addNewGame(gameName) {//function to add a new game to each charger 
    for (let x of data.values()) {
        let check = x.has(gameName);//checking to see if the new set for the player already has the game
        if (check) {
            console.log(gameName +  " already exists for this player");//tellign the user the error that they ran into 
            return data;
        }
        else {
            x.add(gameName);//if we get here then it means that we are able to add the game to the player list and we would do so 
            console.log(gameName +  " added successfully");//this tells the user which game and that it was added successfully
        }
    }
    return data;//give back the map to the user to see the changes made 
}



function RandomAddNewGame(randomGame) { // function to add the random game to the player list
    for (let x of data.values()) {
        const random = Math.floor(Math.random() * games.length); // this is getting a random number between 0 and 4 in order to use as reference to the games array
        randomGame = games[random]; // finding the random game using the random number that we got above
        console.log("Randomly selected game: " + randomGame); // telling the user the random game we got 
        let check = x.has(randomGame); // making a true or false statement if the user has the random game in their set  
        if (check) {//checking to see if it has it and if it does hit this then we will move from this 
            console.log("Game " + randomGame + " already exists for this player");
        } else {
            x.add(randomGame); // add the game to the player's set
            console.log("Game " + randomGame + " added successfully"); // if we get here then we know that the game was not in the set and we can add it to the player list
        }
    }
}


const scores = [//setting intial scores for the players 
    [100, 200, 300],//Viraaj
    [400, 9000, 600],//John
    [700, 800, 900]//Alice
];




const playerNames = ["Viraaj", "John", "Alice"];//a array for the names of the character to use 

function averageScore(playerName) {//function to find the average score of the player
    //seing of the player is even in the playerName 
    const playerIndex = playerNames.indexOf(playerName);
    if (playerIndex === -1) {//since we used the index of if the value we get is -1 then we know that the player is not in the list
        return "Player not found";
    }
    const playerScores = scores[playerIndex];//now we will access the given score and the index of the player and thus the values of the three scores
    

    let totalScore = 0; //intial score of the total score 
    for (let i = 0; i < playerScores.length; i++) {//looping through the scores of the player and adding them to the total score

        totalScore += playerScores[i];//adding the score to the total score

    }
    return totalScore / playerScores.length;//returning the average score of the player
}

function printScores() {
    for (let i = 0; i < scores.length; i++) {
        const player = playerNames[i];//finding the player name using the index of the player
        const playerScores = scores[i];//finding the score of the player using the index of the player
        console.log(`${player}'s scores: ${playerScores}`);//printing the player name and the score of the player
    }
}

//fnction to use the array scores and to print each thign indivually but add them together in the end with the .join
function printAllPlayerScores() {
    for (let i = 0; i < scores.length; i++) {//for loop to go through the scores of the player
        const player = playerNames[i];//making the program know what player the scores are meant for 
        const playerScores = scores[i];///accessing the scores of the player using the index of the player indivually 
        console.log(`${player}'s scores: ${playerScores.join(', ')}`);//prinitng the player name and the scores of the player each time 
    }
}
function printAllGames(){//printing all of the games 
    for (let [player, games] of data.entries()) {//acess the entries of the data map in order to get both the player and the games
        var gameList = "";
games.forEach(function(game) {//goign through each of the games and adding them to the gameList
    gameList += game + ", ";//formatting of the game with the comma 
});
console.log(player + "'s games: " + gameList);//produce the code 
}
}

function findHighestAverageScore(){//finding the highest average code 
    let highestAverage = 0;//intial condition of the highest average
    let playerWithHighestAverage = "";//intial condtion of who has the highest name 
    
    for (let i = 0; i < playerNames.length; i++) {//go over all of the players 
        const playerName = playerNames[i];//using the index of the player to get the name of the player
        const average = averageScore(playerName);//finding the average score of each of the players
        
        if (average > highestAverage) {//cheking to see if the average score of the player is greater than the highest average score
            highestAverage = average;//if it does then we will make it the highest 
            playerWithHighestAverage = playerName;//amke sujre to document the player with the highest average score 
        }
    }
    
    return playerWithHighestAverage + " has the highest average score of " + highestAverage;//produce the result and also the player with the highest average score
}
function findPlayerWithMostGames() {//finidng which player played the most 
    let playerWithMostGames = "";//intial conditonws 
    let mostGamesCount = 0;
    
    for (let playerName of data.keys()) {//goign through the data keys which are the player games 
        const gameCount = data.get(playerName).size;//finding the size of the game for each player
        if (gameCount > mostGamesCount) {//checking if the game count is greater than the most games count
            mostGamesCount = gameCount;//if it is then we will make it the most games count
            playerWithMostGames = playerName;//make sure to document the player with the most games
        }
    }
    return playerWithMostGames + " has the most games with " + mostGamesCount + " games.";
  }


  let hasShownAlert = false;  // Flag to track if alert has been shown

  function addPlayer() { //function to add a new player to the player list
    const playerName = document.getElementById("playerName").value; //gt the value from the input box by getting the id of the input box 
    if (playerName) { //checking to see if the player name is acceptable and has a value 
      playerNames.push(playerName);//pushing it the the defined value of the player names
      data.set(playerName, new Set([]));//giving it a blanck thign to work with so we can later on add games to it
      scores.push([0, 0, 0]);//giving that player an intal set of 0 that will be chnaheed 
      if (!hasShownAlert) {//checking to ssee if the alert has not been shown yet
        alert("Added new player: " + playerName);//it will produce the alert to tell that it work sucessfully 
        hasShownAlert = true;
      }
    } else {
      alert("Player name cannot be empty");//we know that if we get here then we would have had an empty name as an input so we will tell the user that it is empty
    }
  }

  function addingGames() {//adding a given game from the game selection
  const gameName = document.getElementById("gameSelect").value;//getting the name of the game from the selcte box 
  const playerName = document.getElementById("playerName").value;//we want to nnow the name of the player that the user put in the input box 
  if (!playerName || !gameName) {//checkign to see if the plaery name is empyt of the game was never selcted (is empty)
    alert("Player name and game cannot be empty");//tell the user that both of them are empty 
    return;
  }

  const playerGames = data.get(playerName);//getting the player games from the data map by using the key, this shoudl be nothign insid since the user shoudl have just made the name of it now and it should be made with nothign inside
  if (!playerGames) {//iif we cant find the player name in the data map then we know that it is not in there and we will tell the user that it is not in there
    alert("Player not found");////tell the user that the player has not be vreated yet 
    return;
  }
  if (playerGames.has(gameName)) {//checkign to see that if the player yhat has been created has the game in their set already but this is kind of redundant since we just made the player and they should not have any games in their set yet
    alert("Game " + gameName + " already exists for this player");//tell the user that the game is already there
    return;
  }

  playerGames.add(gameName);//we know that if we hit none of the if statements then we are safe to add the game to the player list 
  alert("Added game " + gameName + " to player " + playerName);//tell the user that the game was added 
}

  document.getElementById("addPlayerButton").addEventListener("click", addPlayer);//adding the event listener to the button to add a new player to the player list

  document.getElementById("new").addEventListener("click", addingGames);//adding the event listener to the button to add a new game to the player list  

let alerting = false;//make sure the set alerting to false becuase we woudl use this to check for the other functions also 
  function addScores(){//function to add scores to the player
    const PlayerName = document.getElementById("playerName").value;//get the name of the user 
    const scoreInput = document.getElementById("scoreInput").value;//getting the score from the socre input box in the html 
    const scoreStrings = scoreInput.split(",");//spliting the 
    const scoresArray = [];//intial an array that we want to hodl the socre in terms of an array with intergers of the score 
    scoreStrings.forEach(score => {//traverse the array for strings of the scores that we made from the .split 
      const pushing = parseInt(score.trim());//this will turn that string into an Interger that we can reference to
      scoresArray.push(pushing);//push the value to the socre array 
    });
    const playerIndex = playerNames.indexOf(PlayerName);//find the index of that plaer name in the playerNames array (this shoudl aways be the very last index of the array since we are adding the player to the end of the array)
    if (playerIndex == -1) {
        alert("Player not found: " + PlayerName);//since we used Index Of if we get -1 that means thwat the value was never found 
    } else {
      if (!alerting) {//if the alerting is false then we know that we have not shown the alert yet
        alert("Scores added for " + PlayerName);//telling th user that we were able to add the scores 
        alerting = true;//telling that we have shown the alert so we will not show it again
      }
      scores[playerIndex] = scoresArray;//adding the score at that index of the player to the array that we have of all of the scores 
    }
  }
  


  document.getElementById("addScoresButton").addEventListener("click", addScores);//adding the event listener to the button to add scores for a player


  function displaySummary() {//display the findings of the game
    const outputDiv = document.getElementById("output");//getting the dic that we were owudl later put the values sthat we find 
    let summary = "";//summary ois what we woudl add the values to so we want to make sure it intal has nothign inside of it 
    for (let playerName of playerNames) {//we are goign through each of the playName in the arry that contanes the PlayNae 
        const average = averageScore(playerName);//find the avaerage score of the playerName we are currently on from the for of loop
        summary += `${playerName}: Average Score: ${average}<br>`;//producing the name of the player with the avaerage socre of the player and we woudl add a br tag (nreak tag) so that we can have soem space 
        const playerGames = data.get(playerName);//getting the values of the games of that one player 
        let gameList = '';//making a strign that we woudl add when we go through the player games we found 
        if (playerGames) {
          gameList = Array.from(playerGames).join(', ');
        }
        summary += `Games: ${gameList}<br>`;
        summary += `Scores: ${scores[playerNames.indexOf(playerName)].join(', ')}<br>`;//adding the scores of the player to the summary
        summary += `<br>`;//adding a line break to the summary so we can see it better

    }
    outputDiv.innerHTML = summary;//putting the summary in the output div so we can see it in the html page 
  }
