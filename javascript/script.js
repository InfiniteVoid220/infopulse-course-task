(function (window, document) { 

var sort = new SortTable();
var dropdownHendler1 = new DropdownList({'el': document.getElementsByClassName('type-dropdown')[0]});
var dropdownHendler = new DropdownList({'el': document.getElementsByClassName('customer-dropdown')[0]});

var toggleHandler = new menusToggleHandler();
var tableHandler = new tableActions();

window.addEventListener('load', loaded);

document.getElementById('show-or-hide-left').addEventListener('click', toggleHandler.showOrHideLeft);
document.getElementById('show-right').addEventListener('click', toggleHandler.showRightMenu);

var buttons_del = document.getElementById('data').getElementsByTagName('button');
for(let i = 0; i < buttons_del.length; i++){
  buttons_del[i].addEventListener('click', function(){
    tableHandler.deleteRow(this);
  });
}
var thead_buttons = document.getElementById('tb-block').getElementsByTagName('th');
for(var i = 0; i < thead_buttons.length-1; i++){
  thead_buttons[i].addEventListener('click', function(){
    sort.sortByColumn(this.cellIndex);
  });
}

document.getElementById('butt-add-row').addEventListener('click', function(){
  tableHandler.create_row();
});
//document.getElementById('lupa').addEventListener('click', filter);


/*Закрыть меню или список если нажать в другое место окна*/
window.onclick = function(event) {
    toggleHandler.hideRightMenu(event);
}

})(window, document);
