
function LoadTableData(tableHandler) { 
    function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); 
        xmlHttp.send(null);
    }

    function loadTable(tableDataJSON){
        
        for(let i = 0; i < tableDataJSON.projects.length; i++){
            let data = [];
            let properties_counter = 0;
            for(let key in tableDataJSON.projects[i]){

                if(key == "status") { //определить статус проекта автоматически
                    tableDataJSON.projects[i][key] = tableHandler.getStatus(tableDataJSON.projects[i].dueDate, tableDataJSON.projects[i].created);
                }

                data[properties_counter] = tableDataJSON.projects[i][key];

                properties_counter++;
            }
            tableHandler.addRow(data);
        }     
        refreshScroll();         
    }

    window.addEventListener('load', function(){
        httpGetAsync('table.json', function(data){
            loadTable(JSON.parse(data));
        })
    });
}