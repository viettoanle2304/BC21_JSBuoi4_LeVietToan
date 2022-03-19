document.getElementById("btn-bt2").addEventListener("click", () => {
  const tongDienTieuThu =
    document.getElementById("bt2__duLieu--tongDien").value * 1;
  //   console.log(dienTieuThu);

  const tongTienDien = tinhTien(tongDienTieuThu);
  //   console.log(tongTienDien);

  document.getElementById(
    "bt2__ketQua"
  ).innerHTML = `Tổng tiền điện phải trả là: ${tongTienDien.toLocaleString()}đ`;
});

const tinhTien = (tongDienTieuThu) => {
  const giaDienArr = [
    { price: 500, consume: 0, cost: 0 },
    { price: 650, consume: 0, cost: 0 },
    { price: 850, consume: 0, cost: 0 },
    { price: 1100, consume: 0, cost: 0 },
    { price: 1300, consume: 0, cost: 0 },
  ];

  let dienTieuThu = tongDienTieuThu;
  for (let i = 0; dienTieuThu > 0; ++i) {
    switch (i) {
      case 0:
        if (dienTieuThu - 50 > 0) {
          giaDienArr[i].consume = 50;
        } else {
          giaDienArr[i].consume = dienTieuThu;
        }
        dienTieuThu -= 50;
        break;
      case 1:
        if (dienTieuThu - 50 > 0) {
          giaDienArr[i].consume = 50;
        } else {
          giaDienArr[i].consume = dienTieuThu;
        }
        dienTieuThu -= 50;
        break;
      case 2:
        if (dienTieuThu - 100 > 0) {
          giaDienArr[i].consume = 100;
        } else {
          giaDienArr[i].consume = dienTieuThu;
        }
        dienTieuThu -= 100;
        break;
      case 3:
        if (dienTieuThu - 150 > 0) {
          giaDienArr[i].consume = 150;
        } else {
          giaDienArr[i].consume = dienTieuThu;
        }
        dienTieuThu -= 150;
        break;
      default:
        giaDienArr[i].consume = dienTieuThu;
        dienTieuThu = 0;
        break;
    }
  }

  giaDienArr.map((val) => (val.cost = val.price * val.consume));

  //   console.log(giaDienArr);

  return giaDienArr.reduce((preVal, curVal) => preVal + curVal.cost, 0);
};
