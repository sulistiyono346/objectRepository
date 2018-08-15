function shoppingTime(memberId, money) {
  var listBarang=[["Sepatu brand Stacattu",1500000],["Baju brand Zoro",500000],
                  ["Baju brand H&N",250000],["Sweater brand Uniklooh",175000],
                  ["Casing Handphone",50000]]

  var Obj={}
  Obj.memberId=memberId
  Obj.money=money
  Obj.listPurchased=[]
  var totalBeli=0
  for (var i = 0; i < listBarang.length; i++) {
    if (money>=listBarang[i][1]) {
      Obj.listPurchased.push(listBarang[i][0])
      totalBeli+=listBarang[i][1]
    }
  }
  Obj.changeMoney=money-totalBeli
  return Obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
// console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
