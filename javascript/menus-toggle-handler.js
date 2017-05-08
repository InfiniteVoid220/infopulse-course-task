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
   
    function showOrHideLeft(){//работа с левой панелью
        if(this.isLeftMenuHiden) {
            self.leftMenu.classList.remove("hide-left-menu");
            self.tabel.classList.remove("stretchTable");
            this.isLeftMenuHiden = false;
        } else {
            self.leftMenu.classList.add("hide-left-menu");
            self.tabel.classList.add("stretchTable");
            this.isLeftMenuHiden = true;
        }
    }

    function showRightMenu (){//отобразить правую панель
        self.rightMenu.classList.add("show-right-menu");
    }

    function hideRightMenu () {
        if (!event.target.matches("#show-right")) {//закрыть меню
            if (event.target.matches(".side-menu-right") 
                || event.target.matches(".side-menu-right *")) {
                return;
            } else {
               self.rightMenu.classList.remove("show-right-menu");
            }
        }
    }
    this.init();
}
