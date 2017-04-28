function tableActions(){

    this.deleteRow = functions (x) {
        var currentRow=x.parentElement.parentElement.rowIndex;
        document.getElementById("data").deleteRow(currentRow);
    }

    /*Work in progres*/

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

}

