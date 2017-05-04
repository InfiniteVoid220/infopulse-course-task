function tableActions(){

    this.deleteRow = function (x) {
        var currentRow=x.parentElement.parentElement.rowIndex;
        document.getElementById("data").deleteRow(currentRow);
    }

    /*Work in progres*/

   /* function Filter() {//класс для отбора данных с таблицы
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

    var items=document.getElementsByTagName('th');
    for( var i = 0; i < items.length-1; i++ ) {
            items[i].addEventListener('click',sort_table.bind(null, i));
    }
    */

    this.create_row = function(){
        alert("create_row exec");

        let fields = load_data();

        if(!is_all_filled_in(fields)){
            alert("error")
            return;
        }

        if(!is_dates_correct()){
            alert("incorrect dates!");
            return;
        }

        if(typeof(fields) != 'undefined'){
            add_row(fields);

        }
    }

    function is_all_filled_in(fields){
        let is_all_filled_in = true;

        for(let i = 0; i < 7; i++){
            switch(i){
                case 1:
                case 2:
                    if(fields[i].substring(0,3) == "NaN") is_all_filled_in = false;
                    break;
                case 4:
                    if(fields[i] == "TYPE:") is_all_filled_in = false;
                    break;
                case 6:
                    if(fields[i] == "Customers:") is_all_filled_in = false;
                    break;
                default:
                    if(fields[i] == "") is_all_filled_in = false;
            }

            if(!is_all_filled_in) break;
        }

        return is_all_filled_in;       
    }

    function load_data(){
        let fields = [];
        let date;

        fields[0] = document.getElementById("project-name").value;
        
        date = new Date(document.getElementById("due-date").value);
        fields[1] = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();

        date = new Date(document.getElementById("created").value);
        fields[2] = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();

        fields[3] = document.getElementById("members").value;
        fields[4] = document.getElementsByClassName('type-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML;
        fields[5] = get_status(fields[1], fields[2]);
        fields[6] = document.getElementsByClassName('customer-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML;      
        
        return fields;
    }

    function get_status(){

        let today = new Date();
        let due_date = new Date(document.getElementById("due-date").value);
        let created_date = new Date(document.getElementById("created").value);

        if(created_date > today) return "future";
        else
            if(due_date < today) return "over";
            else return "current";
    }

    function is_dates_correct(){
        let due_date = new Date(document.getElementById("due-date").value);
        let created_date = new Date(document.getElementById("created").value);

        if(created_date > due_date)
            return false;
        return true;
    }

    function add_row(fields) {
        alert("add_row exec");

        var table = document.getElementById("data");
        var row = table.insertRow(0);

        for(var i = 0, arguments_counter = 0; i < 9; i++){
            if(i == 1){
                row.insertCell(i);
                continue;
            }
            if(i == 8){
                var cell = row.insertCell(i);
                var but = document.createElement('button');
                cell.appendChild(but);
                continue;
            }
    
            row.insertCell(i).innerHTML = fields[arguments_counter];
            arguments_counter++;
        }
    }
}

