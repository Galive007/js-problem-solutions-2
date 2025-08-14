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
console.log(totalFine("Gorib tai ticket katinai"));

