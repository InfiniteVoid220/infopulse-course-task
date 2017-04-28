(function (window, document) { 
    
var sort = new SortTable();
var DropdownHendler = new DropdownMenu();

window.addEventListener('load', loaded);
document.getElementById('show-or-hide-left').addEventListener('click', showOrHideLeft);
document.getElementById('show-right').addEventListener('click', show_right);

var buttons_del = document.getElementById('data').getElementsByTagName('button');
for(let i = 0; i < buttons_del.length; i++){
  buttons_del[i].addEventListener('click', function(){
    delete_row(this);
  });
}
var thead_buttons = document.getElementById('tb-block').getElementsByTagName('th');
for(var i = 0; i < thead_buttons.length-1; i++){
  thead_buttons[i].addEventListener('click', function(){
    sort.sortByColumn(this.cellIndex);
  });
}
document.getElementById('customer-field').addEventListener('click', function(){
  DropdownHendler.showOrHide(this);
});
document.getElementById('type-field').addEventListener('click', function(){
  DropdownHendler.showOrHide(this);
});
document.getElementById('type-options').addEventListener('click', function(){
  set_text(event);
});
document.getElementById('customer-options').addEventListener('click', function(){
  set_text(event);
});
document.getElementById('butt-add-row').addEventListener('click', function(){
  add_row(this);
});
//document.getElementById('lupa').addEventListener('click', filter);

/*Закрыть меню или список если нажать в другое место окна*/
window.onclick = function(event) {
    DropdownHendler.hideOnOutClick(event);
    if(!event.target.matches("#show-right")) {//закрыть меню
        if (event.target.matches(".side-menu-right") 
            || event.target.matches(".side-menu-right *")) {
            return;
        } else {
            document.getElementById("right-menu").style.transform="translateX(0) ";
        }
    }
}

function delete_row(x) {
    var currentRow=x.parentElement.parentElement.rowIndex;
    document.getElementById("data").deleteRow(currentRow);
}

function show_right(){//отобразить правую панель
    document.getElementById("right-menu").style.transform="translateX(-370px) ";
}

function SortTable() {//класс для сортировки
    var rows, swaping,i, x, y, shouldSwap, dir, swapCount = 0;
    //отбираем все ряды
    var rows = document.getElementById("data").getElementsByTagName("TR");
    var swaping = true;
    var dir = "asc"; //направление сортировки
    var sortType=null;

    function toDate(dateStr) {
        var parts = dateStr.split(".");
        return new Date(parts[2], parts[1]-1, parts[0]);
    }

    function defineSortType(tableColumn){
        if(tableColumn==2 || tableColumn==3) {
            sortType = "ByDate";
        } else { 
            sortType = "ByText";
        }
    }

    function compareDate(currentRow, nextRow, direction){
        if(direction == "asc" 
           && toDate(currentRow.innerHTML) > toDate(nextRow.innerHTML)){
            return true;
        } else if(direction == "desc" 
                  && toDate(currentRow.innerHTML) < toDate(nextRow.innerHTML)) {
            return true;
        }
            return false;
    }

    function compareText(currentRow, nextRow, direction){
        if(direction == "asc" 
           && currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()){
            return true;
        } else if(direction == "desc" 
                  && currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
            return true;
        }
            return false;
    }

    function swapRows(){
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        swaping = true;
        swapCount ++;  
    }

    function setVariablesToDefault(){
        swaping=true;
        dir="asc";
        swapCount=0;
    }

    this.sortByColumn = function(n) {
        setVariablesToDefault(); 
        defineSortType(n);
        while (swaping) {//Исполнять пока изменяется порядок.
            swaping = false;
            for (i = 0; i < (rows.length-1); i++) {
                shouldSwap = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                //обмен местами в зависимости от направления
                if (sortType == "ByDate") {
                    shouldSwap = compareDate(x,y,dir);
                } else if (sortType == "ByText")  {
                    shouldSwap = compareText(x,y,dir);
                }
                if (shouldSwap) {   
                    swapRows();
                } 
            }
            /*смена направления сортировки, если не произошло изменений.*/  
            if (swapCount == 0 && dir == "asc") {
                dir = "desc";
                swaping = true;
            }
        }
    };
}

/*function Filter() {//класс для отбора данных с таблицы
    var i=0;
    var project_name = document.getElementById("search-field").value.toUpperCase();
    var = {};
    var web = document.getElementById("web").value;
    var web = document.getElementById("web").value;
    var web = document.getElementById("web").value;
    var web = document.getElementById("web").value;

    var rows = document.getElementById("data").getElementsByTagName("tr");
    this.flagsActive = function(){

    }

    this.search = function(){
        var input, table, tr, td, i;
       
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(project_name) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

}

/*var items=document.getElementsByTagName('th');
for( var i = 0; i < items.length-1; i++ ) {
        items[i].addEventListener('click',sort_table.bind(null, i));
}
*/

/*function add_row(x) {
    var c = document.getElementById("right-form").children;
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
    }
}*/
})(window, document);
