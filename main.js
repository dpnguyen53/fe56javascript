console.log("Hello Cybersoft");

/**
 * Biến
 */
//Number String
var username = "Dinh Phuc Nguyen";
var address = "112 Cao Thang";
//Number
var age = 18;
//Boolean
var status = false;
//Null
var numberStudent = null;
//undefined
var people;

var firstName = "Dinh";
var last_Name = "Nguyen";

var lop = "FE56";

// console.log("ten la: " + username);
// console.log("dia chi: " + address);
// console.log("ten la: " + username, "dia chi: " + address);

//Hoisting
console.log("fullname: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin: ", isLogin);

const PI = 3.14;

/**
 * Câu lệnh điều kiện
 * == so sánh giá trị
 * === so sánh giá trị & kiểu dữ liệu
 */
if (1 === "1") {
  console.log("DK dung");
} else {
  console.log("DK sai");
}

// DK ? "Dung" : "Sai"
1 === "1" ? console.log("DK dung") : console.log("DK sai");

var btA = true;
var btB = false;
console.log("Ket qua &&:", btA && btB);
console.log("Ket qua ||:", btA || btB);
console.log("Phu dinh cua btA:", !btA);

switch (0) {
  case 0:
    console.log("Day la so 0");
    break;
  case 1:
    console.log("Day la so 1");
    break;
  case 2:
    console.log("Day la so 2");
    break;
  default:
    console.log("Khong xac dinh");
    break;
}

var list = ["Nguyen", "Tay", "Long", "Nam"];

/**
 * Vong lap
 * . 0 < 4
 * . 1 < 4
 * . 2 < 4
 * . 3 < 4
 * . 4 < 4
 */
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("tong la:", total);
var total2 = number_3 + number_4;
console.log("tong la:", total2);
var total3 = number_5 + number_6;

/**
 * Hàm
 *  - Hàm không có tham số
 *  - Hàm có tham số
 *  - Hàm không có giá trị trả về
 *  - Hàm có giá trị trả về
 */
// tinhTong();
// tinhTong34();

// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("sum la:", sum);
// }

// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("sum la:", sum);
// }

function tinhTong(a, b) {
  var sum = a + b;
  return sum;
}
// tinhTong(number_1, number_2);
// tinhTong(number_3, number_4);
// tinhTong(number_5, number_6);
// tinhTong(100, 10);

// var total2 = tinhTong(50, 50);
console.log("tong la: ", tinhTong(50, 50) + 100);

/**
 * (Bài tập) Tính điểm trung bình: toan, ly, hoa
 * dtb = (toan + ly + hoa) / 3;
 * Xếp loại:
 *  + 9 <= dtb <= 10 => Xuat sac
 *  + 8 <= dtb < 9 => Gioi
 *  + 7 <= dtb < 8 => Kha
 *  + 5 <= dtb < 7 => TB
 *  + Yeu
 * => tinhDTB(); xepLoai();
 */

function tinhDTB(toan, ly, hoa) {
  return (toan + ly + hoa) / 3;
}

function xepLoai(dtb) {
  var loai = "";
  if (9 <= dtb && dtb <= 10) {
    loai = "Xuat sac";
  } else if (8 <= dtb && dtb < 9) {
    loai = "Gioi";
  } else if (7 <= dtb && dtb < 8) {
    loai = "Kha";
  } else if (5 <= dtb && dtb < 7) {
    loai = "TB";
  } else {
    loai = "Yeu";
  }
  console.log("Loai la: ", loai);
}

var dtb = tinhDTB(9, 9, 9);
xepLoai(dtb);

/**
 * DOM
 */

var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

var _pText = document.getElementById("pText");
console.log(_pText.innerHTML);

/**
 * Event
 */

//Cach 1
// function eventClick() {
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// }

//Cach 2
// document.getElementById("btnClick").onclick = function () {
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// };

//Cach 3 - callback function
// document.getElementById("btnClick").addEventListener("click", function () {
//   var txtValue = document.getElementById("txtInput").value;
//   console.log(txtValue);
// });

function demoClick() {
  var txtValue = document.getElementById("txtInput").value;
  console.log(txtValue);
}

document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function () {
  document.getElementById("divContent").innerHTML = "Thay doi roi nhe!";
  document.getElementById("divContent").style.backgroundColor = "aqua";
  document.getElementById("divContent").style.fontSize = "40px";
  document.getElementById("divContent").style.color = "white";
});

document.getElementById("btnHide").addEventListener("click", function () {
  document.getElementById("divContent").style.display = "none";
});

document.getElementById("btnShow").addEventListener("click", function () {
  document.getElementById("divContent").style.display = "block";
});

document.getElementById("btnDisable").addEventListener("click", function () {
  document.getElementById("btnNhanEmDi").disabled = true;
});

document
  .getElementById("btnRemoveDisable")
  .addEventListener("click", function () {
    // document.getElementById("btnNhanEmDi").disabled = false;
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");
  });

document.getElementById("btnBulbOn").addEventListener("click", function () {
  document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
});

document.getElementById("btnBulbOff").addEventListener("click", function () {
  document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
});

document.getElementById("btnLogin").addEventListener("click", function () {
  /**
   * lấy thông tin username & password từ người dùng nhập vào
   */
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;

  if (username === "cybersoft" && password === "cybersoft") {
    // changeColor("Login thanh cong", "green");
    changeColor2("Login thanh cong", "alert alert-success");
  } else {
    // changeColor("Login that bai", "red");
    changeColor2("Login that bai", "alert alert-danger");
  }
});

function changeColor(mess, bg) {
  document.getElementById("txtThongBao").innerHTML = mess;
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").style.backgroundColor = bg;
  document.getElementById("txtThongBao").style.color = "white";
}

function changeColor2(mess, classes) {
  document.getElementById("txtThongBao").style.display = "block";
  document.getElementById("txtThongBao").innerHTML = mess;
  document.getElementById("txtThongBao").className = classes;
}

/**
 * DOM TagName
 */
var tagName = document.getElementsByTagName("button")[1];

console.log(tagName);

/**
 * DOM className
 */
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

/**
 * DOM querySelector
 */
var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);

/**
 * DOM querySelectorAll
 */
var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);

document
  .querySelector("#btnTinhTienTip")
  .addEventListener("click", function () {
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNguoi = document.getElementById("txtSoNguoi").value;

    /**
     * CT: txtTongTien * txtPhanTramTip / 100 / txtSoNguoi
     */
    var total = (txtTongTien * txtPhanTramTip) / 100 / txtSoNguoi;

    document.getElementById("txtThongBaoTienTip").innerHTML =
      total + "$ mỗi người";
    document.getElementById("txtThongBaoTienTip").className =
      "alert alert-danger d-block";
  });
