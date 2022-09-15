const vouchers = ["DumbWMerchBerkah", "DumbMerchMurahBanget"];

function convertToRupiah(angka) {
  var rupiah = "";
  var angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("") +
    ",-"
  );
}

function discounts(discount, price) {
  if (discount == vouchers[0]) {
    if (price >= 50000) {
      var voucher = 0.25 * price;
      if (voucher > 20000) {
        voucher = 20000;
        var amount = convertToRupiah(price);
        var disc = `25%`;
        var cutprice = convertToRupiah(voucher);
        var pay = price - voucher;
        var paym = convertToRupiah(pay);
      } else {
        var amount = convertToRupiah(price);
        var disc = `25%`;
        var cutprice = convertToRupiah(voucher);
        var pay = price - voucher;
        var paym = convertToRupiah(pay);
      }
    } else {
      var amount = convertToRupiah(price);
      console.log(`Total belanja : ${amount}`);
      console.log("Tidak dapat diskon");
      return;
    }
  } else if (discount == vouchers[1]) {
    if (price >= 70000) {
      var voucher = 0.5 * price;
      if (voucher > 45000) {
        voucher = 45000;
        var amount = convertToRupiah(price);
        var disc = `50%`;
        var cutprice = convertToRupiah(voucher);
        var pay = price - voucher;
        var paym = convertToRupiah(pay);
      } else {
        var amount = convertToRupiah(price);
        var disc = `50%`;
        var cutprice = convertToRupiah(voucher);
        var pay = price - voucher;
        var paym = convertToRupiah(pay);
      }
    } else {
      var amount = convertToRupiah(price);
      console.log(`Total belanja : ${amount}`);
      console.log("Tidak dapat diskon");
      return;
    }
  }

  console.log(`Total belanja : ${amount}`);
  console.log(`Diskon : ${disc}`);
  console.log(`Potongan : ${cutprice}`);
  console.log(`Total pembayaran : ${paym}`);
}

discounts("DumbMerchMurahBanget", 120000);
