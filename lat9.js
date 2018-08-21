function naikAngkot(arrPenumpang) {
var result=[]
var abjad="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (var i = 0; i < arrPenumpang.length; i++) {
  var Obj={}
  Obj.penumpang=arrPenumpang[i][0]
  Obj.naikDari=arrPenumpang[i][1]
  Obj.tujuan=arrPenumpang[i][2]
  var posA=0
  var posB=0
  for (var j = 0; j < abjad.length; j++) {
    if (abjad[j]===arrPenumpang[i][1]) {
      posA=j
    }
    else if (abjad[j]===arrPenumpang[i][2]) {
      posB=j
    }
  }
  Obj.bayar=(posB-posA)*2000
  result.push(Obj)
}
return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
