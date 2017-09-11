var origWidth = document.getElementById("smallmenu").style.width;

function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("smallmenu").style.width = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("smallmenu").style.width = origWidth;
}