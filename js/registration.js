let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let submitButton = document.getElementById("submit")
let divError = document.getElementById("error")
let divSuccess = document.getElementById("success")

let flag_1 = false, flag_2 = false, flag_3 = false, flag_4 = false;
let users = [];
let temp = {}


// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    flag_1 = true
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    flag_2 = true
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    flag_3 = true
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    flag_4 = true
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if (flag_1 && flag_2 && flag_3 && flag_4) {
    submitButton.disabled = false;
  }
}
function handleSubmit(event) {
  let retrievedUsers = localStorage.getItem('users');
  event.preventDefault();
  // Put the object into storage
  temp.username = document.getElementById("usrname").value;
  console.log(document.getElementById("usrname").value);
  temp.password = document.getElementById("psw").value;
  console.log(temp);
  if (!retrievedUsers) {
    //add user name validation here
    users.push(temp)
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
    divSuccess.style.display = "flex";
    divError.style.display = "none"
  }
  else {
    
    users = JSON.parse(retrievedUsers);
    console.log(users);
    console.log(temp.username);
    
    console.log(typeof(users[users.length - 1]));
    console.log(typeof(temp.username));
    //add user name validation here
    for (let i = 0; i < users.length; i++) {
      let name =  users[i].username
      console.log((typeof(name)));
      console.log(name === temp.username)
      if (users[i].username === temp.username) {
        divSuccess.style.display = "none";
        divError.style.display = "flex";
        return
      }
    }
    localStorage.removeItem("users");
    users.push(temp)
    localStorage.setItem('users', JSON.stringify(users));
    divSuccess.style.display = "flex";
    divError.style.display = "none"
  }

}