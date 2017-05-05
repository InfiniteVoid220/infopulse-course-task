
function LoadTableData(tableHandler){
    function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    function loadTable(tableDataJSON){
/*
        var wrapper = "<tbody>";
        for (let i = 0;i < tableDataJSON.projects.length; i++){
            wrapper = wrapper + "<tr>";
            for (var key in tableDataJSON.projects[i]) {
                wrapper += "<td>" + tableDataJSON.projects[i][key] + "</td>";
        	    if(key == "projectName"){
    			    wrapper += "<td><div></div></td>";
    		    }
            }
            wrapper = wrapper + "<td><button></button></td>";
            wrapper = wrapper + "</tr>";
        }
        wrapper = wrapper + "</tbody>";
        document.getElementById("data").innerHTML = wrapper;
*/

/*
        let tbody = document.createElement("tbody");
        let row;
        
        for(let i = 0; i < tableDataJSON.projects.length; i++){
            row = tbody.insertRow(i);
            let cells_counter = 0;
            for(var key in tableDataJSON.projects[i]){
                row.insertCell(cells_counter).innerHTML = tableDataJSON.projects[i][key];
                cells_counter++;
                if(key == "projectName"){
                    cell = row.insertCell().appendChild(document.createElement("div"));    
                    cells_counter++;
                }
            }
            row.insertCell(cells_counter).appendChild(document.createElement("button"));
        }

        document.getElementById("data").appendChild(tbody);
        initEventRowDel();
*/

        for(let i = 0; i < tableDataJSON.projects.length; i++){
            let data = [];
            let properties_counter = 0;
            for(let key in tableDataJSON.projects[i]){
                data[properties_counter] = tableDataJSON.projects[i][key];
                properties_counter++;
            }
            tableHandler.add_row(data);
        }        
    }

    window.addEventListener('load', function(){
        httpGetAsync('table.json', function(data){
            loadTable(JSON.parse(data));
function LoadTableDate(){
    var wrapper="";
    var tableDataJSON;
    
    function httpGetAsync(theUrl, callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
    }
    function get_status(dueDate,createdDate){
        let today = new Date();
        
        if(createdDate > today) return "future";
        if(dueDate < today) return "over";
        return "current";
    }

    function loadTable(tableDataJSON){
        wrapper="<tbody>";
        for (let i=0;i<tableDataJSON.projects.length;i++){
            
            var dueDate = convertToDate(tableDataJSON.projects[i].dueDate);
            var createDate = convertToDate(tableDataJSON.projects[i].created);
            tableDataJSON.projects[i].status=get_status(dueDate,createDate);
            if(tableDataJSON.projects[i].status=="over"){
                wrapper=wrapper+"<tr class='finished'>";
            } else {wrapper=wrapper+"<tr>";}
            wrapper=wrapper+status+"</td>";

            for (var key in tableDataJSON.projects[i]) {
                wrapper=wrapper+"<td>"+tableDataJSON.projects[i][key]+"</td>";
            	
                if(key=="projectName"){
        			wrapper=wrapper+"<td><div></div></td>";
        		}
            }
        wrapper=wrapper+"<td><button></button></td>";
        wrapper=wrapper+"</tr>";
        }
        wrapper=wrapper+"</tbody>";
        document.getElementById("data").innerHTML=wrapper;
    } 

    document.addEventListener("DOMContentLoaded", function(){
        httpGetAsync('table.json', function(data){
            tableDataJSON=JSON.parse(data); 
            loadTable(tableDataJSON);
        }) 
    });

}

