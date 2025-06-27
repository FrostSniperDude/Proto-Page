document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mjtvoolokpjzqrxjzmti.supabase.co/functions/v1/database-access', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            alert(JSON.parse(xhr.responseText).message)
        } else {
            alert(JSON.parse(xhr.responseText).error)
        }
    }
    };

    const data = JSON.stringify({
    requestType: "signup",
    username: username,
    password: password
    });

    xhr.send(data);  // Send the request with the data
});
