
/*-----------------------------------Выпадающий список--------------------------------*/

/*переменные для текущего списка*/
var DropdownButton=null;//текущий список
var DropdownOptions=null;//елементи текущего списка

function show_or_hide_options(th) { //прячет или открывает елементи списка 

    if(DropdownButton!=th && DropdownButton!=null) {//скрыть если нажали на другой список
        DropdownButton.classList.remove("show");
        DropdownButton.classList.add("hide");
    }

    DropdownButton=th;//запомнить текущий   список
    DropdownOptions=th.nextElementSibling;//запомнить блок с елементами текущего списка

    //отображение елементов при нажатии на поле списка
    if(DropdownButton.classList.contains("hide")){
        DropdownButton.classList.remove("hide");
        DropdownButton.classList.add("show");
    }   
    else{//скрыть если список уже открыт
        DropdownButton.classList.remove("show");
        DropdownButton.classList.add("hide");
    }
}

 function set_text(event) {//записывает в поле списка данные полученые с выбраного елемента
    DropdownButton.innerHTML=event.target.innerHTML;
}

/*------------------------------------------------------------------------------------*/

document.getElementById('show-or-hide-left').addEventListener('click', show_or_hide_left);

/*Закрыть меню или список если нажать в другое место окна*/
window.onclick = function(event) {
    if(DropdownButton!=null){//закрыть список
        if (!event.target.matches("#"+DropdownButton.id)) {
            DropdownButton.classList.remove("show");
            DropdownButton.classList.add("hide");
        }
    }

    if(!event.target.matches("#show-right"))//закрыть меню
    {
        if (event.target.matches(".side-menu-right") 
            || event.target.matches(".side-menu-right *")) {
            return;
        }
        else{
        document.getElementById("right-menu").style.transform="translateX(0) ";
        }
    }
}

function show_right(){//отобразить правую панель
    document.getElementById("right-menu").style.transform="translateX(-370px) ";
}

var hide=false;

function show_or_hide_left(){//работа слевой панелью
    var menu=document.getElementById("left-menu");
    var tabel=document.getElementById("tb-block");
    if(hide){
            menu.style.transform="translateX(0)";
            tabel.style.transform ="scaleX(1)";
            hide=false;
        }
    else
        {
            menu.style.transform="translateX(-370px)";
            tabel.style.transform = "scaleX(1.238) translateX(-130px)";
            hide=true;
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

function toDate(dateStr) {
    var parts = dateStr.split(".");
    return new Date(parts[2], parts[1], parts[0]);
}

function sort_table(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("data");
    switching = true;
    dir = "asc"; //направление сортировки

    /*Исполнять пока изменяется порядок*/
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");//отбираем все ряды
        for (i = 0; i < (rows.length-1); i++) {
            shouldSwitch = false;
            /*елементи для сравнения*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*обмен местами в зависимости от направления*/
            if (dir == "asc") {
                if(n==2 || n==3){  //сортировка дат 
                    if(toDate(x.innerHTML)>toDate(y.innerHTML))
                    { 
                    shouldSwitch= true; 
                    break;//перейти к обмену местами
                    }
                }
                else { //сортировка текста
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                      shouldSwitch= true; 
                      break;//перейти к обмену местами
                    }
                }
            } 
            else 
            {
              if (dir == "desc") {
                if(n==2 || n==3){  //сортировка дат
                    if(toDate(x.innerHTML)<toDate(y.innerHTML))
                    {
                        shouldSwitch= true; 
                        break;//перейти к обмену местами
                    }
                }
                else
                {//сортировка текста
                if (x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()) 
                    {
                      shouldSwitch= true;
                      break;//перейти к обмену местами 
                    }
                 }
              }
            }
        }

        if (shouldSwitch) 
        {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount ++;      
        } 
        else 
        {
          /*смена направления сортировки, если не произошло изменений.*/
          if (switchcount == 0 && dir == "asc") 
          {
            dir = "desc";
            switching = true;
          }
        }
    }
}


/*var items=document.getElementsByTagName('th');
for( var i = 0; i < items.length-1; i++ ) {
        items[i].addEventListener('click',sort_table.bind(null, i));
}
*/