
function SortTable() {//класс для сортировки
    var self = this;

    this.init = function(){

        this.rows = document.getElementById("data").getElementsByTagName("TR");
        this.theadButtons = document.getElementById('tb-block').getElementsByTagName('th');
        this.currentTH = null;
        this.swaping = true;
        this.swapCount = 0;
        this.direction = "ASC"; 
        
        this.initEvents();
    } 

    this.initEvents = function(){
        for(var i = 0; i < this.theadButtons.length-1; i++){
            if(i == 1) continue;
            this.theadButtons[i].addEventListener('click', function(){
                self.sortByColumn(this.cellIndex);
            });
        }
    }

    this.sortByColumn = function(cellIndex) {
        removeSortArrow();
        
        self.currentTH = self.theadButtons[cellIndex];
        self.direction = reverseDirection();
        
        setVariablesToDefault(); 

        var compareRows = defineCompareMethod(cellIndex);

        while (this.swaping) {//Исполнять пока изменяется порядок.
            this.swaping = false;
            for (let i = 0; i < this.rows.length-1; i++) {
                
                let currentRow = this.rows[i].getElementsByTagName("TD")[cellIndex];
                let nextRow = this.rows[i + 1].getElementsByTagName("TD")[cellIndex];
                
                if (compareRows(currentRow,nextRow)) {   
                    swapRows(i);
                } 
            }
        }  
        //отобразить стрелку по направлению сортировки
        self.currentTH.classList.remove("sort"+reverseDirection());
        self.currentTH.classList.add("sort"+this.direction);
    }

    function removeSortArrow(){
        if(self.currentTH)
            if(self.direction == "ASC") self.currentTH.classList.remove("sortASC");
            else self.currentTH.classList.remove("sortDESC");
    }

    function reverseDirection(){
         return self.direction == "ASC" ? "DESC" : "ASC";
    }

    function defineSortType(tableColumn){
        if(tableColumn==2 || tableColumn==3) {
            return "ByDate";
        } else { 
            return "ByText";
        }
    }

    function compareDate(currentRow,nextRow){
        if(self.direction == "ASC" 
           && convertToDate(currentRow.innerHTML) > convertToDate(nextRow.innerHTML)){
            return true;
        } else if(self.direction == "DESC" 
                  && convertToDate(currentRow.innerHTML) < convertToDate(nextRow.innerHTML)) {
            return true;
        }
        return false;
    }

    function compareText(currentRow,nextRow){
        if(self.direction == "ASC" 
           && currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()){
            return true;
        } else if(self.direction == "DESC" 
                  && currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
            return true;
        }
        return false;
    }

    function defineCompareMethod(cellIndex){//определить 
        switch(defineSortType(cellIndex)){
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
        self.swapCount=0;
    }

    this.init();
}