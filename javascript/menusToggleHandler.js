function menusToggleHandler () { //обрабочик всплывания менюшек

    var isLeftMenuHiden=false;
    var rightMenu = document.getElementById("right-menu");
    var leftMenu = document.getElementById("left-menu");
    var tabel=document.getElementById("tb-block");
   
    this.showOrHideLeft = function (){//работа слевой панелью
        if(isLeftMenuHiden) {
                leftMenu.style.transform="translateX(0)";
                tabel.style.transform ="scaleX(1)";
                isLeftMenuHiden=false;
            } else {
                leftMenu.style.transform="translateX(-370px)";
                tabel.style.transform = "scaleX(1.238) translateX(-130px)";
                isLeftMenuHiden=true;
            }
    }

    this.showRightMenu = function (){//отобразить правую панель
        rightMenu.style.transform="translateX(-370px) ";
    }

    this.hideRightMenu = function (e) {
        if(!event.target.matches("#show-right")) {//закрыть меню
            if (event.target.matches(".side-menu-right") 
                || event.target.matches(".side-menu-right *")) {
                return;
            } else {
                rightMenu.style.transform="translateX(0) ";
            }
        }
    }
}
