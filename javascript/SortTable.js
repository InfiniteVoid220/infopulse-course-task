
function SortTable() {//класс для сортировки
    var self = this;

    this.init = function(){

        this.rows = document.getElementById("data").getElementsByTagName("TR");

        this.swaping = true;
        this.swapCount = 0;

        this.direction = "asc"; 
        
        this.initEvents();
    } 

    this.initEvents = function(){
        var thead_buttons = document.getElementById('tb-block').getElementsByTagName('th');
        
        for(var i = 0; i < thead_buttons.length-1; i++){
            thead_buttons[i].addEventListener('click', function(){
                self.sortByColumn(this.cellIndex);
            });
        }
    }

    this.sortByColumn = function(n) {
        setVariablesToDefault(); 
        var compareRows = defineCompareMethod(n);

        while (this.swaping) {//Исполнять пока изменяется порядок.
            this.swaping = false;
            for (var i = 0; i < (this.rows.length-1); i++) {
                
                let currentRow = this.rows[i].getElementsByTagName("TD")[n];
                let nextRow = this.rows[i + 1].getElementsByTagName("TD")[n];

                if (compareRows(currentRow,nextRow)) {   
                    swapRows(i);
                } 
            }
            /*смена направления сортировки, если не произошло изменений.*/  
            if (this.swapCount == 0 && this.direction == "asc") {
                this.direction = "desc";
                this.swaping = true;
            }
        }
    }

    function defineSortType(tableColumn){
        if(tableColumn==2 || tableColumn==3) {
            return "ByDate";
        } else { 
            return "ByText";
        }
    }

    function compareDate(currentRow,nextRow){
        if(self.direction == "asc" 
           && convertToDate(currentRow.innerHTML) > convertToDate(nextRow.innerHTML)){
            return true;
        } else if(self.direction == "desc" 
                  && convertToDate(currentRow.innerHTML) < convertToDate(nextRow.innerHTML)) {
            return true;
        }
        return false;
    }

    function compareText(currentRow,nextRow){
        if(self.direction == "asc" 
           && currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()){
            return true;
        } else if(self.direction == "desc" 
                  && currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
            return true;
        }
        return false;
    }

    function defineCompareMethod(n){//определить 
        switch(defineSortType(n)){
            case "ByDate": return function(currentRow,nextRow){ return compareDate(currentRow,nextRow); }; break;
            case "ByText": return function(currentRow,nextRow){ return compareText(currentRow,nextRow); }; break;
        } 
    }

    function swapRows(i){
        self.rows[i].parentNode.insertBefore(self.rows[i + 1], self.rows[i]);
        self.swaping = true;
        self.swapCount ++;  
    }

    function setVariablesToDefault(){
        self.swaping=true;
        self.direction="asc";
        self.swapCount=0;
    }

    this.init();
}