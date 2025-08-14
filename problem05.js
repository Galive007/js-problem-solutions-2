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
        // if(mark>=40) ? pass++ : fail++ ;  
    }
    let result={
        finalScore : Math.round(sum),
        pass : pass,
        fail : fail
    };
    return result;
}
const result=resultReport(100);
console.log(result);
