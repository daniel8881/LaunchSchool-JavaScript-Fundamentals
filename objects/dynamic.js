//solution
/*
  line11: '678'
  line12: '456'
*/

//discussion
/*
  myObject[prop2] = '678' is equal to myObject['456'] = 678
  so When console.log(myObject[prop2]) is equal to console.log(myObject['456'])
  therefore, it logged out 678
*/

//Further Exploration
/* it logged out: { funcProp: 'hello, ' }, { funcProp: 'world!' }
   becuse myFunc is return 'funcProp', myObject[myFunc()] is equal to myObject['funcProp']
*/

