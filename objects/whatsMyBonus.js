//solution
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true)      // 1400
calculateBonus(1000, false)     // 0
calculateBonus(50000, true)     // 25000

//discussion
/*
  Notice that while no parameters are explicity defined for the calculateBonus 
  function there are still arguments that are available locally within the function. 
  This is because all functions have an arugments object that is available locally. 
  The arguments object contains an entry for every arugment that is passed to the function.
*/



