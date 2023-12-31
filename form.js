let a=document.getElementById("sign-upform");
let b=document.getElementById("hdr");
let e=document.querySelector('form');
let element=document.getElementById("we");
element.addEventListener("click",enable);
//check function
function myFunction() {
    var x = document.getElementById("passw");
    var y= document.getElementById('radio')
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
      y.checked=false;

    }
  }
  //animation enable function
  function enable(){
    a.style.animationPlayState="running";
    b.style.animationPlayState="running";
    document.body.style.backgroundColor = "#b7fa42";

  }
 function reve(){
  a.style.animation="side 2s ease-in-out 0.2s 1 reverse backwards";
  b.style.animation="side-side 2s ease-in-out 0.2s 1 reverse backwards"
  document.body.style.backgroundColor = "aqua";
 }