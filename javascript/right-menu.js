
var DropdownButton=null;
var DropdownOptions=null;
function show_or_hide_options(th) {  

    if(DropdownButton!=th && DropdownButton!=null) {
        DropdownOptions.style.display="none";
        DropdownButton.style.borderBottom="2px solid #d77016";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }

    DropdownButton=th;
    DropdownOptions=th.nextElementSibling;

    if(window.getComputedStyle(DropdownOptions, null).getPropertyValue("display")=="none"){
        DropdownOptions.style.display="block";
        DropdownButton.style.borderBottom="2px solid white";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-more.png) no-repeat right top";
    }   
    else{
        DropdownOptions.style.display="none";
        DropdownButton.style.borderBottom="2px solid #d77016";
        DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }
    
}

 function set_text(event) {
    DropdownButton.innerHTML = event.target.innerHTML;
}

   
/*Закрыть меню если нажать в другое место окна*/
window.onclick = function(event) {
    if(DropdownButton!=null){
        if (!event.target.matches("#"+DropdownButton.id)) {
            DropdownOptions.style.display="none";
            DropdownButton.style.borderBottom="2px solid #d77016";
            DropdownButton.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
        }
    }

if(!event.target.matches("#show-right"))
{
    if (event.target.matches(".side-menu-right") 
        || event.target.matches(".side-menu-right *")) {
       return;
    }
    else{
    document.getElementById("right-menu").style.display="none";
    }
}

}

function show_or_hide(){
    document.getElementById("right-menu").style.display="block";
}