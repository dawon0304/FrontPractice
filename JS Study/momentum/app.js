const title = document.querySelector(".hello h1");
console.log(title);

// 이는 hello란 class내부에 있는 h1을 가지고 올 수 있다는 것을 의미한다.

// querySeloector에는 hello가 class name 이라는 것과 그안의 h1을 명시해줘야 하기 때문에  querySelctor ( ".hello h1" );  식으로 써줘야한다.

//querySeloector는 첫번째로 검색된 elelment만 반환해준다.
//만약 조건에 맞는 모든 element를 찾고싶다면, querySelectorAll을 사용하면된다.
