// ------------------Very Easy--------------------

// Ques1

// function convert(minutes){
//   return(minutes*60)
// }
//
// console.log(convert(2));

// Ques2

// let dividesEvenly = (number1,number2) =>{
//   if(number1%number2 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
//
// console.log(dividesEvenly(9,2));     //Number1 divides Number 2 evenly
// console.log(dividesEvenly(100,2));   //Number1 not divides Number 2 evenly

// ------------------Easy--------------------

// Ques1 (Character count)

// let charCount = (findStr,givenStr) => {
//     return (givenStr.split(findStr).length-1);
// }
//
// console.log(charCount('a','an snjnsaj aa and'));

// Ques2 (Add up number)
// var sum=0;
// let addUp = (number) => {
//     for(var i=0; i<=number; i++){
//       sum += i;
//     }
//     return sum;
// }
//
// console.log(addUp(100));
//
//
// Ques3 (Vowel replacement)
//
// function replaceVowel(string){
//   for(var i=0; i<string.length; i++){
//     if(string[i] == 'a'){
//       string = string.replace(string[i],1);
//     }
//     else if(string[i] == 'e'){
//       string = string.replace(string[i],2);
//     }
//     else if(string[i] == 'i'){
//       string = string.replace(string[i],3);
//     }
//     else if(string[i] == 'o'){
//       string = string.replace(string[i],4);
//     }
//     else if(string[i] == 'u'){
//       string = string.replace(string[i],5);
//     }
//   }
// return string;
// }

// ------------------Medium--------------------

// Ques1 (Reverse Word)

let specialReverse = (string,letter) => {
  string = string.toLowerCase();
  var splitString = string.split(" ");
  for (var i = 0; i <splitString.length; i++) {
      var firstletter = splitString[i].substring(0,1);
      //First letter of string

      if(firstletter == letter){

        var splitted = splitString[i].split('');
        finalString = splitted.reverse().join();
        finalString= finalString.split(',').join("");
        splitString[i] = finalString;
        string = splitString.join(" ");

      }
  }
  return string;
}
