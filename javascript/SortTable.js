
function SortTable() {//класс для сортировки
    var rows, swaping,i, x, y, shouldSwap, dir, swapCount = 0;
    //отбираем все ряды
    var rows = document.getElementById("data").getElementsByTagName("TR");
    var swaping = true;
    var dir = "asc"; //направление сортировки
    var sortType=null;

    function toDate(dateStr) {
        var parts = dateStr.split(".");
        return new Date(parts[2], parts[1]-1, parts[0]);
    }

    function defineSortType(tableColumn){
        if(tableColumn==2 || tableColumn==3) {
            sortType = "ByDate";
        } else { 
            sortType = "ByText";
        }
    }

    function compareDate(currentRow, nextRow, direction){
        if(direction == "asc" 
           && toDate(currentRow.innerHTML) > toDate(nextRow.innerHTML)){
            return true;
        } else if(direction == "desc" 
                  && toDate(currentRow.innerHTML) < toDate(nextRow.innerHTML)) {
            return true;
        }
            return false;
    }

    function compareText(currentRow, nextRow, direction){
        if(direction == "asc" 
           && currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()){
            return true;
        } else if(direction == "desc" 
                  && currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
            return true;
        }
            return false;
    }

    function swapRows(){
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        swaping = true;
        swapCount ++;  
    }

    function setVariablesToDefault(){
        swaping=true;
        dir="asc";
        swapCount=0;
    }

    this.sortByColumn = function(n) {
        setVariablesToDefault(); 
        defineSortType(n);
        while (swaping) {//Исполнять пока изменяется порядок.
            swaping = false;
            for (i = 0; i < (rows.length-1); i++) {
                shouldSwap = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                //обмен местами в зависимости от направления
                if (sortType == "ByDate") {
                    shouldSwap = compareDate(x,y,dir);
                } else if (sortType == "ByText")  {
                    shouldSwap = compareText(x,y,dir);
                }
                if (shouldSwap) {   
                    swapRows();
                } 
            }
            /*смена направления сортировки, если не произошло изменений.*/  
            if (swapCount == 0 && dir == "asc") {
                dir = "desc";
                swaping = true;
            }
        }
    };
}

