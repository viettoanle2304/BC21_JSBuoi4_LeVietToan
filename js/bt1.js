document.getElementById("btn-bt1").addEventListener("click", () => {
  const diemChuan = document.getElementById("bt1__duLieu--diemChuan").value * 1;
  const diemThi1 = document.getElementById("bt1__duLieu--diemThi1").value * 1;
  const diemThi2 = document.getElementById("bt1__duLieu--diemThi2").value * 1;
  const diemThi3 = document.getElementById("bt1__duLieu--diemThi3").value * 1;
  const khuVuc = document.getElementById("bt1__duLieu--khuVuc").value;
  const doiTuong = document.getElementById("bt1__duLieu--doiTuong").value * 1;
  //   console.log(diemChuan, diemThi1, diemThi2, diemThi3, khuVuc, doiTuong);

  const diemTong =
    diemThi1 +
    diemThi2 +
    diemThi3 +
    diemKhuVuc(khuVuc) +
    diemDoiTuong(doiTuong);
  //   console.log(diemTong);

  document.getElementById(
    "bt1__tongDiem"
  ).innerHTML = `Tổng điểm đạt được: ${diemTong}`;

  if (isFail(diemThi1, diemThi2, diemThi3) || diemTong < diemChuan) {
    document.getElementById("bt1__ketQua").innerHTML = "Kết quả: Rớt";
  } else {
    document.getElementById("bt1__ketQua").innerHTML = "Kết quả: Đậu";
  }
});

const isFail = (...nums) =>
  nums.filter((val) => val == 0).length > 0 ? true : false;

const diemKhuVuc = (khuVucDuThi) => {
  const khuVuc = khuVucDuThi.toUpperCase();

  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    case "X":
      return 0;
  }
};

const diemDoiTuong = (doiTuongDuThi) => {
  switch (doiTuongDuThi) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    case 0:
      return 0;
  }
};
