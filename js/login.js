var apiConnect = "https://moonlit-poetry-438713-c2.uc.r.appspot.com/"

const register = () =>{
    window.location.href="/login"
}


function loginFunction(errorMessage, inputUsername, inputPassword) {
    var getUsername = document.getElementById(inputUsername).value;
    var getPassword = document.getElementById(inputPassword).value;
    var inputMessage = document.querySelector(errorMessage);
    fetch(apiConnect + "auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: getUsername,
            password: getPassword
        }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw err; 
            });
        }
        return response.json(); 
    })
    .then(data => {
        if (data.result.authenticated) {
            alert("Đăng nhập thành công")
            window.location.href = "/home";
        }
    })
    .catch(error => {
        if (error.code === 40401 || error.code === 40101) {
            console.log(error.message);
            inputMessage.style.display = "block"
            inputMessage.textContent = error.message;
        } else {
            console.error('Lỗi xảy ra:', error);
            inputMessage.textContent = "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.";
        }
    });
}
