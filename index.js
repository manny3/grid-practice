let root = document.documentElement;
let switcher = document.getElementById("switcher");
let direction = document.getElementById("direction");

switcher.addEventListener("change", function (evt) {
  root.style.setProperty('--var-writing-mode', evt.target.value);
});

direction.addEventListener("click", function (evt) {
  if(direction.checked) {
    root.style.setProperty('--var-direction', 'rtl');
  } else {
    root.style.setProperty('--var-direction', 'ltr');
  }
});


// let switcher3= document.getElementById("switcher3");
// switcher3.addEventListener("change", function (evt) {
//   root.style.setProperty('--var-align-content', evt.target.value);
// });

// let switcher4= document.getElementById("switcher4");
// switcher4.addEventListener("change", function (evt) {
//   root.style.setProperty('--var-justify-content', evt.target.value);
// });