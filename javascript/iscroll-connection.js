/*             ISCROLL            */
(function(window, document, Math){
	var myScroll; 

	function loaded () {
	    myScroll = new IScroll('#wrapper-scroll', {scrollbars: false, mouseWheel: true, interactiveScrollbars: true });
	}
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false ? {
	    capture: false,
	    passive: false
	} : false);

	window.addEventListener('load', loaded);
})(window, document, Math);