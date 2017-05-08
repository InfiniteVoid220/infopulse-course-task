function tableActions(){
    var self = this;
    var tbody;
    var field_project_name;
    var field_due_date;
    var field_created;
    var field_members;
    var field_type_dropdown;
    var field_customer_dropdown;

    var button_create_row;
    var button_create_row_is_active;

    const numberOfCells = 9;

    this.init = function(){
        this.tbody = document.getElementById("data");
        this.field_project_name = document.getElementById("project-name");
        this.field_due_date = document.getElementById("due-date");
        this.field_created = document.getElementById("created");
        this.field_members = document.getElementById("members");
        this.field_type_dropdown = document.getElementById("dropdown-type").getElementsByClassName('dropdown-field')[0];
        this.field_customer_dropdown = document.getElementById("dropdown-customer").getElementsByClassName('dropdown-field')[0];

        this.button_create_row = document.getElementById("butt-add-row");

        this.tbody.addEventListener('click', function(){
                if(event.target.tagName == "BUTTON") {
                    deleteRow(event.target); 
                    refreshScroll();//обновить скрол под добавленый контент
                }
        });

        document.getElementById('butt-add-row').addEventListener('click', function(){
           createRow(); 
           refreshScroll();//обновить скрол под добавленый контент
        });

        this.field_project_name.addEventListener('input', highlightCreateButton);
        this.field_due_date.addEventListener('input', highlightCreateButton);
        this.field_created.addEventListener('input', highlightCreateButton);
        this.field_members.addEventListener('input', highlightCreateButton);
        document.getElementById("dropdown-type").getElementsByClassName('dropdown-options')[0].addEventListener('click', highlightCreateButton);
        document.getElementById("dropdown-customer").getElementsByClassName('dropdown-options')[0].addEventListener('click', highlightCreateButton);
    
        highlightCreateButton();
        button_create_row_is_active = false;
    }

    function highlightCreateButton() {
        let fields = loadData();
        if( isAllFilledIn(fields) ){
            self.button_create_row.style.opacity = 1;
            button_create_row_is_active = true;
        }
        else{
            self.button_create_row.style.opacity = 0.5;
            button_create_row_is_active = false;
        }
    }
    
    function createRow(){
        if(button_create_row_is_active){
            let fields = loadData();

            if ( !isAllFilledIn(fields) ){
                alert("Fill all fields");
                return;
            }

            if ( !isDatesCorrect() ){
                alert("incorrect dates!");
                return;
            }

            self.addRow(fields);
            
            clearFields();
            highlightCreateButton();
        }
    }

    function clearFields(){
        self.field_project_name.value = "";
        self.field_due_date.value = "";
        self.field_created.value = "";
        self.field_members.value = "";
        self.field_type_dropdown.innerHTML = "TYPE:";
        self.field_customer_dropdown.innerHTML = "Customers:";
    }

    function deleteRow(x) {
        if ( confirm("Удалить проект?") ){
            let currentRow = x.parentElement.parentElement.rowIndex;
            self.tbody.deleteRow(currentRow);
        }
    }

    function isAllFilledIn(fields){
        let is_all_filled_in = true;

        for (let i = 0; i < fields.length; i++){
            switch (i){
                case 1:
                case 2:
                    if ( fields[i].substring(0, 3) == "NaN") is_all_filled_in = false;
                    break;
                case 4:
                    if (fields[i] == "TYPE:") is_all_filled_in = false;
                    break;
                case 6:
                    if (fields[i] == "Customers:") is_all_filled_in = false;
                    break;
                default:
                    if (fields[i] == "") is_all_filled_in = false;
            }

            if (!is_all_filled_in) break;
        }

        return is_all_filled_in;       
    }

    function dateDisplay(date){
        var resultDate = "";
        if (date.getDate() < 10) resultDate += "0" + date.getDate() + ".";
        else resultDate += date.getDate() + ".";

        if ((date.getMonth() + 1) <10) resultDate += "0" + (date.getMonth() + 1) + ".";
        else resultDate += date.getMonth() + 1 + ".";

        resultDate += date.getFullYear();
        return resultDate;
    }

    function loadData(){
        let fields = [];
        let date;

        fields[0] = self.field_project_name.value;
        
        date = new Date(self.field_due_date.value);
        fields[1] = dateDisplay(date);

        date = new Date(self.field_created.value);
        fields[2] = dateDisplay(date);

        fields[3] = self.field_members.value;
        fields[4] = self.field_type_dropdown.innerHTML.toUpperCase();
        fields[5] = self.getStatus(fields[1], fields[2]);
        fields[6] = self.field_customer_dropdown.innerHTML;      
        
        return fields;
    }

    // принимает дату в формате dd.mm.yyyy
    this.getStatus = function(dueDate, createdDate){

        let today = new Date();
        dueDate = convertToDate(dueDate);
        createdDate = convertToDate(createdDate);

        if (createdDate > today) return "future";
        if (dueDate < today) return "over";
        return "current";
    }

    function isDatesCorrect(){
        let due_date = new Date(self.field_due_date.value);
        let created_date = new Date(self.field_created.value);

        if (created_date > due_date)
            return false;
        return true;
    }

    this.addRow = function(fields) {

        var row = self.tbody.insertRow(0);

        if (fields[5] == "over") 
            row.classList.add("finished");

        for (let i = 0, arguments_counter = 0; i < numberOfCells; i++){
            if (i == 1){
                row.insertCell(i).appendChild(document.createElement("div"));
                continue;
            }
            if (i == 8){
                var cell = row.insertCell(i);
                var but = document.createElement('button');
                cell.appendChild(but);
                continue;
            }
    
            row.insertCell(i).innerHTML = fields[arguments_counter];
            arguments_counter++;
        }
    }

    this.init();
}