const team = {
    _players: [{
      firstName: 'Layla',
      lastName: 'El Faouly',
      age: 28,
    },{
      firstName: 'John',
      lastName: 'Cena',
      age: 45,
    },{
      firstName: 'Mads',
      lastName: 'Mikkelsen',
      age: 56,
    }],
    _games: [{
      opponent: 'Los Angeles Lakers',
      teamPoints: 12,
      opponentPoints: 21,
    },{
      opponent: 'Toronto Raptors',
      teamPoints: 32,
      opponentPoints: 18,
    },{
      opponent: 'New York Knicks',
      teamPoints: 43,
      opponentPoints: 24,
    }],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
   addPlayer (newFirstName, newLastName, newAge){
     player= {
       firstName: newFirstName,
       lastName: newLastName,
       age: newAge
     };
     this.players.push(player);
   },
   addGame(newOpponent, newTeamPoints, newOpponentPoints){
     game = {
       opponent: newOpponent,
       teamPoints: newTeamPoints,
       opponentPoints: newOpponentPoints
     }
     this.games.push(game);
   }
  }
  team.addPlayer('Speedy', 'Gonzales', 25);
  team.addGame('Chicago Bulls', 14, 22);