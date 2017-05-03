/*-----------------------------------Выпадающий список--------------------------------*/
function DropdownList(options){//класс для выпадающего списка
    var self = this;

    this.initEvents = function(){
        this.selectedItem.addEventListener('click', function(){
            self.toggle(this);
        });
        this.list.addEventListener('click', function(){
            if (event.target.innerHTML){
                self.setText(event.target.innerHTML);
            };
        });
          /*Закрыть меню или список если нажать в другое место окна*/
        window.addEventListener('click', function(){
            self.hideOnOutClick(event.target);
        })

    }

    this.init = function(){
        this.rootEl = options.el,
        this.selectedItem = this.rootEl.getElementsByClassName('dropdown-field')[0],
        this.list = this.rootEl.getElementsByClassName('dropdown-options')[0];
        this.initEvents();
    } 

    this.setText = function(text) {
        this.selectedItem.innerHTML = text;
    }

    this.toggle = function (el) {
        el.classList.toggle("show");
    }

    this.hideOnOutClick = function (el){
        if(this.selectedItem!=null && !el.matches(".dropdown-field")) {
            this.selectedItem.classList.remove("show");
        }
    }

  
    this.init();
}   
//классы show и hide находятся в side-menu-right.css
/*------------------------------------------------------------------------------------*/

