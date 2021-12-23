const input = document.getElementById('date');
const input2 = document.getElementById('date2');
const datepicker = new TheDatepicker.Datepicker(input);
const datepicker2 = new TheDatepicker.Datepicker(input2);
datepicker.render();
datepicker2.render();



// Loader

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector(".page").style.display = "block";
}


// Burger

let burger = document.querySelector('.burger');
let width = document.querySelector('.width');

width.addEventListener('click', function() {
  burger.classList.toggle('show');
});