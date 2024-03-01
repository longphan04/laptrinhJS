/* Bai 1: Thu */
let y = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
let x = 5;

switch (x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Ngày thứ " + x + " là: " + y[x - 1]);
        break;
    default:
        console.log("Giá trị không hợp lệ");
}

/* Bai 2: So nguyen to */
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
let numToCheck = 13;
if (isPrime(numToCheck)) {
    console.log(numToCheck + " là số nguyên tố.");
} else {
    console.log(numToCheck + " không là số nguyên tố.");
}

/* Bai 3: Matrix */
var a = [[1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1]];
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
        document.write(a[i][j] + "");
    }
    document.write("</br>");
}

/* Bai 4 */
