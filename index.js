/* Mô hình 3 khối
Input: Mảng lưu trữ cho người dùng nhập vào, tính toán theo yêu cầu của đề bài

Các bước xử lí: Lấy dữ liệu số người dùng nhập vào và lưu trữ rồi tính toán

Output: Đưa lên giao diện người dùng
*/

var arrSoTuNhien = [];
function themSoTuNhien() {
  var soN = document.getElementById("soN").value * 1;
  arrSoTuNhien.push(soN);
  document.getElementById("kq1").innerHTML = arrSoTuNhien;
}
document.getElementById("btn1").onclick = themSoTuNhien;
console.log(arrSoTuNhien);

// Tính Tổng
/** Mô hình 3 khối
 * Input: Dữ liệu mảng cũ, Tính tổng
 *
 * Các bước xử lí: Cộng tất cả các số có trong mảng mà người dùng thêm
 *
 * Output: Nhấn nút button in kết quả lên giao diện
 */
var tong = 0;
document.getElementById("btn2").onclick = function () {
  for (var i = 0; i < arrSoTuNhien.length; i++) {
    tong += arrSoTuNhien[i];
  }
  document.getElementById("kq2").innerHTML = tong;
};

// Đếm Số Nguyên dương
/** Mô Hình 3 Khối
 * Input: Mảng người dùng nhập
 *
 * Các bước xử lí: Lấy ra độ dài mảng
 *
 * Output: Nhấn nút button in kết quả lên giao diện
 *
 */
document.getElementById("btn3").onclick = function () {
  var doDai = arrSoTuNhien.length;
  document.getElementById("kq3").innerHTML =
    "Có " + doDai + " số nguyên dương trong mảng ";
};

// Tìm Số Nhỏ nhất
/** Mô Hình 3 Khối
 *  Input: Mảng người dùng nhập
 * 
 *  Các bước xử lí: Sắp xếp lại mảng, Lấy ra số đầu tiên
 * 
 *  Output: Nhấn button in kết quả lên giao diện
 */
document.getElementById("btn4").onclick = function () {
  var arrNewSoTuNhien = arrSoTuNhien.sort(function (a, b) {
    return a - b;
  });
  var soNhoNhat = arrNewSoTuNhien.shift();
  document.getElementById("kq4").innerHTML = soNhoNhat;
};

// Tìm Số Dương Nhỏ Nhất Trong mảng
/** Mô Hình 3 Khối
 *  Input: Mảng
 *  
 *  Các bước xử lí: - Dùng vòng lặp để lọc ra số dương
 *                  - Sắp xếp lại
 *                  - Lấy ra số đầu tiên
 * 
 *  Output: Nhấn button in kết quả lên giao diện 
 */
var soDuong = [];
function TimSoDuongNhoNhat() {
  for (i = 0; i < arrSoTuNhien.length; i++) {
    if (arrSoTuNhien[i] > 0) {
      soDuong.push(arrSoTuNhien[i]);
    }
    // console.log(soDuong);
  }
  var newSoDuong = soDuong.sort(function (a, b) {
    return a - b;
  });
  // console.log(newSoDuong);
  if (newSoDuong.length > 0) {
    var soDuongNhoNhat = Math.min(...newSoDuong);
    document.getElementById("kq5").innerHTML =
      "Số dương nhỏ nhất là: " + soDuongNhoNhat;
  } else {
    document.getElementById("kq5").innerHTML = "Không có số dương";
  }
}
document.getElementById("btn5").onclick = TimSoDuongNhoNhat;

//Tìm Số Chẵn Cuối Cùng Trong Mảng
/** Mô Hình 3 Khối
 *    Input: Mảng người dùng nhập 
 *    
 *    Các bước xử lí: Dùng vòng lặp để tìm số chẵn
 *                    Lấy ra số cuối cungf
 *    Output: Nhấn button in kết quả lên giao diện
 */
