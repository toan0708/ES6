const source =[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
const resultHTML = arr.map(item => `<li>${item}</li>`).join('');
const sourceHTML = source.map(item => `<li>${item}</li>`).join('');
const a = document.getElementById('arr');
const b = document.getElementById('source');
a.innerHTML = `<p>Arr:</p><ul>${resultHTML}</ul>`;
b.innerHTML = `<p>source:</p><ul>${sourceHTML}</ul>`;

// console.log(arr); //ket quả mong muốn [3,4,5,6,7,8,9,10]
// console.log(source);//Kết quả mong muốn [1,2,3,4,5,6,7,8,9,10]