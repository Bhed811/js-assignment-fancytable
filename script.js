document.addEventListener('DOMContentLoaded', function() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            const users = data.data;
            const tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
            users.forEach(user => {
                let row = tableBody.insertRow();
                let cellId = row.insertCell(0);
                let cellAvatar = row.insertCell(1);
                let cellFirstName = row.insertCell(2);
                let cellLastName = row.insertCell(3);
                let cellEmail = row.insertCell(4);
                
                cellId.innerHTML = user.id;
                cellAvatar.innerHTML = `<img src="${user.avatar}" class="avatar-img"/>`;
                cellFirstName.innerHTML = user.first_name;
                cellLastName.innerHTML = user.last_name;
                cellEmail.innerHTML = user.email;
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});
    