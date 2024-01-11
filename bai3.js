const arr1 = ['JAN','FEB','MAR',"APR",'MAY']
let arr2;
arr2 = [...arr1];
const resultHTML = arr2.map(item => `<li>${item}</li>`).join('');
const arr = document.getElementById('arr');
arr.innerHTML = `<p>Arr:</p><ul>${resultHTML}</ul>`;
console.log(arr2);