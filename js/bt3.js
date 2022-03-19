document.getElementById("btn-bt3").addEventListener("click", () => {
  document.getElementById("bt3__ketQua--hoTen").innerHTML = "";

  const hoTen = document.getElementById("bt3__duLieu--hoTen").value;
  const thuNhap =
    document
      .getElementById("bt1__duLieu--thuNhap")
      .value.replaceAll(/[,\.]/g, "") * 1;
  const soNguoiPhuThuoc =
    document.getElementById("bt3__duLieu--soPhuThuoc").value * 1;

  //   console.log(hoTen, thuNhap, soNguoiPhuThuoc);

  const thuNhapChiuThue = thuNhap / Math.pow(10, 6) - 4 - soNguoiPhuThuoc * 1.6;
  const thueThuNhap = tinhThueThuNhap(thuNhapChiuThue);

  if (hoTen != "") {
    document.getElementById(
      "bt3__ketQua--hoTen"
    ).innerHTML = `Họ tên: ${hoTen}`;
  }

  document.getElementById(
    "bt3__ketQua--tienThue"
  ).innerHTML = `Thuế thu nhập cá nhân là: ${(
    thueThuNhap * Math.pow(10, 6)
  ).toLocaleString()}đ`;
});

const tinhThueThuNhap = (thuNhap) => {
  if (thuNhap <= 60) {
    return (thuNhap * 5) / 100;
  } else if (thuNhap <= 120) {
    return (thuNhap * 10) / 100;
  } else if (thuNhap <= 210) {
    return (thuNhap * 15) / 100;
  } else if (thuNhap <= 384) {
    return (thuNhap * 20) / 100;
  } else if (thuNhap <= 624) {
    return (thuNhap * 25) / 100;
  } else if (thuNhap <= 960) {
    return (thuNhap * 30) / 100;
  } else {
    return (thuNhap * 35) / 100;
  }
};
