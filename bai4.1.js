
    function fetchData() {
        fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
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
            var avatarCell = row.insertCell(2);
            var createdAtCell = row.insertCell(3);

            idCell.textContent = user.id;
            avatarCell.innerHTML = '<img src="' + user.avatar + '" alt="Avatar" style="width:50px;height:50px;">';
            nameCell.textContent = user.name;
            createdAtCell.textContent = user.createdAt;
        });
    }
    fetchData();


