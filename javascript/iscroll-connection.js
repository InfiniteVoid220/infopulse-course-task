/*             ISCROLL            */
var myScroll; 
function loaded () {
    myScroll = new IScroll('#wrapper-scroll', {scrollbars: false, mouseWheel: true, interactiveScrollbars: true });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);