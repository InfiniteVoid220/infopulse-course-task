/*             ISCROLL            */
	var myScroll; 

	function refreshScroll() {
	    myScroll = new IScroll('#wrapper-scroll', {scrollbars: false, mouseWheel: true, interactiveScrollbars: true });
	}
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false ? {
	    capture: false,
	    passive: false
	} : false);