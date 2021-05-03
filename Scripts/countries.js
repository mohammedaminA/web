// grab navbar items
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});




// load JSON file locally
$.getJSON("data.json", function(json) {
    var ethiopia_info = json.Ethiopia.info;
    var ethiopia_restrictions = json.Ethiopia.optional2;
    var ethiopia_restrictions2 = json.Ethiopia.optional3;

    var mauritius_info = json.Mauritius.info;
    var mauritius_restrictions = json.Mauritius.optional2;
    var mauritius_restrictions2 = json.Mauritius.optional3;
    
    var uk_info = json['United Kingdom of Great Britain & Northern Ireland'].info;
    var uk_restrictions = json['United Kingdom of Great Britain & Northern Ireland'].optional2;
    var uk_restrictions2 = json['United Kingdom of Great Britain & Northern Ireland'].optional3;
   

    const Mauritius = document.getElementById('mauritius');
    const UK = document.getElementById('uk');
    const Ethiopia = document.getElementById('ethiopia');

    // prepare a text that will go inside the container for Mauritius
    var muText = (function(o){
      return `
      <div class="div-conatiner">
            <p style= "font-size:1vw;" class="p-loc" id= "text"> ${mauritius_info}</p>
            <style>
            
          </style>
           </div>
        `;
    });

        // prepare a text that will go inside the container for UK

    var ukText = (function(o){
        return `
        <div class="div-conatiner">
            <p style= "font-size:1vw;" class="p-loc" id= "text"> ${uk_info}</p>
            <style>
            
          @media all and (max-width: 767px) {

            .p-loc { 
               font-size: 1.5vw !important; 
            }
         
         }
          </style>
           </div>
        `;
      });

    // prepare a text that will go inside the container for Ethiopia

      var etText = (function(o){
        return `
            <div class="div-conatiner">
            <p style= "font-size:1.75vw;" class="et-text" id= "text"> ${ethiopia_restrictions}</p>
            <p style= "font-size:1.75vw;" class="et-text" id= "text"> ${ethiopia_restrictions2}</p>

            <style>
            
          @media all and (max-width: 767px) {

            .et-text,.et-text-2  { 
               font-size: 2vw !important;
            }
         
         }
          </style>
           </div>
        `;
      });
    
      //load texts into respective containers
    $(Mauritius).append(muText);
    $(UK).append(ukText);
    $(Ethiopia).append(etText);

   
   

   });
    
