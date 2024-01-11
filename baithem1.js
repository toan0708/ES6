// (arr) => `<ul>${arr.map((obj) => li(obj)).join('\n')}</ul>`;
//  Đoạn mã này có nghĩa :
//  arr.map((obj) => li(obj)) Hàm map được gọi trên mảng arr
// .join('\n') Mảng mới có từng phần tử <li>
/* <ul>${...}</ul> Kết quả chuỗi HTML từ bước trước được nhúng vào trong thẻ <ul> và </ul> */

// VÍDU
const traicay = ["Apple", "Banana", "Orange"];
const listItems = traicay.map((traicay) => `<li>${traicay}</li>`);
const ulElement = `<ul>${listItems.join('\n')}</ul>`;
console.log(ulElement);