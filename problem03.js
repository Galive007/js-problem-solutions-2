function  bestTeam( player1, player2 ) {
    // You have to write your code here
    if(typeof player1 !== 'object'||typeof player2 !=='object'){
        return "Invalid"
    }
    const team1=player1.foul+player1.cardY+player1.cardR;
    const team2=player2.foul+player2.cardY+player2.cardR;
    if(team1<team2){
        return player1.name;
    }
    if(team2<team1){
        return player2.name;
    }
    if(team1==team2){
        return "Tie"
    }
}
const result=bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 });
console.log(result);
