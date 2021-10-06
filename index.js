let root = document.documentElement;


let switcher3= document.getElementById("switcher3");
switcher3.addEventListener("change", function (evt) {
  root.style.setProperty('--var-align-content', evt.target.value);
});

let switcher4= document.getElementById("switcher4");
switcher4.addEventListener("change", function (evt) {
  root.style.setProperty('--var-justify-content', evt.target.value);
});

let switcher5= document.getElementById("switcher5");
switcher5.addEventListener("change", function (evt) {
  root.style.setProperty('--var-align-items', evt.target.value);
});

let switcher6= document.getElementById("switcher6");
switcher6.addEventListener("change", function (evt) {
  root.style.setProperty('--var-justify-items', evt.target.value);
});