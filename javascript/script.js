(function (window, document) { 

var sort = new SortTable();
var DropdownHendler = new DropdownList();
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
document.getElementById('customer-field').addEventListener('click', function(){
  DropdownHendler.showOrHide(this);
});
document.getElementById('type-field').addEventListener('click', function(){
  DropdownHendler.showOrHide(this);
});
document.getElementById('type-options').addEventListener('click', function(){
  DropdownHendler.setText(event);
});
document.getElementById('customer-options').addEventListener('click', function(){
  DropdownHendler.setText(event);
});
document.getElementById('butt-add-row').addEventListener('click', function(){
  add_row(this);
});
//document.getElementById('lupa').addEventListener('click', filter);

/*Закрыть меню или список если нажать в другое место окна*/
window.onclick = function(event) {
    DropdownHendler.hideOnOutClick(event);
    toggleHandler.hideRightMenu(event);
}

})(window, document);
