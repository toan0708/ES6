document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    fetch(apiUrl)
      .then(Response)
      .then(Data)
      .catch(Error);
    function Response(response) {
      if (!response.ok) {
        throw new Error('loi');
      }
      return response.json();
    }
  
    function Data({ data }) {
      createTable(data);
    }
  
    function Error(error) {
      console.error('loi data:', error);
    }
    function createTable(data) {
      const tableBody = document.getElementById('table-body');
      let count = 1;
      tableBody.innerHTML = '';
      data.forEach(({ Nation, Year, Population }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${count++}</td>
          <td>${Nation}</td>
          <td>${Year}</td>
          <td>${Population}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  });