
var opendList=null;
var opendOptions=null;
function show_or_hide_options(th) {  

    if(opendList!=th && opendList!=null) {
        opendOptions.style.display="none";
        opendList.style.borderBottom="2px solid #d77016";
        opendList.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }

    opendList=th;
    opendOptions=th.nextElementSibling;

    if(window.getComputedStyle(opendOptions, null).getPropertyValue("display")=="none"){
        opendOptions.style.display="block";
        opendList.style.borderBottom="2px solid white";
        opendList.style.background="rgba(215, 112, 22,.15) url(../images/expand-more.png) no-repeat right top";
    }   
    else{
        opendOptions.style.display="none";
        opendList.style.borderBottom="2px solid #d77016";
        opendList.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }
}

 function set_text(event) {
    opendList.innerHTML = event.target.innerHTML;
}

/*Закрыть меню если нажать в другое место окна*/
window.onclick = function(event) {
    if (!event.target.matches("#"+opendList.id) && opendList!=null) {
        opendOptions.style.display="none";
        opendList.style.borderBottom="2px solid #d77016";
        opendList.style.background="rgba(215, 112, 22,.15) url(../images/expand-less.png) no-repeat right top";
    }
}   
