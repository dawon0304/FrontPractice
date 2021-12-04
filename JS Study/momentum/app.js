const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    event.preventDefault();
   console.log(loginInput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);

// addEventListener의 첫 번째 인자는 이벤트이고, 이벤트와 관련된 함수에서 그 이벤트에 대한 정보를 함수의 첫 번째 인자에 저장해둔다. 그 정보 안에는 preventDefault라는 메소드가 있는데 이것은 브라우저가 submit 했을 때 새로고침이 안 되게 막는 역할 등을 한다.