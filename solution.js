/**
 * problem-01
 * solved
*/
function totalFine( fare ) {
    // You have to write your code here
    let fine=0;
    if(typeof fare !== 'number' || fare <=0){
        return "Invalid";
    }
    else{
        fine = fare+fare*(20/100)+30;
        return fine;
    }
    
}
/**
 * problem-02
 * solved
*/
function  onlyCharacter( str ) {
    // You have to write your code here
    if(Array.isArray(str)||str===true||str===false){
        return "invalid"
    }
    str=str.split(' ').join('').toUpperCase();
    return str;
}
/**
 * problem-03
 * solved
*/
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
/**
 * problem-04
 * solved
*/
function  isSame(arr1 , arr2 ) {
    // You have to write your code here
    if(!Array.isArray(arr1)||!Array.isArray(arr2)){
        return "Invalid";
    }
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
/**
 * problem-05
 * solved
*/
function  resultReport( marks ) {
    // You have to write your code here
    if(!Array.isArray(marks)){
        return "Invalid"
    }
    let sum=0;
    let pass=0;
    let fail=0;
    const avg=marks.length;
    for(let mark of marks){
        sum += mark/avg;
        if(mark>=40){
            pass++;
        }else{
            fail++;
        }   
    }
    let result={
        finalScore : Math.round(sum),
        pass : pass,
        fail : fail
    };
    return result;
}