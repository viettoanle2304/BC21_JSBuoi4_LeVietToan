document.getElementById("nhomKH").addEventListener("click", (e) => {
  const element = e.target;
  //   console.log(element.value);

  if (element.value == "Business") {
    document.getElementById("bt4__duLieu--soKetNoi").disabled = false;
  } else {
    document.getElementById("bt4__duLieu--soKetNoi").disabled = true;
  }
});

document.getElementById("btn-bt4").addEventListener("click", () => {
  document.getElementById("bt4__ketQua").innerHTML = "";

  const maKH = document.getElementById("bt4__duLieu--maKH").value;
  const nhomKH = document.querySelector("input[name='select']:checked").value;
  const soKenh = document.getElementById("bt4__duLieu--soKenh").value * 1;
  const soKetNoi =
    nhomKH == "Personal"
      ? 0
      : document.getElementById("bt4__duLieu--soKetNoi").value * 1;
  //   console.log(maKH, nhomKH, soKenh, soKetNoi);

  let tongChiPhi = 0;
  let phiDichVu = 20.5;
  const phiThueKenh = nhomKH == "Personal" ? 7.5 : 50;

  if (nhomKH == "Personal") {
    tongChiPhi = 4.5 + 20.5 + phiThueKenh * soKenh;
  } else {
    phiDichVu = soKetNoi <= 10 ? 75 * soKetNoi : 75 * 10 + (soKetNoi - 10) * 5;

    tongChiPhi = 15 + phiDichVu + 50 * soKenh;
  }

  //  *: In Kết quả
  const hoaDonArr = [
    `Mã Khách Hàng: ${maKH}`,
    `Nhóm khách hàng: ${nhomKH == "Personal" ? "Nhà Dân" : "Doanh Nghiệp"}`,
    `Phí xử lí hoá đơn: ${nhomKH == "Personal" ? 4.5 : 15}$`,
    `Phí dịch vụ cơ bản: ${phiDichVu.toLocaleString()}$`,
    `Phí thuê kênh cao cấp: ${(phiThueKenh * soKenh).toLocaleString()}$`,
    `Tổng chi phí: ${tongChiPhi.toLocaleString()}$`,
  ];

  for (bill of hoaDonArr) {
    const node = document.createElement("p");
    node.appendChild(document.createTextNode(bill));

    document.getElementById("bt4__ketQua").appendChild(node);
  }
  //  *: End
});
