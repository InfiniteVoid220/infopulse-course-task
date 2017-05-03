
function filterByType() {//фильтрация записей по типу
    var self = this;

    this.init = function(){
        this.checkboxesArray = ["WEB","DESKTOP","MOBILE","SUPPORT"];
        this.rows = document.getElementById("data").getElementsByTagName("tr");
        
        this.initEvents();
    } 

    this.initEvents = function(){
        var checkboxes = document.getElementById("checkboxes").getElementsByTagName("label");
        for(let i = 0; i < checkboxes.length; i++){
            checkboxes[i].addEventListener('click', function(){
                self.toggleFilterList(i,this);
                self.filtering("Type");
            });
        }

        document.getElementById("search-date").addEventListener('change', function(){
            self.filtering("Date");
        });

         document.getElementById("lupa").addEventListener('click', function(){
            self.filtering("ProjectName");
        });
    }

    this.filtering = function(filterBy){ 
        var filter = defineFilter(filterBy);

        for(var j=0;j < self.rows.length;j++){
            self.rows[j].style.display = filter(j); 
        }   
    }

    function isTypeInList(j){//проверяет есть ли такой тип проекта в списке фильтрации 
        var projectType = self.rows[j].getElementsByTagName("td")[5].innerHTML;
        for(var i = 0;i < self.checkboxesArray.length;i++){
            if(projectType == self.checkboxesArray[i]){
                 return "";
            }
        }
        return "none";
    }

    function isDataInInterval(){

        var dueDate = convertToDate(self.rows[0].getElementsByTagName("td")[2].innerHTML);
        var createdDate = convertToDate(self.rows[0].getElementsByTagName("td")[3].innerHTML);
        var filterDate = new Date(document.getElementById("search-date").value);

        if(filterDate < dueDate && filterDate > createdDate){
            return ""; 
        } else return "none";

    }

    this.toggleFilterList = function (index,checkbox){ //добавить тип в список если его нет или удалить если есть
        if(self.checkboxesArray[index] === undefined){
            self.checkboxesArray[index] = checkbox.innerHTML;
        } else {
           self.checkboxesArray[index] = undefined;
        }
    }

    function defineFilter(filterBy){//определить 
        switch(filterBy){
            case "Date": return function(){ return isDataInInterval(); }; break;
            case "Type": return function(Value){ return isTypeInList(Value); }; break;
            case "ProjectName": return function(Value){ return search(Value); }; break;
        } 
    }

    function search(j){
        var filterText = document.getElementById("search-field").value.toUpperCase();
        projectName = self.rows[j].getElementsByTagName("td")[0].innerHTML.toUpperCase();
        if (projectName.indexOf(filterText) > -1) {
            return "";
        } else {
            return "none";
        }  
    }
    
    this.init();
}