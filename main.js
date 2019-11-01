var header = document.getElementById("header");
var nav = document.querySelector("nav");
var logo = document.getElementById("logo");
var anchors = document.getElementsByClassName("link");
var mobileMenu = document.getElementById("mobile-menu");
var navLinks = document.getElementById("nav-links");



window.onscroll = function(){
    
    if(window.scrollY
         >= 60) {
        header.style.backgroundColor = "white";
        this.nav.style.color = "#333";
        this.logo.style.color = "white";
        this.logo.style.backgroundColor = "#333";
        this.mobileMenu.style.color = "#333";
        this.header.style.boxShadow = "0 0.5px 6px #3333333b";this.console.log(mobileMenu.getElementsByTagName("div"));
        this.navLinks.style.borderTopLeftRadius = "0px";
        for(let i=0; i<this.anchors.length;i++){
            anchors[i].classList.remove("color-change");
        }
        for(let i=0; i<mobileMenu.getElementsByTagName("div").length;i++){
            mobileMenu.getElementsByTagName("div")[i].style.backgroundColor = "#333";
        }
        
    }else {
        this.header.style.backgroundColor = "transparent";
        this.nav.style.color = "white";
        this.logo.style.color = "#333";
        this.logo.style.backgroundColor = "white";
        this.mobileMenu.style.color = "white";
        this.header.style.boxShadow = "0 0 0 #3333333b";
        this.navLinks.style.borderTopLeftRadius = "3px";
        for(let i=0; i<this.anchors.length;i++){
             anchors[i].classList.add("color-change");
        }
        for(let i=0; i<mobileMenu.getElementsByTagName("div").length;i++){
            mobileMenu.getElementsByTagName("div")[i].style.backgroundColor = "white";
        }
    }
}

$(window).scroll(function () {
    var position = window.pageYOffset;
    $('section').each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      var navLinks = $('#header li a');
      if (position + 60 >= target) {
        navLinks.removeClass('current');
        $('#header li a[href="#' + id + '"]').addClass('current');
      }
    });
 });

 $('#mobile-menu').on("click", function(){
    $("#nav-links").toggleClass("show-mobile-nav");
    
 });