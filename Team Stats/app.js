const team = {
    _players: [
        {
            firstName: 'Stef',
            lastName: 'Castillo',
            age: '29',
        },
        {
            firstName: 'James',
            lastName: 'Dillon',
            age: '29',
        },
        {
            firstName: 'Steve',
            lastName: 'Blackhart',
            age: '35',
        }
    ],
    _games: [
        {
            opponent: 'No Fly Zone',
            teamPoints: 27,
            opponentPoints: 18
        },
        {
            opponent: `Good Ol' Boys`,
            teamPoints: 25,
            opponentPoints: 6
        },
        {
            opponent: 'Goal Intended',
            teamPoints: 41,
            opponentPoints: 0
        }
    ],

    //getters
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    //methods
     addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentsPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentsPoints
        };
        this._games.push(game);
    }

};


team.addPlayer('Tommy', 'Wagner', 30);
team.addGame('Gold Buffalos', 30, 0);
console.log(team.players)
console.log(team.games)
