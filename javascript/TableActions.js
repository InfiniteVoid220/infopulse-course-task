function tableActions(){
    var self = this;

    console.log("sadsf");
    function deleteRow(x) {
        var currentRow=x.parentElement.parentElement.rowIndex;
        document.getElementById("data").deleteRow(currentRow);
    }

    this.initEvents = function(){
           document.getElementById('data').addEventListener('click', function(){
                if(event.target.tagName == "BUTTON") deleteRow(event.target);
        });

        document.getElementById('butt-add-row').addEventListener('click', function(){
            create_row();
        });
    }
    this.initEvents();
    
    function create_row(){
        let fields = load_data();

        if(!is_all_filled_in(fields)){
            alert("Fill all fields");
            return;
        }

        if(!is_dates_correct()){
            alert("incorrect dates!");
            return;
        }

        add_row(fields);
        
        clear_fields();
    }

    function clear_fields(){
        document.getElementById("project-name").value = "";
        document.getElementById("due-date").value = "";
        document.getElementById("created").value = "";
        document.getElementById("members").value = "";
        document.getElementsByClassName('type-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML = "TYPE:";
        document.getElementsByClassName('customer-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML = "Customers:";
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

    function dateDisplay(date){
        var resultDate="";
        if(date.getDate()<10) resultDate+="0"+date.getDate()+".";
        else resultDate+=date.getDate()+".";

        if(date.getMonth()+1<10) resultDate+="0"+(date.getMonth()+1)+".";
        else resultDate+=date.getMonth()+1+".";

        resultDate+=date.getFullYear();
        return resultDate;
    }

    function load_data(){
        let fields = [];
        let date;

        fields[0] = document.getElementById("project-name").value;
        
        date = new Date(document.getElementById("due-date").value);
        fields[1] = dateDisplay(date);

        date = new Date(document.getElementById("created").value);
        fields[2] = dateDisplay(date);

        fields[3] = document.getElementById("members").value;
        fields[4] = document.getElementsByClassName('type-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML.toUpperCase();
        fields[5] = self.get_status(fields[1], fields[2]);
        fields[6] = document.getElementsByClassName('customer-dropdown')[0].getElementsByClassName('dropdown-field')[0].innerHTML;      
        
        return fields;
    }

    this.get_status=function(dueDate,createdDate){

        let today = new Date();

        if(createdDate > today) return "future";
        if(dueDate < today) return "over";
        return "current";
    }

    function is_dates_correct(){
        let due_date = new Date(document.getElementById("due-date").value);
        let created_date = new Date(document.getElementById("created").value);

        if(created_date > due_date)
            return false;
        return true;
    }

    this.add_row  = function(fields) {

        var table = document.getElementById("data");
        var row = table.insertRow(0);

        if(fields[5] == "over") 
            row.classList.add("finished");


        for(let i = 0, arguments_counter = 0; i < 9; i++){
            if(i == 1){
                row.insertCell(i).appendChild(document.createElement("div"));
                continue;
            }
            if(i == 8){
                var cell = row.insertCell(i);
                var but = document.createElement('button');
                but.addEventListener('click', function(){
                    deleteRow(this);
                });

                cell.appendChild(but);
                continue;
            }
    
            row.insertCell(i).innerHTML = fields[arguments_counter];
            arguments_counter++;
        }
    }
}

