function appendToInput(value) {
   const input = document.getElementById('input');
   input.value += value;
 }
 
 function clearInput() {
   const input = document.getElementById('input');
   input.value = '';
 }
 
 function calculate() {
   const input = document.getElementById('input');
   const result = eval(input.value);
   input.value = result;
 }
 