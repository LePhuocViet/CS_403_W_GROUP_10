var apiConnect = "https://moonlit-poetry-438713-c2.uc.r.appspot.com"


const registerFunction = () => {
    const getName = document.querySelector("#name").value
    const getSex = document.querySelector("#sex").value
    const getUsername = document.querySelector("#username").value
    const getPassword = document.querySelector("#password").value
    const getLanguage = document.querySelector("#language").value
    const getRepassword = document.querySelector("#repassword").value


    console.log(getName)
    console.log(getSex)
    console.log(getUsername)
    console.log(getPassword)
    console.log(getLanguage)
    console.log(getRepassword)


    fetch(apiConnect+"/users",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: getName,
            language: getLanguage,
            sex: getSex,
            email: Math.random() * 1000000,
            username: getUsername,
            password: getPassword,
            repassword: getRepassword
        }),
    })
    .then(response =>{
        if(!response.ok || response.status !== 201){
            return response.json().then(err =>{
                throw err;
            });
        }
        return response.json();
    })
    .then(data =>{
        console.log(data.result); 
        if(data.result){
           alert("Dang ky thanh cong")
           window.location.href = "/login.html";
        }
     
    })
    .catch(error => {
        if(error.code === 40001 ){
            const errorMessage = document.querySelector(".form__input-username .error__message")
            errorMessage.style.display = "block"
            errorMessage.textContent = error.message 
        } else if (error.code === 40101){
            const errorMessage = document.querySelector(".form__input-repassword .error__message")
            errorMessage.style.display = "block"
            errorMessage.textContent = error.message
        } 
    })



}