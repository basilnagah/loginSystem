let welcomeMsg = document.querySelector('#welcome')
let logout = document.querySelector('#logout')
let userName = localStorage.getItem('userName')

function welcome(){

    if(  localStorage.getItem('userName') ){

        welcomeMsg.innerHTML = `welcome ${userName}`
    }else{
        window.location.href='index.html'
    }

}



logout.addEventListener('click' , function(){
    localStorage.removeItem('userName')
})