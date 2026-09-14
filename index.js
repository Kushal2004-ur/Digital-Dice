const one = document.getElementById("label");
const sec = document.getElementById("mybtn");
const max = 6;
const min = 1;
let result;

sec.onclick=function(){
  result=Math.floor(Math.random()*max)+min;
  one.textContent=result
}
