
// my selector for the burger button 

var burgerBtn = document.querySelector("#burger-btn");
var mainNav = document.querySelector("#main-nav");

var isNavVisible = false;

burgerBtn.addEventListener("click", () =>{
     // console.log("button working!!!!!");

     if (isNavVisible === false) {
        mainNav.classList.remove("hide-menu");
        var isNavVisible = true;
     }else{
        mainNav.classList.add("hide-menu");
        var isNavVisible = false;
     }

})

