function  onlyCharacter( str ) {
    // You have to write your code here
    if(Array.isArray(str)||str===true||str===false){
        return "invalid"
    }
    str=str.split(' ').join('').toUpperCase();
    return str;
}
const result=onlyCharacter(true);
console.log(result);
