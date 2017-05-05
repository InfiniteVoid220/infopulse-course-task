//проверь ИМЕНА
function filterByType() {//фильтрация записей по типу
    var self = this;

    this.init = function(){
        this.checkboxesArray = ["WEB","DESKTOP","MOBILE","SUPPORT"];        
        this.rows = document.getElementById("data").getElementsByTagName("tr");
        this.initEvents();
    } 

    this.initEvents = function(){
        var checkboxes = document.getElementById("checkboxes").getElementsByTagName("label");
        for(let i = 0; i < checkboxes.length; i++){//убрать цыклы
            checkboxes[i].addEventListener('click', function(){
                self.toggleFilterList(i,this);
                self.filtering();
            });
        }

        document.getElementById("search-date").addEventListener('change', function(){
            self.filtering();
        });

         document.getElementById("lupa").addEventListener('click', function(){
            self.filtering();
        });
        document.getElementById("search-field").addEventListener('keypress',function(){
            if(event.keyCode==13) 
                self.filtering();
        });

    }
    
    function displayAllRows(){
        for(var j = 0; j < self.rows.length; j++){
            self.rows[j].style.display = "";
        }
    }

    this.filtering = function(){ 
        displayAllRows();
        this.rows = document.getElementById("data").getElementsByTagName("tr");
        for(var j = 0; j < self.rows.length; j++){
            if(!isTypeInList(j) || !isDataInInterval(j) || !search(j)){
                self.rows[j].style.display = "none";
            }
        }
    }

    function isTypeInList(j){//проверяет есть ли такой тип проекта в списке фильтрации 
        var projectType = self.rows[j].getElementsByTagName("td")[5].innerHTML;
        return self.checkboxesArray.indexOf(projectType) > -1;
    }

    function isDataInInterval(j){
        var columns=self.rows[j].getElementsByTagName("td");
        var dueDate = convertToDate(columns[2].innerHTML);
        var createdDate = convertToDate(columns[3].innerHTML);
        var filterDate = new Date(document.getElementById("search-date").value);

        if(isNaN(filterDate)) return true;
        return filterDate <= dueDate && filterDate >= createdDate;

    }
    //переделать
    this.toggleFilterList = function (index,checkbox){ //добавить тип в список если его нет или удалить если есть
        if(self.checkboxesArray[index] === undefined){
            self.checkboxesArray[index] = checkbox.innerHTML;
        } else {
            self.checkboxesArray[index] = undefined;
        }
    }

    function search(j){
        var filterText = document.getElementById("search-field").value.toUpperCase();
        projectName = self.rows[j].getElementsByTagName("td")[0].innerHTML.toUpperCase();
        return projectName.indexOf(filterText) > -1; 
    }

    this.init();
}