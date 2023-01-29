//JAVASCRIPT CODE TO OPEN/CLOSE MENU NAVIGATION BUTTON TO SHOW/HIDE NAVIGATION MENU

const btnnavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnnavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// Relevant HTML FOR MAKING MOBILE BUTTON OPEN/CLOSE FOR NAVIGATION

/*<header class="header ">
      <img class="logo" src="Assets/Logo.svg" />
      <nav class="nav">
        <ul class="nav-list">
          <li><a class="nav-link" href="#">Feed </a></li>
          <li><a class="nav-link" href="#">Milestones </a></li>
          <li><a class="nav-link" href="#">Groups </a></li>
        </ul>
      </nav>*/
/*
      // <button class="btn-mobile-nav">
        
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav"  name="close-outline"></ion-icon>
      </button>*/

/*RELEVANT MEDIA QUERIES
      .nav-open .nav {
    opacity: 1;

     reset when navigation open 

     ///////////////////////////////////

    pointer-events: auto;
    visibility: visible;
    transform: translate(0);
  }

   show close icon when navigation list open 
   /////////////////////////////////////////

  .nav-open .icon-mobile-nav[name="close-outline"] {
    display: block;
  }
   hide menu icon when navigation open 
   ////////////////////////////////////////

     .nav-open .icon-mobile-nav[name="menu-outline"] {
    display: none;
  }
  */

//JAVASCRIPT CODE TO OPEN/CLOSE MENU NAVIGATION BUTTON TO SHOW/HIDE NAVIGATION MENU

// const btnnavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");
// btnnavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
