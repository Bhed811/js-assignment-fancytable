const nextPageBut = document.getElementById('nextPage');
const prevPageBut = document.getElementById('prevPage');

document.addEventListener('DOMContentLoaded', function() {
    let openedPage = 1;  // Initialize current page
    const fetchData = (page) => {
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response => response.json())
            .then(data => {
                const users = data.data;
                const tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
                tableBody.innerHTML = '';  // Clear previous data
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
    };

    fetchData(openedPage);

    prevPageBut.addEventListener('click', () => {
        if (openedPage > 1) {
            openedPage -= 1;
            fetchData(openedPage);
        }
    });

    nextPageBut.addEventListener('click', () => {
        openedPage += 1; 
        fetchData(openedPage);
    });
});
