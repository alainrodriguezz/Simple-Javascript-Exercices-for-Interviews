//==========================================
//
// This is the classic Fizz Buzz Interview question
// Where you have to print 100 numbers
//
// If the number is multiple of 3, print "Fizz" 
// If the number is multiple of 5, print "Buzz"
// If the numbers is multiple of 3 and 5, print "Fizz Buzz"
// Otherwise just print the number
//
//==========================================

var totalNumbers = 100;

for (var i = 1; i <= totalNumbers; i++) 
{
  var isMultipleOf3 = checkIfItsMultiple(i,3);
  var isMultipleOf5 = checkIfItsMultiple(i,5);
  var result        = i;

  if(isMultipleOf3)                   result = "Fizz";
  if(isMultipleOf5)                   result = "Buzz";
  if(isMultipleOf3 && isMultipleOf5)  result  = "Fizz Buzz";

  console.log(result);
}

function checkIfItsMultiple(number,divisor) 
{
  return number % divisor == 0 ? true : false;
}