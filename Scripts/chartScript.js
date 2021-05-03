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




$(document).ready(function() {
    $.getJSON("https://covid.ourworldindata.org/data/owid-covid-data.json", function(data) {
    var Ethiopia = data.ETH.data;
    var Mauritius = data.MUS.data;
    var UK = data.GBR.data;
    console.log(data)

    // container arrays for ethiopia data
var ethiopia_confirmed= [];
var ethiopia_deaths=[];
var ethiopia_tests = [];
var ethiopia_vaccinations = [];
var ethiopia_dates = [];


// container arrays for UK data
 var uk_confirmed= [];
 var uk_deaths= [];
 var uk_tests = [];
 var uk_vaccinations = [];
 var uk_dates= [];
 

// container arrays for mauritius data
 var mauritius_confirmed= [];
 var mauritius_deaths= [];
 var mauritius_tests = [];
 var mauritius_vaccinations = [];
 var mauritius_dates = [];

    console.log(data)

    

     

     

// store ethiopia data into respective arrays
    $.each(Ethiopia, function(id, objects ) {
     ethiopia_dates.push(objects.date);
     ethiopia_confirmed.push(objects.total_cases);
     ethiopia_deaths.push(objects.total_deaths);
     ethiopia_tests.push(objects.total_tests);
     ethiopia_vaccinations.push(objects.total_vaccinations_per_hundred);
    });

    

// store UK data into respective arrays
$.each(UK, function(id, objects ) {
     uk_dates.push(objects.date);
     uk_confirmed.push(objects.total_cases);
     uk_deaths.push(objects.total_deaths);
     uk_tests.push(objects.total_tests);
     uk_vaccinations.push(objects.total_vaccinations_per_hundred);
    });

//store Mautitius data into respective arrays
$.each(Mauritius, function(id, objects ) {
     mauritius_dates.push(objects.date);
     mauritius_confirmed.push(objects.total_cases);
     mauritius_deaths.push(objects.total_deaths);
     mauritius_tests.push(objects.total_tests);
     mauritius_vaccinations.push(objects.total_vaccinations_per_hundred);
    });

    // charts
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ethiopia_dates,
      datasets: [{ 
          data: ethiopia_confirmed,
          label: "Ethiopia Confirmed ",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: uk_confirmed,
          label: "UK confirmed",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: mauritius_confirmed,
          label: "Mauritius Confirmed",
          borderColor: "#3cba9f",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        responsive: true
        
      }
    }
  });

  // charts
  new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
      labels: ethiopia_dates,
      datasets: [{ 
          data: ethiopia_deaths,
          label: "Ethiopia Deaths ",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: uk_deaths,
          label: "UK Deaths",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: mauritius_deaths,
          label: "Mauritius Deaths",
          borderColor: "#3cba9f",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        responsive: true
        
      }

    }
  });

  new Chart(document.getElementById("line-chart3"), {
    type: 'line',
    data: {
      labels: ethiopia_dates,
      datasets: [{ 
          data: ethiopia_vaccinations,
          label: "Ethiopia Vaccinations ",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: uk_vaccinations,
          label: "UK Vaccinations",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: mauritius_vaccinations,
          label: "Mauritius vaccinations",
          borderColor: "#3cba9f",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        responsive: true
        
      }
    }
  });

   

   
   });
  });

  

