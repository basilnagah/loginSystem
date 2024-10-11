let signEmail = document.querySelector('#signEmail')
let signPass = document.querySelector('#signPass')
let ErrorMsg = document.querySelector('#ErrorMsg')
let loginButton = document.querySelector('button')
let userList = []

if (localStorage.getItem('userList')) {
    userList = JSON.parse(localStorage.getItem('userList'))
}

function login() {

    if (isEmpty() != true) {

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email == signEmail.value && userList[i].pass == signPass.value) {
                ErrorMsg.innerHTML = ''
                window.location.href='home.html'
                localStorage.setItem('userName' , userList[i].name)
            }else{
                ErrorMsg.innerHTML = 'email or password is incorrect'

            }
        }

    }
}


function isEmpty() {
    if (signEmail.value == '' || signPass.value == '') {

        ErrorMsg.innerHTML = 'all input is required'
        return true

    }
}




loginButton.addEventListener('click', login)