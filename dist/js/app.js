function togglemenu() {
    console.log('clicked')
    let menu = document.getElementById("mobile-menu");
    console.log(menu.style.display);
    if (menu.style.display == "block"){
        menu.style.display = "none"
    }else{
        menu.style.display = "block";
    }
}