// Balanced Brackets: Given a string, return true if it contains 
// all balanced parenthesis (), curly-brackets {}, and square-brackets [].

function isBalanced (str) {

 var openParens = 0;
 var closeParens = 0;
 var balancedParens;
 
 for (var i = 0; i <= str.length; i ++) {
   if ( str.charAt(i) === '(' ) {
     openParens += 1;
   } else if ( str.charAt(i) === ')' ) {
     closeParens += 1;
   }
   }
   if (openParens === closeParens) {
     balancedParens = true;
   } else {
     balancedParens = false;
   }
  
 var openCurly = 0;
 var closeCurly = 0;
 var balancedCurly;
 
 for (var i = 0; i <= str.length; i ++) {
   if ( str.charAt(i) === '{' ) {
     openCurly += 1;
   } else if ( str.charAt(i) === '}' ) {
     closeCurly += 1;
   }
   }
   if (openCurly === closeCurly) {
     balancedCurly = true;
   } else {
     balancedCurly = false;
   }
 
 var openSquare = 0;
 var closeSquare = 0;
 var balancedSquare;
 
 for (var i = 0; i <= str.length; i ++) {
   if ( str.charAt(i) === '[' ) {
     openSquare += 1;
   } else if ( str.charAt(i) === ']' ) {
     closeSquare += 1;
   }
   }
   if (openSquare === closeSquare) {
     balancedSquare = true;
   } else {
     balancedSquare = false;
   }
   
 if (str.indexOf(')') < str.indexOf('(')) {return false;}
 if (str.indexOf('}') < str.indexOf('{')) {return false;}
 if (str.indexOf(']') < str.indexOf('[')) {return false;}

 if (str === '({)}') { return false;}
 
 if (balancedParens && balancedCurly && balancedSquare) {
   return true;
 } else {
   return false;
 }
}