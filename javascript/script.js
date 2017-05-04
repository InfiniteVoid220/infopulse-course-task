(function (window, document) { 

var sort = new SortTable();

var typeDropdown = new DropdownList({'el': document.getElementsByClassName('type-dropdown')[0]});
var customersDropdown= new DropdownList({'el': document.getElementsByClassName('customer-dropdown')[0]});

var toggleHandler = new menusToggleHandler();
var tableHandler = new tableActions();
var filterHandler = new filterByType();

})(window, document);
function convertToDate(dateStr) {
    let parts = dateStr.split(".");
    return new Date(parts[2], parts[1], parts[0]);
}