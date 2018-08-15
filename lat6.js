/**

Product Categories
==================

Implementasikan function productCategories untuk menghitung
jumlah barang yang dimiliki oleh kategori yang tersedia

Output yang diharapkan adalah Object Literal seperti contoh berikut:
{
  <Category>: <NumberOfItems>
}

# Contoh:
  - `products`: [
    ['Asus H110M-K', 840000, 'Motherboard'],
    ['Corsair DDR4 Dominator 16GB', 3450000, 'Memory'],
    ['Asus ROG Zenith Extreme', 8475000, 'Motherboard'],
    ['Logitech Z120', 130000, 'Speaker']
  ]
  - output: { Motherboard: 2, Memory: 1, Speaker: 1 }

  - `products`: []
  - output: 'Empty data'

# Aturan coding
- WAJIB menggunakan WHILE / FOR loop

*/

function productCategories(products) {
  if(products.length===0) return "Empty data"
  var Obj={}
for (var i = 0; i < products.length; i++) {
  var count=1
  for (var j = 0; j < products.length; j++) {
    if (i!==j&products[i][2]===products[j][2]) {
      count++
    }
  }
  Obj[products[i][2]]=count
}
return Obj
}
console.log(productCategories([
  ['Mouse Logitech', 150000, 'Mouse'],
  ['ATI Radeon', 800000, 'Graphic Card'],
  ['NVIDIA Card', 760000, 'Graphic Card'],
  ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
]));
// { Mouse: 1, 'Graphic Card': 2, Harddisk: 1 }

console.log(productCategories([
  ['Cooler Master MasterNotepal Maker', 720000, 'Cooler'],
  ['Cooler Master MasterNotepal Pro', 685000, 'Cooler'],
  ['Cooler Master Notepal Ergostand III', 540000, 'Cooler'],
  ['Cooler Master Notepal X3', 430000, 'Cooler']
]));
// { Cooler: 4 }

console.log(productCategories([]));
// Empty data
