/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran,
parameter kedua adalah nilai yang harus dibayarkan.

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang

*/

function hitungKembalian(bayar, harga){

  var ketersediaanUang = [
      { nominal: 100000, jumlah: 5},
      { nominal: 50000, jumlah: 5},
      { nominal: 20000, jumlah: 5 },
      { nominal: 10000, jumlah: 5},
      { nominal: 5000, jumlah: 5}
  ];
var Obj={}
var sisa=bayar-harga

for (var i = 0; i < ketersediaanUang.length; i++) {
  var total=ketersediaanUang[i].jumlah
  var count=0
  for (var j=sisa; j>=ketersediaanUang[i].nominal&& count<total; j=j-ketersediaanUang[i].nominal) {
    sisa=sisa-ketersediaanUang[i].nominal
    count++
  }
  if (count!==0) {
      Obj[ketersediaanUang[i].nominal]= count
  }

}
return Obj
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  {
    '5000': 1,
    '20000': 2,
    '100000': 2
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  {
    '10000': 1,
    '20000': 4,
    '50000': 5,
    '100000': 5
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup
