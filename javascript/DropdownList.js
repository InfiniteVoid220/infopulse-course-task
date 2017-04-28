/*-----------------------------------Выпадающий список--------------------------------*/
function DropdownList(){//класс для выпадающего списка

    var DropdownButton=null;//текущий список
    var DropdownOptions=null;//елементи текущего списка

    this.setText = function(e) {//записывает в поле списка данные полученые с выбраного елемента
        alert("sd");
        DropdownButton.innerHTML = e.target.innerHTML;
    }

    this.showOrHide = function (th) { //прячет или открывает елементи списка 

        if(DropdownButton!=th && DropdownButton!=null) {//скрыть если нажали на другой список
            DropdownButton.classList.remove("show");
            DropdownButton.classList.add("hide");
        }

        DropdownButton=th;//запомнить текущий   список
        DropdownOptions=th.nextElementSibling;//запомнить блок с елементами текущего списка
    
        //отображение елементов при нажатии на поле списка
        if(DropdownButton.classList.contains("hide")) {
            DropdownButton.classList.remove("hide");
            DropdownButton.classList.add("show");
        } else {//скрыть если список уже открыт
            DropdownButton.classList.remove("show");
            DropdownButton.classList.add("show");
        }
    }

    this.hideOnOutClick = function (e){
        if(DropdownButton!=null) {//закрыть список
            if (!e.target.matches("#"+DropdownButton.id)) {
                DropdownButton.classList.remove("show");
                DropdownButton.classList.add("hide");
            }
        }
    }
}   
//классы show и hide находятся в side-menu-right.css
/*------------------------------------------------------------------------------------*/

