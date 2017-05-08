function menusToggleHandler() { //обрабочик всплывания менюшек
    var self = this;

    this.init = function(){

        this.isLeftMenuHiden=false;
        this.rightMenu = document.getElementById("right-menu");
        this.leftMenu = document.getElementById("left-menu");
        this.tabel = document.getElementById("tb-block");

        this.initEvents();
    } 

    this.initEvents = function(){
        window.addEventListener('click', function(){ hideRightMenu(); });

        document.getElementById('show-or-hide-left').addEventListener('click',showOrHideLeft);
        document.getElementById('show-right').addEventListener('click',showRightMenu);
    }
   
    function showOrHideLeft(){//работа слевой панелью
        if(this.isLeftMenuHiden) {
            self.leftMenu.style.transform="translateX(0)";
            self.tabel.style.transform ="scaleX(1)";
            this.isLeftMenuHiden=false;
        } else {
            self.leftMenu.style.transform="translateX(-370px)";
            self.tabel.style.transform = "scaleX(1.238) translateX(-130px)";
            this.isLeftMenuHiden=true;
        }
    }

    function showRightMenu (){//отобразить правую панель
        self.rightMenu.style.transform="translateX(-370px) ";
    }

    function hideRightMenu () {
        if(!event.target.matches("#show-right")) {//закрыть меню
            if (event.target.matches(".side-menu-right") 
                || event.target.matches(".side-menu-right *")) {
                return;
            } else {
               self.rightMenu.style.transform="translateX(0) ";
            }
        }
    }
    this.init();
}
