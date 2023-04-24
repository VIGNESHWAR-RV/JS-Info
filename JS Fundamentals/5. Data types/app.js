//  Data Types in JavaScript

// values is javascript always has type definition.
// Totally, 8 data types is JS ( number, BigInt, string, boolean, null, undefined, object, symbol )
// In JS, variables can have any type at any time ( dynamic & weakly typed)
   // dynamic -- type of value in a variable is defined during the runtime ( on their execution )
   // weakly typed --  same variable can be initialized with values of different types, whenever needed 
/*
  ex: 
    let num = 6;
    num = "RV";
    num = false;

 */

/*
   Number
   -------
  
   let n = 123;
   n = 12.345;

   represents both integers and floating points
   also include special numerical values -> Infinity, -Infinity, NaN

   Infinity is special value greater than any Number ( 1/0 )
   -Infinity is special value less than any Number ( -1/0 )
   
   NaN - computational error 
   resulting in undefined mathematical operation ( 1 %% 2 )
   or mathematical operation on non-numeric values ( "Number" / 2 )

   NaN is sticky
   mathematical operations on NaN results again in NaN ( except NaN ** 0 is 1 ) ( ** - exponentiation )

   Doing Maths in JS is always safe since it wouldn't throw any fatal error
   At worst, it results in NaN ( sometimes might be difficult to debug )
   
*/
