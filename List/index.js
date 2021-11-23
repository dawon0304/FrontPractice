// document.getElementById('listName').innerHTML = '우유';

const items = document.querySelector('.item');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');


function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    console.log(text);
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    // 4. 인풋을 초기화 한다.
}

addBtn.addEventListener('click', () => {
    onAdd();
});