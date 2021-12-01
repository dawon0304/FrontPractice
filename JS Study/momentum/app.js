const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    console.log("title was clicked!");    
}


title.addEventListener("click", handleTitleClick);
// 여기서 클릭 이벤트를 리슨하고, 이 클릭 이벤트가 발생하면, handleTitleClick이라는 함수가 동작하길 원한다.
// 이 handleTitleClick 함수를 실행하지 않게 하는것이 굉장히 중요하다.
// 실행시키고 싶다면 7라인 위에 handleTitleClick()을 추가한다. 그치만 우리는 곧바로 실행시키고 싶지 않지

// 내가 원하는 것은, handleTitleClick 함수를 자바스크립트에 넘겨주고, 
// 유저가 title을 click할 경우에 자바스크립트가 실행버튼을 대신 눌러주길 바라는 거다.


// 즉, 내가 직접 실행 버튼을 누르지 않고, 자바스크립트에 handleTitleClick 함수 이름을 넘겨줘서, 유저가 타이틀을 클릭할 경우에, 자바스크립트가 나 대신 실행버튼을 눌러주게 하는것을 만들꺼다.

// handleTitleClick() 특히 괄호!!를 추가함으로써 실행버튼을 누를 수 있다는 것 반드시 기억하기



// addEventListener ("listen하고싶은 event이름", event가 발생하면 호출할 function);