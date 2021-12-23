const menu = document.querySelector(".menu"),
      close = document.querySelector(".close"),
      fromcity = document.getElementById("fromcity"),
      tocity = document.getElementById("tocity"),
      date = document.getElementById("date"),
      button = document.querySelector(".find__ticket");    
close.addEventListener('click', closeMenu);
menu.addEventListener('click', openMenu);
button.addEventListener('click', findTicket);
function openMenu() {
    document.querySelector(".menu_open").style.display = "block";
    document.querySelector(".menu_open").style.zIndex = "10";
    document.querySelector(".menu_open").style.transform = "100%";
}
function closeMenu() {
    document.querySelector(".menu_open").style.display = "none";
}

function findTicket() {
    var inputdate
    const inp1 = fromcity.value;
    const inp2 = tocity.value;
    date.addEventListener("change", function () {
         inputdate = this.value;
   });
}