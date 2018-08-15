function changeMe(arr) {
for (var i = 0; i < arr.length; i++) {
  var Obj={}
  Obj.firstName=arr[i][0],
  Obj.lastName=arr[i][1],
  Obj.gender=arr[i][2]
  if (arr[i].length<=3) {
    Obj.age="Invalid Birth Year"
  }
  else {
    Obj.age=2018-arr[i][3]
  }

  console.log(Obj);
}
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
