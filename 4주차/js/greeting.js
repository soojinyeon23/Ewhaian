
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    //이 과정은 username이 local storage에 없으면 실행되는 과정인데 
    //결국 이 과정에서 local storage에 username 입력하고 마지막에 class의 hidden remove하고 
    //innerText 추가하는 건 같으니 함수로 작성
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} have a good day!`;
}
//반복되게 remove 후에 inntertext를 하고 있으니까 함수를 하나 따로 만듬

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    //유저의 이름을 변수에 저장 후에 변수 값이 null이면 hidden 설정된거 없애고 이름 submit
    //그렇게 해서 username을 local storage에 저장시킴
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //만약에 username이 이미 local storage에 있다면 hidden을 remove하고 username을 포함한 innerText 작성
    //show the greetings
    paintGreetings(savedUsername);
}