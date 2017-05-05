(function (window, document) { 
var sort = new SortTable();

var typeDropdown = new DropdownList({'el': document.getElementById("dropdown-type")});
var customersDropdown= new DropdownList({'el': document.getElementById("dropdown-customer")});

var toggleHandler = new menusToggleHandler();
var tableHandler = new tableActions();
var filterHandler = new filterByType();
var tableDateLoader = new LoadTableData(tableHandler);

})(window, document);

function convertToDate(dateStr) {
    let parts = dateStr.split(".");	
    return new Date(parts[2], parts[1]-1, parts[0]);
}

