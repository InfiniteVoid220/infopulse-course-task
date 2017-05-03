function tableActions(){

    this.deleteRow = function (x) {
        var currentRow=x.parentElement.parentElement.rowIndex;
        document.getElementById("data").deleteRow(currentRow);
    }

    this.create_row = function(){
        alert("create_row exec");

        let proj_name = document.getElementById("project-name").value;
        let due_date = document.getElementById("due-date").value;
        let created = document.getElementById("created").value;
        let members = document.getElementById("members").value;
        let type;
        let status;
        add_row(proj_name, due_date, created, members, type, status);
    }

    function add_row() {
        alert("add_row exec");

        var table = document.getElementById("data");
        var row = table.insertRow(0);
        row.style.background = "blue";
        var arguments = ["cell0","cell2","cell3","cell4","cell5","cell6"];
        for(var i = 0, arguments_counter = 0; i < 7; i++){
            if(i == 1){
                row.insertCell(i);
            }
            else{
                row.insertCell(i).innerHTML = arguments[arguments_counter];
                arguments_counter++;
            }
        }

        /*
        row.style.background = "blue";
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        cell0.innerHTML = "Cell0";   
        cell2.innerHTML = "Cell2";
        cell3.innerHTML = "Cell3";
        cell4.innerHTML = "Cell4";
        cell5.innerHTML = "Cell5";
        cell6.innerHTML = "Cell6";
        */

        /*
        for(var i = 0; i < arguments.length; i++){
            row.insertCell(i).innerHTML = arguments[i];
        }*/
    }
}

