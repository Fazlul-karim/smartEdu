let divError = document.getElementById("error")
let userName, password
let flag = false

function handleSubmit(event){
    //Retrieve the object from storage
    let retrievedUsers = JSON.parse(localStorage.getItem('users'));
    event.preventDefault();
    userName = document.getElementById("usrname").value;
    password = document.getElementById("psw").value;
    for (let i = 0; i < retrievedUsers.length; i++) {
        if (retrievedUsers[i].username === userName && retrievedUsers[i].password === password) {
            flag = true;
            window.location.replace("index.html");

        }
    }
    if(!flag){
        divError.style.display = "flex"
    }

}