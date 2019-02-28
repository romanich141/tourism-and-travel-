let burgerBtn = document.querySelector('.icon-burger'),
    mobileNavbar = document.querySelector('.mobile-navbar');
    console.dir(mobileNavbar)
burgerBtn.addEventListener('click' , function(event){
    mobileNavbar.classList.toggle('toggle-mobile-navbar');
})
