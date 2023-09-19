import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const header = document.querySelector("header");
header.style.overflowY = "scroll";

const h1 = document.querySelector("h1");
h1.classList.add("w15ch", "break-word");

//create h2key and insert before main content
const h2KeyCode = document.createElement("h2");
h2KeyCode.setAttribute("width", "100%");
h2KeyCode.classList.add("red");

h2KeyCode.classList.add("break-word");
h2KeyCode.style.width = "100%";

document
  .querySelector(".content-section")
  .insertAdjacentElement("beforebegin", h2KeyCode);

//create h2wheel and insert  before main content
const h2Wheel = document.createElement("h2");
h2Wheel.setAttribute("width", "100%");
h2Wheel.classList.add("purple");
document
  .querySelector(".content-section")
  .insertAdjacentElement("beforebegin", h2Wheel);

//create input and insert  before main content
const input = document.createElement("input");
input.style.width = "100%";
input.style.padding = "0.5em";
input.style.fontSize = "2em";

document
  .querySelector(".content-section")
  .insertAdjacentElement("beforebegin", input);

// h1.setAttribute("max-width", "15ch");
// document
//   .querySelector(".main-navigation")
//   .setAttribute("height", "min-content");

function hMouseOver(e) {
  e.target.classList.add("pink");
}

function hMouseOut(e) {
  e.target.classList.remove("pink");
}

function hKeyDown(e) {
  switch (e.key) {
    case "Delete":
      h2KeyCode.textContent = "";
      h2Wheel.textContent = "";
      h1.textContent = "";
      cntWheel = 0;
      break;
    case "Backspace":
      h2KeyCode.textContent = h2KeyCode.textContent.slice(0, -1);
      h1.textContent = h1.textContent.slice(0, -1);
      break;
    default:
      function validation(c) {
        var valid =
          (c > 47 && c < 58) || // number keys
          c == 32 ||
          c == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
          (c > 64 && c < 91) || // letter keys
          (c > 95 && c < 112) || // numpad keys
          (c > 185 && c < 193) || // ;=,-./` (in order)
          (c > 218 && c < 223); // [\]' (in order)

        return valid;
      }

      if (validation(e.keyCode)) {
        h2KeyCode.textContent += e.key;
        h1.textContent += e.key;
      }
      break;
  }
  //   console.log(keyCode);
}

let cntWheel = 0;
function hWheel(e) {
  e.preventDefault();
  e.target.classList.add("move");

  setTimeout(() => {
    e.target.classList.remove("move");
  }, 100);
  h2Wheel.textContent = ++cntWheel;
}

function hLoad(e) {
  alert("Load Complete");
}

function hSelect(e) {
  e.target.classList.add("orange");
  //console.log("start:", e.target.selectionStart, "end:", e.target.selectionEnd);
  setTimeout(() => {
    e.target.classList.remove("orange");
  }, 5000);
}

function hResize() {
  document.body.classList.toggle("clr-bg-blue");
}

function hFocus(e) {
  const str = e.target.value;
  e.target.value = "FOCUS EVENT!!!!!!";

  setTimeout(() => {
    e.target.value = str;
  }, 400);
}

function hDoubleClick(e) {
  e.target.classList.toggle("border");
}

document.querySelectorAll(".text-content").forEach((element) => {
  element.addEventListener("mouseover", hMouseOver);
  element.addEventListener("mouseout", hMouseOut);
});

document.addEventListener("keydown", hKeyDown);

const imgList = document.querySelectorAll("img");
imgList.forEach((element) => {
  element.addEventListener("wheel", hWheel);
  element.addEventListener("dblclick", hDoubleClick);
});

input.addEventListener("select", hSelect);
input.addEventListener("focus", hFocus);
window.addEventListener("resize", hResize);
window.addEventListener("load", hLoad);
