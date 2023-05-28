const loginForm = document.querySelector("#login-form");
const loginInput1 = document.querySelector("#name");
const loginInput2 = document.querySelector("#student_number");
const greeting1 = document.querySelector("#greeting1");
const greeting2 = document.querySelector("#greeting2");

const savedUsername = localStorage.getItem("username")
const savedStudent_number = localStorage.getItem("student_number")

///1번쨰
if (savedUsername === null){ ////저장된 정보가 없으면
  loginForm.classList.remove("hidden"); ///hidden 클래스를 제거
  loginForm.addEventListener("submit", onLoginSubmit); ///submit 이벤트가 발생하면 on함수 실행
} else {
  paintGreetings1(savedUsername)
  paintGreetings2(savedStudent_number) ///아니면 저장된 이름으로 pain~~함수 실행
}

////2번쨰
function onLoginSubmit(event) {
  event.preventDefault(); ///새로고침 없게 만들기
  loginForm.classList.add("hidden") ;  ///로그인 폼 안보이게하기

  const username = loginInput1.value;  ///이름
  const student_number = loginInput2.value;  ///학번

  localStorage.setItem("username", username);  ///이름저장
  localStorage.setItem("student_number",student_number) ///학번저장
  paintGreetings1(username); ///이름 출력
  paintGreetings2(student_number); ///학번출력
  removeBtn.classList.remove("hidden")
}

/// 이름 학번 출력하는 함수
function paintGreetings1(username){
  greeting1.innerText = `반갑습니다 ${username}님`;
  greeting1.classList.remove("hidden");
}

function paintGreetings2(student_number){
  greeting2.innerText = `학번은 ${student_number}입니다`;
  greeting2.classList.remove("hidden");
}


///정보 제거 하는 함수
const removeBtn = document.querySelector("#remove_storage");

function removeStorage() {
localStorage.removeItem("username");
localStorage.removeItem("student_number");
removeBtn.classList.add("hidden")
window.location.reload();

}

removeBtn.addEventListener("click", removeStorage);

