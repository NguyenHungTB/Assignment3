"use strict";
document
  .getElementById("btn-Submit")
  .addEventListener("click", function checkEmail() {
    const emailInput = document.getElementById("email").value;
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //kiem tra dinh dang email
    if (regex.test(emailInput)) {
      document.getElementById("emailconfirm").remove();
      document.querySelector(".mota").style.display = "block";
    } else {
      alert("Email không đúng định dạng.");
    }
  });
//an, hien thong tin kinh nghiem
document.querySelector(".class1a").addEventListener("mouseover", mouseOver);
document.querySelector(".class1a").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".class1a").style.color = "red";
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn1").addEventListener("click", activeInfo);
  document
    .getElementById("btn-viewless1")
    .addEventListener("click", deActiveInfo);
}

function mouseOut() {
  document.querySelector(".class1a").style.color = "black";
  document.getElementById("btn1").style.display = "none";
}
function activeInfo() {
  document.getElementById("btn1").style.display = "none";
  document.querySelector(".class3a").style.display = "block";
}
function deActiveInfo() {
  document.querySelector(".class3a").style.display = "none";
}
//an, hien thong tin hoc van
document.querySelector(".class1b").addEventListener("mouseover", mouseOver1);
document.querySelector(".class1b").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.querySelector(".class1b").style.color = "red";
  document.getElementById("btn2").style.display = "block";
  document.getElementById("btn2").addEventListener("click", activeInfo1);
  document
    .getElementById("btn-viewless2")
    .addEventListener("click", deActiveInfo1);
}

function mouseOut1() {
  document.querySelector(".class1b").style.color = "black";
  document.getElementById("btn2").style.display = "none";
}
function activeInfo1() {
  document.getElementById("btn2").style.display = "none";
  document.querySelector(".class3b").style.display = "block";
}
function deActiveInfo1() {
  document.querySelector(".class3b").style.display = "none";
}
//an, hien thong tin hoat dong
document.querySelector(".class1c").addEventListener("mouseover", mouseOver2);
document.querySelector(".class1c").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.querySelector(".class1c").style.color = "red";
  document.getElementById("btn3").style.display = "block";
  document.getElementById("btn3").addEventListener("click", activeInfo2);
  document
    .getElementById("btn-viewless3")
    .addEventListener("click", deActiveInfo2);
}

function mouseOut2() {
  document.querySelector(".class1c").style.color = "black";
  document.getElementById("btn3").style.display = "none";
}
function activeInfo2() {
  document.getElementById("btn3").style.display = "none";
  document.querySelector(".class3c").style.display = "block";
}
function deActiveInfo2() {
  document.querySelector(".class3c").style.display = "none";
}
//an, hien thong tin so thich
document.querySelector(".class1d").addEventListener("mouseover", mouseOver3);
document.querySelector(".class1d").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.querySelector(".class1d").style.color = "red";
  document.getElementById("btn4").style.display = "block";
  document.getElementById("btn4").addEventListener("click", activeInfo3);
  document
    .getElementById("btn-viewless4")
    .addEventListener("click", deActiveInfo3);
}

function mouseOut3() {
  document.querySelector(".class1d").style.color = "black";
  document.getElementById("btn4").style.display = "none";
}
function activeInfo3() {
  document.getElementById("btn4").style.display = "none";
  document.querySelector(".class3d").style.display = "block";
}
function deActiveInfo3() {
  document.querySelector(".class3d").style.display = "none";
}
//an, hien thong tin ki nang
document.querySelector(".class1e").addEventListener("mouseover", mouseOver4);
document.querySelector(".class1e").addEventListener("mouseout", mouseOut4);

function mouseOver4() {
  document.querySelector(".class1e").style.color = "red";
  document.getElementById("btn5").style.display = "block";
  document.getElementById("btn5").addEventListener("click", activeInfo4);
  document
    .getElementById("btn-viewless5")
    .addEventListener("click", deActiveInfo4);
}

function mouseOut4() {
  document.querySelector(".class1e").style.color = "black";
  document.getElementById("btn5").style.display = "none";
}
function activeInfo4() {
  document.getElementById("btn5").style.display = "none";
  document.querySelector(".class3e").style.display = "block";
}
function deActiveInfo4() {
  document.querySelector(".class3e").style.display = "none";
}
//an, hien thong tin ngon ngu
document.querySelector(".class1f").addEventListener("mouseover", mouseOver5);
document.querySelector(".class1f").addEventListener("mouseout", mouseOut5);

function mouseOver5() {
  document.querySelector(".class1f").style.color = "red";
  document.getElementById("btn6").style.display = "block";
  document.getElementById("btn6").addEventListener("click", activeInfo5);
  document
    .getElementById("btn-viewless6")
    .addEventListener("click", deActiveInfo5);
}

function mouseOut5() {
  document.querySelector(".class1f").style.color = "black";
  document.getElementById("btn6").style.display = "none";
}
function activeInfo5() {
  document.getElementById("btn6").style.display = "none";
  document.querySelector(".class3f").style.display = "block";
}
function deActiveInfo5() {
  document.querySelector(".class3f").style.display = "none";
}
