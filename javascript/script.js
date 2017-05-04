(function (window, document) { 

var sort = new SortTable();

var typeDropdown = new DropdownList({'el': document.getElementsByClassName('type-dropdown')[0]});
var customersDropdown= new DropdownList({'el': document.getElementsByClassName('customer-dropdown')[0]});

var toggleHandler = new menusToggleHandler();
var tableHandler = new tableActions();
var filterHandler = new filterByType();

var buttons_del = document.getElementById('data').getElementsByTagName('button');
for(let i = 0; i < buttons_del.length; i++){
	buttons_del[i].addEventListener('click', function(){
		tableHandler.deleteRow(this);
	});
}
    //document.getElementById('lupa').addEventListener('click', isDataInInterval);
document.getElementById('butt-add-row').addEventListener('click', function(){
	tableHandler.create_row();
});

})(window, document);

function convertToDate(dateStr) {
    let parts = dateStr.split(".");
    return new Date(parts[2], parts[1], parts[0]);
}