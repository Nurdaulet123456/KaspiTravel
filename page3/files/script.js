const choosePlaceButton = document.querySelector(".reserve__seating"),
      arrangementBlock = document.querySelector(".arrangement"),
      seats = document.querySelectorAll(".seat"),
      clear = document.querySelector(".clear"),
      menu = document.querySelector(".menu"),
      close = document.querySelector(".close");
let count = document.getElementById("count"),
     total = document.getElementById("total");
let selected = 0;
choosePlaceButton.addEventListener('click', displayArrangement);
clear.addEventListener('click', clearAll);
close.addEventListener('click', closeMenu);
menu.addEventListener('click', openMenu);
function displayArrangement() {
   arrangementBlock.style.display = (arrangementBlock.style.display == 'none') ? "flex" : "none";
   console.log("wtf");
}

seats.forEach((items) => {
     items.addEventListener('click', function changeColor() {
        console.log("change");
        if(items.classList.contains("white")) {
            
             if(selected > 4) {
                console.log("You cannot select more than 4 places");
             }
           items.classList.remove("white");
           items.classList.add("green");
           selected++;
          count.textContent = selected;
          total.textContent = selected * 9000;
        }
        else {
         
         items.classList.remove("green");
         items.classList.add("white");
         selected--;
         count.textContent = selected;
         total.textContent = selected * 9000;
        }
     });

     
});

function clearAll() {
   let tags;
   tags = document.getElementsByTagName('input');
   for(i = 0; i < tags.length; i++) {
       switch(tags[i].type) {
           case 'text':
               tags[i].value = '';
               break;
           case 'email':
              tags[i].value = '';
              break;
            case 'tel': 
              tags[i].value = '';
              break;
       }
      }
   
    tags = document.getElementsByTagName('select');
               for(i = 0; i < tags.length; i++) {
                       for(j = 0; j < tags[i].options.length; j++) {
                           tags[i].options[j].selected = false;
                       }
               }
               [i].value = '';


               seats.forEach((items) => {
                  
                  if(!items.classList.contains("desc")) {
                     items.classList.remove("green");
                     items.classList.add("white");
                  }
                
                  count.textContent = 0;
                  total.textContent = 0;  
             }); 
   }

   function openMenu() {
       document.querySelector(".block").style.opacity = "0";
       document.querySelector(".menu_open").style.display = "block";
       document.querySelector(".menu_open").style.zIndex = "10";
       document.querySelector(".menu_open").style.transform = "100%";
       document.querySelector(".buy").style.zIndex = "-1";
   }
   function closeMenu() {
      document.querySelector(".block").style.opacity = "0.5";
       document.querySelector(".menu_open").style.display = "none";
       document.querySelector(".buy").style.zIndex = "";
   }


