/*var mhs1={
  nama: "Sulistiyono",
  nim:201622511,
  jurusan:"Sistem Informasi"
}
var mhs2={
  nama: "Andi",
  nim: 201522617,
  jurusan:"Perhotelan"
}
console.log(mhs1);
console.log(mhs2);
*/

function objDeclaration(nama,nim,jurusan) {
  var mhs={}
  mhs.nama=nama
  mhs.nim=nim
  mhs.jurusan=jurusan
  return mhs
}
var mhs3=objDeclaration("sofian",201754321,"Matematika")
console.log(mhs3);
