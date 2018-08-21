/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

function initialObjectGrouping(studentsArr) {
var temp=""
for (var i = 0; i < studentsArr.length; i++) {
  for (var j= 0; j < studentsArr.length; j++) {
    if (studentsArr[i][0]<studentsArr[j][0]) {
      temp=studentsArr[j]
      studentsArr[j]=studentsArr[i]
      studentsArr[i]=temp
    }
  }
}
var hasil=[]
var temp=[]
for (var k = 0; k < studentsArr.length; k++) {
  if (k!==studentsArr.length-1&&studentsArr[k][0]===studentsArr[k+1][0]) {
  temp.push(studentsArr[k])
  }
  else {
    temp.push(studentsArr[k])
    hasil.push(temp)
    var temp=[]
  }
}
var Obj={}
for (var i = 0; i < hasil.length; i++) {
  Obj[hasil[i][0][0]]=hasil[i]
}
return Obj
}


console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}


*/
