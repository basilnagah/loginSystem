let userName = document.querySelector('#userName')
let userEmail = document.querySelector('#userEmail')
let userPass = document.querySelector('#userPass')
let ErrorMsg = document.querySelector('#ErrorMsg')
let successMsg = document.querySelector('#successMsg')
let signButton = document.querySelector('button')
let userList = []

if (localStorage.getItem('userList')) {
    userList = JSON.parse(localStorage.getItem('userList'))
}

function register() {

    if (isEmpty() != true) {

        if (isExist() != true) {

            let user = {
                name: userName.value,
                email: userEmail.value,
                pass: userPass.value,
            }
            userList.push(user)
            localStorage.setItem('userList', JSON.stringify(userList))
            clear()
            ErrorMsg.innerHTML = ''
            successMsg.innerHTML = 'registerd succesfully'
        }

    }
}

function clear() {
    userName.value = ''
    userEmail.value = ''
    userPass.value = ''
}
function isEmpty() {
    if (userName.value == '' || userEmail.value == '' || userPass.value == '') {

        ErrorMsg.innerHTML = 'all input is required'
        return true

    }
}
function isExist() {

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email == userEmail.value) {
            ErrorMsg.innerHTML = 'email already exist'
            return true
        }
    }

}



signButton.addEventListener('click', register)