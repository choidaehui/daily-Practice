
'use strict';

let exchangeUnit = false;
// 섭씨에서 화씨로 변환하는 기본값
// 인치에서 센티미터로 변환하는 기본값
// 미터제곱에서 평으로 변환하는 기본값

function keyCheck(e) {
  if(e.keyCode == 13 || e.which == 13){
    converter();
    // 엔터키를 누를 때 converter()함수 실행
    return false;
    // keypress일 때 브라우저가 할 기본 동작 취소
   } 
}

function converter() {
  const left_text = document.querySelector('#left-text');
  const right_text = document.querySelector('#right-text');
  const selectOption = document.querySelector('#selectoption');
  const selectedOption = selectOption.options[selectOption.selectedIndex].value;
  // 옵션에서 선택된 항목의 value 값을 변수에 저장
  if(selectedOption === "option1") {   
    if(exchangeUnit == false) {
      // 섭씨에서 화씨로 변환할 때 계산
      right_text.value = ((left_text.value * 1.8) + 32).toFixed(2);
    }
    else {
      // 화씨에서 섭씨로 변환할 때 계산
      right_text.value = ((left_text.value - 32) / 1.8).toFixed(2);
    }
  }
  else if(selectedOption === "option2") {
    if(exchangeUnit == false) {
      right_text.value = (left_text.value * 2.54).toFixed(2);
      // 인치에서 센티미터로 변환할 때 계산 
    }
    else {
      right_text.value = (left_text.value / 2.54).toFixed(2);
       // 센티미터에서 인치로 변환할 때 계산 
    }

  }
  else if(selectedOption === "option3") {
    if(exchangeUnit == false) {
      right_text.value = (left_text.value / 3.3058).toFixed(2);
      // 미터제곱에서 평으로 변환할 때 계산
    }
    else {
      right_text.value = (left_text.value * 3.3058).toFixed(2);
      // 평에서 미터제곱으로 변환할 때 계산 
    }
  } 
}

function exchange() {
  // 섭씨를 화씨로 화씨를 섭씨로 순서를 바꾸는 함수
  const s_unit = document.querySelector('#s-unit').innerHTML;
  const f_unit = document.querySelector('#f-unit').innerHTML;
  
  if(exchangeUnit == false) {
    document.querySelector('#s-unit').innerHTML = f_unit;
    document.querySelector('#f-unit').innerHTML = s_unit;
    exchangeUnit = true; 
  }
  else {
    document.querySelector('#f-unit').innerHTML = s_unit;
    document.querySelector('#s-unit').innerHTML = f_unit;
    exchangeUnit = false; 
  }
  
  document.querySelector('#left-text').value = "";
  document.querySelector('#right-text').value = "";
  // 기본값 빈 문자열로 만듦
}

function option() {
  const selectOption = document.querySelector('#selectoption');
  const selectedOption = selectOption.options[selectOption.selectedIndex].value;
  // 옵션에서 선택된 항목에 따라 텍스트에 단위가 바뀜
  if(selectedOption === "option1") {   
    document.querySelector('#s-unit').innerHTML = '&#8451;'
    document.querySelector('#f-unit').innerHTML = '&#8457;'
  }
  else if(selectedOption === "option2") {
    document.querySelector('#s-unit').innerHTML = 'in'
    document.querySelector('#f-unit').innerHTML = 'cm'
  }
  else if(selectedOption === "option3") {
    document.querySelector('#s-unit').innerHTML = '&#13217;'
    document.querySelector('#f-unit').innerHTML = '평'
  } 
  document.querySelector('#left-text').value = "";
  document.querySelector('#right-text').value = "";
  // 기본값 빈 문자열로 만듦  
}

