function LoadTableDate(){
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
alert("lol");
function loadTable(tableDataJSON){
    var wrapper="<tbody>";
    for (let i=0;i<tableDataJSON.projects.length;i++){
        wrapper=wrapper+"<tr>";
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
window.addEventListener('load', function(){
  httpGetAsync('table.json', function(data){
    loadTable(JSON.parse(data));
  }) 
});

}

