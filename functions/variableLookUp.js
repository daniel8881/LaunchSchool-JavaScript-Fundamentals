//solution
/*
This is global.
*/

//discussion
/*
  In this exercise, myVar is not defined inside the scope of the function someFunction. 
  When this happens, JavaScript will look at the next outer scope and see if that variable 
  is declared at that scope. It will continue doing this until reaches the outer most (global) 
  scope. As a result of this, when myVar was not found in the local scope, it went to the 
  immediate outer scope and found and consequently used the value of the variable at the scope.
*/