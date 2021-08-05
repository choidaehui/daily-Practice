
function loadItems() {
  return fetch('./data/data.json')
  // fetch를 통해 해당 경로의 data.json 파일에 접근
    .then(Response => Response.json())
    // .then을 통해 response을 받음
    // 받은 response를 json 형태로 변환
    .then(JSON => JSON.items);
    // json에 있는 items만 받아오기
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  // items 객체들을 item별로 join 해서 화면에 보여 줌 
  // map() 함수는 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환 값으로
  // 새로운 배열을 만듦
}

function createHTMLString(item) {
  // item을 HTMLstring으로 변경
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>  
  `; 
  // 억음부호(`)는 backtick이라 불리고 억음부호를 사용한 문자열을 템플릿 리터럴이라고 함
  // ${}(플레이스 홀더)를 사용해 변수를 넣고, 따옴표와 더하기 기호를 사용 안 함

}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter(item => item[key] === value));
  // 클릭된 요소의 value와 item배열의 key값이 같은 요소만 추출
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.btns');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

loadItems()
 .then(items => {
    displayItems(items);
    setEventListeners(items);
 })
 .catch(console.log);