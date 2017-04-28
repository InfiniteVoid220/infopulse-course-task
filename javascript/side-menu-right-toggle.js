//(function (window, document) { 

    var hide=false;
    
    function showOrHideLeft(){//работа слевой панелью
       
        var menu=document.getElementById("left-menu");
        var tabel=document.getElementById("tb-block");
        
        if(hide){
                menu.style.transform="translateX(0)";
                tabel.style.transform ="scaleX(1)";
                hide=false;
            } else {
                menu.style.transform="translateX(-370px)";
                tabel.style.transform = "scaleX(1.238) translateX(-130px)";
                hide=true;
            }
    }

//})(window, document);
