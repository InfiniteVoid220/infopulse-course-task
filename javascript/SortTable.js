
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
            if(i==1) continue;
            this.theadButtons[i].addEventListener('click', function(){
                self.sortByColumn(this.cellIndex);
            });
        }
    }

    function removeSortArrow(){
        for(var i = 0; i < self.theadButtons.length-1;i++){
            self.theadButtons[i].classList.remove("sortASC");
            self.theadButtons[i].classList.remove("sortDESC");
        }
    }
    function defineDirection(n){
        var sortDir = ""+self.currentTH.classList;
        sortDir = sortDir.substring(4,sortDir.length);      
        return sortDir=="ASC"?"DESC":"ASC";
    }
    this.sortByColumn = function(n) {
        self.currentTH = self.theadButtons[n];

        self.direction = defineDirection(n);
        //self.currentTH.classList.remve("sort"+this.direction);
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
        }  

        self.currentTH.classList.add("sort"+this.direction);
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
        removeSortArrow();
        self.swaping=true;
        self.swapCount=0;
    }

    this.init();
}