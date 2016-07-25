// Military Time: Given a string that represents time in hours and minutes, 
// convert the string to military time (if necessary).

function toMilitary (time) {

//deal with 12 am times
 if (!time.includes("p") && time.split(0, 1)[0] === "12:") {
   return "00:" + time.charAt(3) + time.charAt(4);
 } else if (time.includes("p") && time.split(0, 1)[0] === "12:") {
   return "12:" + time.charAt(3) + time.charAt(4);
 }
 
 
 // if string does not include the letter p or a, leave as is.
 if ( !time.includes("p") && !time.includes("a")) {
   return time;
   
 // if string includes a, take the am out.
 } else if (time.includes("a")) {
   var minusAm = time.slice(0, time.length - 2);
    if (minusAm.length < 5) {
     var zero = "0";
     militaryTime = zero.concat(minusAm);
     return militaryTime;
   }
 
 // else, convert
 } else {
   // take out the pm
   var justNumbers = time.slice(0, time.length - 2);
   
   // replace the numbers before the colon with that plus 12
   // keep the last two numbers the same
   var hoursAndMinutes = justNumbers.split(":");
   var militaryHours = Number(hoursAndMinutes[0]) + 12;
   var militaryTime = militaryHours + ':' + hoursAndMinutes[1];
   
   // add a zero on the front if need be
   if (militaryTime.length < 5) {
     var zero = "0";
     militaryTime = zero.concat(militaryTime);
     return militaryTime;
   } 
   return militaryTime;
 }
}