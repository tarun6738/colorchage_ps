const button = document.getElementById("btn");
const body= document.body;
const colors=['pink','blue','orange','green','yellow'];
button.addEventListener("click", changebackground);
function changebackground(){
  const colind =Math.floor(Math.random()*colors.length);
  body.style.backgroundColor = colors[colind]
}