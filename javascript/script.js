/*-----------------------------------Выпадающий список--------------------------------*/

/*переменные для текущего списка*/
var DropdownButton=null;//текущий список
var DropdownOptions=null;//елементи текущего списка

function show_or_hide_options(th) { //прячет или открывает елементи списка 

    if(DropdownButton!=th && DropdownButton!=null) {//скрыть если нажали на другой список
        DropdownOptions.style.display="none";
        DropdownButton.style.borderBottom="2px solid #d77016";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }

    DropdownButton=th;//запомнить текущий список
    DropdownOptions=th.nextElementSibling;//запомнить блок с елементами текущего списка

    //отображение елементов при нажатии на поле списка
    if(DropdownOptions.style.getPropertyValue("display")=="none"){
        DropdownOptions.style.display="block";
        DropdownButton.style.borderBottom="2px solid white";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-more.png) no-repeat right top";
    }   
    else{//скрыть если список уже открыт
        DropdownOptions.style.display="none";
        DropdownButton.style.borderBottom="2px solid #d77016";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }
    
}

 function set_text(event) {//записывает в поле списка данные полученые с выбраного елемента
    DropdownButton.innerHTML = event.target.innerHTML;
    DropdownButton.previousElementSibling.value=event.target.innerHTML;
}

/*------------------------------------------------------------------------------------*/

/*Закрыть меню или список если нажать в другое место окна*/
window.onclick = function(event) {

   // alert(event.target.parentElement.parentElement.rowIndex);
    if(DropdownButton!=null){//закрыть список
        if (!event.target.matches("#"+DropdownButton.id)) {
            DropdownOptions.style.display="none";
            DropdownButton.style.borderBottom="2px solid #d77016";
            DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
            DropdownButton = null;
            DropdownOptions = null;
        }
    }

    if(!event.target.matches("#show-right"))//закрыть меню
    {
        if (event.target.matches(".side-menu-right") 
            || event.target.matches(".side-menu-right *")) {
            return;
        }
        else{
        document.getElementById("right-menu").style.right = "-370px"
        }
    }
}

function show_right(){//отобразить правую панель
    document.getElementById("right-menu").style.right = "0px"
}

function show_or_hide_left(){//работа слевой панелью
    var menu=document.getElementById("left-menu");
    var tabel=document.getElementById("tb-block");
    if(tabel.style.getPropertyValue("width")=="1920px")
        {
            menu.style.marginLeft="0";
            tabel.style.width="1550px";
        }
    else
        {
            menu.style.marginLeft="-370px";
            tabel.style.width="1920px";
        }
}
    var myScroll; 

    function loaded () {
        myScroll = new IScroll('#wrapper-scroll', {scrollbars: false, mouseWheel: true, interactiveScrollbars: true });
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
    } : false);

function delete_row(x){
    var current_row=x.parentElement.parentElement.rowIndex;
    document.getElementById("data").deleteRow(current_row);
}

function add_row(x){
   /* var c = document.getElementById("right-form").children;
    var txt = "";
    var i;
   
    for (i = 0; i < c.length-1; i++) {
        if(c[i].value!="" && i<4)
        {
            txt = txt + c[i].value+ "<br>";
        }
        if(i>=4){
            if(c[i].children[0].innerHTML!="TYPE:" &&  c[i].children[0].innerHTML!="Customers:"){
                txt = txt + c[i].children[0].innerHTML+ "<br>";
            }
        }

    }

    document.getElementById("demo").innerHTML = txt;
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    
    for(var i=0;i<2;i++){
      var cell = row.insertCell(0);
      cell.innerHTML = "NEW CELL"+i;
    }*/
}