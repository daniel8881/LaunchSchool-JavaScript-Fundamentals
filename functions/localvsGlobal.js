//solution
/*
This is global.
*/

//discussion
/*
  A lexical scope is means the scope is depend where the code appear in the source code. The 
  variable myVar is defined in two places. The first is outside of any function. In this 
  instance it has a global scope. The second place is inside the function someFunction. 
  Functions in Javascript create a new scope - in this case it is a scope that is 'local' 
  to the function.

  Going back to what is printed, the console.log(myVar) on line 9 will still print 
  'This is global' since when the myVar was defined inside the function it was defined 
  inside another scope. As such, while they have the same name, they are essentially different
   variables.
*/