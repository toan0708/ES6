fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
  response.json().then(function(data){
    console.log(data);
  })
})
.catch(function(error){
  console.log(error);
})

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error fetching data:', error));
}

function populateTable(users) {
    var tableBody = document.querySelector('#userData tbody');
    tableBody.innerHTML = '';
    users.forEach(function (user) {
        var row = tableBody.insertRow();
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var usernameCell = row.insertCell(2);
        var emailCell = row.insertCell(3);

        idCell.textContent = user.id;
        usernameCell.textContent = user.username;
        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
    });
}
fetchData();
