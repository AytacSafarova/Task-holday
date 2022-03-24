function charcount(str, letter) 
{
 var letterCount = 0;
 for (var i = 0; i< str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}

console.log(charcount('Hello world', 'l'));