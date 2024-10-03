async function fetchUsers() {
    console.log("Fetching data .... ");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        console.log(`Name: ${data[i].name}, Email: ${data[i].email}`);
    }

    console.log(data);
}

fetchUsers();