
'use strict';

let exchangeUnit = false;

function keyCheck(e) {
  if(e.keyCode == 13 || e.which == 13){
    converter();
    return false;
  } 
}

function converter() {
  const left_text = document.querySelector('#left-text');
  const right_text = document.querySelector('#right-text');

  if(exchangeUnit == false) {
    // 섭씨에서 화씨로 변환할 때 계산
    right_text.value = ((left_text.value * 1.8) + 32).toFixed(2);
  }
  else {
    // 화씨에서 섭씨로 변환할 때 계산
    right_text.value = ((left_text.value - 32) / 1.8).toFixed(2);
  }
   

}

function exchange() {
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
}

