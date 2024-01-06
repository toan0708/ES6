
 
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(function(response){
      response.json().then(function(data){
        console.log(data);
      })
    })
    .catch(function(error){
      console.log(error);
    })

    document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      createTable(data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  function createTable(data) {
    const tableBody = document.getElementById('table-body');
    let count = 1;
    tableBody.innerHTML = '';
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${count++}</td>
        <td>${item.Nation}</td>
        <td>${item.Year}</td>
        <td>${item.Population}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});





