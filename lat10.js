function highestScore (students) {
   var Obj={}
  for (var i = 0; i < students.length; i++) {
    if (Obj[students[i].class]===undefined) {
      Obj[students[i].class]= {name: students[i].name, score: students[i].score}
    }
    else {
      if (students[i].score>Obj[students[i].class].score) {
        Obj[students[i].class]={name :students[i].name+" "+i, score : students[i].score+" "+i}
      }
    }
  }
  return Obj
  }

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 78,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 85,
    class: 'wolves'
  }
]));
//
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
//

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
//
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
//
//
console.log(highestScore([])); //{}
