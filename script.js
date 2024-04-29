let n1;
let n2;
let n3;
let n4;
let n5;
let n6;

document.getElementById("roleta").onclick = function(){

 n1 = Math.floor(Math.random() * 60) + 1;
 n2 = Math.floor(Math.random() * 60) + 1;
 n3 = Math.floor(Math.random() * 60) + 1;
 n4 = Math.floor(Math.random() * 60) + 1;
 n5 = Math.floor(Math.random() * 60) + 1;
 n6 = Math.floor(Math.random() * 60) + 1;

  document.getElementById("num1").innerHTML = n1;
  document.getElementById("num2").innerHTML = n2;
  document.getElementById("num3").innerHTML = n3;
  document.getElementById("num4").innerHTML = n4;
  document.getElementById("num5").innerHTML = n5;
  document.getElementById("num6").innerHTML = n6;

}