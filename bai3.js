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

// Function to populate table with data
function populateTable(users) {
    var tableBody = document.querySelector('#userData tbody');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Iterate through each user and add a row to the table
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

// Call the function to fetch data and populate the table
fetchData();