var soChan = [];
function TimSoChanCuoiCungTrongMang() {
  for (i = 0; i < arrSoTuNhien.length; i++) {
    if (arrSoTuNhien[i] % 2 == 0) {
      soChan.push(arrSoTuNhien[i]);
    }
  }
  if (soChan.length > 0) {
    var soChanCuoiCung = soChan.pop();
    document.getElementById("kq6").innerHTML =
      "Số chẵn cuối cùng là: " + soChanCuoiCung;
  } else {
    document.getElementById("kq6").innerHTML = "-1";
  }
  // console.log(soChanCuoiCung);
}
document.getElementById("btn6").onclick = TimSoChanCuoiCungTrongMang;

//Đổi Chỗ 2 Giá Trị Mảng Trong Vị trí
/** Mô Hình 3 Khối
 *  Input: Mảng
 *  Các bước xử lí: Dùng vòng lăp
 *  Output: Nhấn button in kết quả lên giao diện
 */
function DoiCho2GiaTri() {
  var viTriMot = parseInt(document.getElementById("viTriMot").value);
  var viTriHai = parseInt(document.getElementById("viTriHai").value);

  if (
    viTriMot < 0 ||
    viTriMot >= arrSoTuNhien.length ||
    viTriHai < 0 ||
    viTriHai >= arrSoTuNhien.length
  ) {
    document.getElementById("kq7").innerHTML = "Vị trí không hợp lệ";
    return;
  }

  var trungGian = arrSoTuNhien[viTriMot];
  arrSoTuNhien[viTriMot] = arrSoTuNhien[viTriHai];
  arrSoTuNhien[viTriHai] = trungGian;
  document.getElementById("kq7").innerHTML = arrSoTuNhien.join(",");
}
document.getElementById("btn7").onclick = DoiCho2GiaTri;

// Sắp Xếp Mảng Theo Thứ Tự Tăng Dần
function SapXepTangDan() {
  var sapXepTangDan = arrSoTuNhien.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("kq8").innerHTML = sapXepTangDan;
}
document.getElementById("btn8").onclick = SapXepTangDan;

// Tìm Số Nguyên Tố Đầu Tiên Trong Mảng
var soNguyenDauTien = [];
function SoNguyenToDauTien() {
  for (var i = 0; i < arrSoTuNhien.length; i++) {
    console.log(arrSoTuNhien[0]);
  }
  document.getElementById("kq9").innerHTML = arrSoTuNhien[0];
}
document.getElementById("btn9").onclick = SoNguyenToDauTien;

//Đếm Số Nguyên
var arrSoNguyen = [];

function ThemSoNguyen() {
  var soNguyen = document.getElementById("demSoNguyen").value * 1;
  var demSoNguyen = arrSoNguyen.push(soNguyen);
  document.getElementById("arrSoNguyen").innerHTML = arrSoNguyen;
  var doDaiSoNGuyen = arrSoNguyen.length - 1;
  document.getElementById("kq10").innerHTML =
    "Độ dài số nguyên = " + doDaiSoNGuyen;
}
document.getElementById("themSoNguyen").onclick = ThemSoNguyen;

// So Sánh Số Âm Dương
var arrAm = [];
var arrDuong = [];
function SoSanhAmDuong() {
  for (var i = 0; i < arrSoTuNhien.length; i++) {
    if (arrSoTuNhien[i] > 0) {
      arrDuong.push(arrSoTuNhien[i]);
    } else {
      arrAm.push(arrSoTuNhien[i]);
    }
    console.log(arrAm);
  }

  if (arrAm.length > arrDuong.length) {
    document.getElementById("kq11").innerHTML = "Số Âm > Số Dương";
  } else if (arrAm.length < arrDuong.length) {
    document.getElementById("kq11").innerHTML = "Số Âm < Số Dương";
  } else {
    document.getElementById("kq11").innerHTML = "Số Âm = Số Dương";
  }
}
document.getElementById("btn11").onclick = SoSanhAmDuong;
