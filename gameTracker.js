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
    
    return playerWithMostGames + " has the most games with " + mostGamesCount + " games.";//give the result of the player with the most games and how many games they have
}
addNewGame("CallOfDuty");
printAllPlayerScores();
console.log("Johns average score is " + averageScore("John"));
console.log("Viraaj's average score is " + averageScore("Viraaj"));
console.log("Alice's average score is " + averageScore("Alice"));
console.log(findHighestAverageScore());
console.log(findPlayerWithMostGames());
RandomAddNewGame();
printAllGames();

//all of this is the documentation of the code and what it does with the use of the function and producing the result 
function addPlayer(){
    const playerName = document.getElementById("playerName").value;
    if (playerName) {
        playerNames.push(playerName);
        data.set(playerName, new Set([]));
        scores.push([0, 0, 0]);
        console.log(`Added new player: ${playerName}`);
    } else {
        console.log("Player name cannot be empty");
    }
}

document.getElementById("addPlayerButton").addEventListener("click", function() {
    addPlayer();
    console.log("Player added successfully");
    const person = document.getElementById("playerName").value;
    alert(person + " added successfully");
    document.getElementById("playerName").value = "";

    document.getElementById("scoreInput").value = "";
});

document.getElementById("gameSelect").addEventListener("change", function() {
    const game = this.value;
    if (data.has(game)) {
        // console.log(game + " already exists for this player");
    }
    else {
        data.get(game).add(playerName);
    }
    console.log(data);
})

