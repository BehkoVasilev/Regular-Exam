class footballTeam {
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []; 
    }

    newAdditions(footballPlayers){
        for (let player of footballPlayers){
            let [name, age, playerValue] = player.split("/");
            age = Number(age);
            playerValue = Number(playerValue);

            let currentPlayer = this.invitedPlayers.find(player => player.name === name);

            if(!currentPlayer){
                this.invitedPlayers.push({name, age, playerValue});
            }else {
                if(currentPlayer.playerValue < playerValue){
                    currentPlayer.playerValue = playerValue;
                }
            }
        }
        let resMsg =[]
        for (let player of this.invitedPlayers){
            resMsg.push(player.name);
        }
        return "You successfully invite " + resMsg.join(", ") + '.';
    }

    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer)
        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if (!currentPlayer){
            throw Error (`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.playerValue === "Bought"){return}
        if(playerOffer < currentPlayer.playerValue){
            throw Error (`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        currentPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${currentPlayer.name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age){
        let currentPlayer = this.invitedPlayers.find(player => player.name === name);

        if (!currentPlayer){
            throw Error (`${name} is not invited to the selection list!`);
        }

        if(currentPlayer.age < age ){
            let diff = age - currentPlayer.age;

            if(diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
            }
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult(){
        let resMsg = this.invitedPlayers.map(p => `Player ${p.name}-${p.playerValue}`);
        resMsg.unshift("Players list:");

        return resMsg.join("\n");
    }
}




let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/60", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/150"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



