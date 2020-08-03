import '../scss/app.scss';

// Your JS Code goes here

window.onload = function(){

    choose();
    hideNav();
    hide();
    close();
    closeBtn();
}


let choose = function(){

    let width = window.innerWidth;

    if(width >= 1240){
        
        let pics = document.getElementsByClassName('pictures_img');

        for(let el of pics){
        el.addEventListener("click", switching, false);
        }

    }
    
    
}

let switching = function(){

    let pic = document.getElementsByClassName('pictures_bigimg')[0];
    let smallpic = this.getAttribute('src');   
    pic.setAttribute('src', smallpic);

}

let navBar = document.getElementsByClassName('nav')[0];

let hideNav = function(){
    let width = window.innerWidth;
    if(width < 1240){
        navBar.classList.add('nav_hidden');
    }else{
        navBar.classList.remove('nav_hidden');
    }
}

let burger = document.getElementsByClassName('nav_burger')[0];
let nav2 = document.getElementsByClassName('nav2')[0];

let hide = function(){
    burger.addEventListener("click", test, false);
   
}

let test = function(){
    setTimeout(hideBurger,300);
}

let hideBurger = function(){
    burger.classList.add('nav_hidden');
    nav2.classList.remove('nav_hidden');

}

let navA = document.getElementsByClassName('nav_a2');

let close = function(){

    for(let el of navA){
        el.addEventListener("click", closeMenu, false);
    }
    
}

let closeMenu = function(){
    nav2.classList.add('nav_hidden');
    burger.classList.remove('nav_hidden');
}

let navBtn = document.getElementsByClassName('nav_btn')[0];

let closeBtn = function(){
    navBtn.addEventListener("click", closeMenu, false);
}


