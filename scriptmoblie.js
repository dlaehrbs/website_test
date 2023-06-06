




///로그인 정보 저장 변수
const loginForm = document.querySelector("#login");

const loginInput1 = document.querySelector("#name");
const loginInput2 = document.querySelector("#student_number");
const loginInput3 = document.querySelector("#seat_number");



////텍스트 출력 변수
const greeting1 = document.querySelector("#greeting1");
const greeting2 = document.querySelector("#greeting2");
const greeting3 = document.querySelector("#greeting3");
const greeting4 = document.querySelector("#greeting4");

const information = document.querySelector("#infor")

////저장된 정보 호출 변수
const savedUsername = localStorage.getItem("username")
const savedStudent_number = localStorage.getItem("student_number")
const savedSeat_number = localStorage.getItem("seat_number")
const removeBtn = document.querySelector("#remove_storage");




///1번쨰
if (savedUsername === null){ ////저장된 정보가 없으면
    information.classList.add("hidden")
    loginForm.classList.remove("hidden"); ///hidden 클래스를 제거
    loginForm.addEventListener("submit", onLoginSubmit); ///submit 이벤트가 발생하면 on함수 실행
    
} else {
  paintGreetings1(savedUsername)
  paintGreetings2(savedStudent_number) ///아니면 저장된 이름으로 pain~~함수 실행
  paintGreetings3(savedSeat_number)

  loginForm.classList.add("hidden");
  removeBtn.classList.remove("hidden")  /// 정보제거버튼의 hidden 클래스를 제거
  information.classList.remove("hidden")  /// 로그인폼의 hidden 클래스를 제거
  greeting4.innerText = "반드시 캡쳐해주세요"
}




////2번쨰
function onLoginSubmit(event) {
  event.preventDefault(); ///새로고침 없게 만들기
  loginForm.classList.add("hidden") ;  ///로그인 폼 안보이게하기

  const username = loginInput1.value;  ///이름
  const student_number = loginInput2.value;  ///학번
  const seat_number = loginInput3.value; ///자리번호



  localStorage.setItem("username", username);  ///이름저장
  localStorage.setItem("student_number",student_number) ///학번저장
  localStorage.setItem("seat_number",seat_number) ///자리번호 저장

  paintGreetings1(username); ///이름 출력
  paintGreetings2(student_number); ///학번출력
  paintGreetings3(seat_number); //자리번호 출력

  removeBtn.classList.remove("hidden") ///뒤로가기 버튼 보이게 하기
  information.classList.remove("hidden") ///학번 이름 자리번호 보이게하기
  greeting4.innerText = "반드시 캡쳐해주세요"

  const SEAT_NUMBER = seat_number.toUpperCase(); /// 자리번호 입력값을 대문자로 바꾸기
  seatInformtion(SEAT_NUMBER)   ///대문자로 바뀐 값으로 seatInformtion함수 실행

  

}


/// 자리 색깔 바꾸기 함수
function seatInformtion(SEAT_NUMBER){
  
  const seatInformtion = document.getElementById(SEAT_NUMBER)

  if (seatInformtion.classList.contains("occupiedSeat")) {
    alert("예약된 자리입니다");
    localStorage.removeItem("username");
    localStorage.removeItem("student_number");
    localStorage.removeItem("seat_number");
    window.location.reload();
  } else{
    seatInformtion.classList.remove("seat")
    seatInformtion.classList.add("selectedSeat")
  }

}




/// 이름 학번 자리번호 출력하는 함수

function paintGreetings1(username){
  greeting1.innerText = `이름 : ${username}`;
  greeting1.classList.remove("hidden");
}

function paintGreetings2(student_number){
  greeting2.innerText = `학번 : ${student_number}`;
  greeting2.classList.remove("hidden");
}

function paintGreetings3(seat_number){
  greeting3.innerText = `자리번호 : ${seat_number}`;
  greeting3.classList.remove("hidden");
}




///정보 제거하는 함수

function removeStorage() {
localStorage.removeItem("username");
localStorage.removeItem("student_number");
localStorage.removeItem("seat_number");

removeBtn.classList.add("hidden")
window.location.reload();

}

removeBtn.addEventListener("click", removeStorage);




