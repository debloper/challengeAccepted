// Here goes the copyright/author info & stuff - I'm lazy now, sue me!

var accordion = {};

(function() {
	var el = document.getElementById("accordion")
	,	headers = el.querySelectorAll("h3");

	accordion.init = function(order) {
		for (var i in headers) {
			if (!order) order = 0;
			if (i == order) {
				headers[i].className = "expanded";
				continue;
			}
			headers[i].className = "collapsed";
		}
	}
	accordion.handleAction =  function(event) {
		for (var i in headers) {
			headers[i].className = "collapsed";
		} // Let's set all contents to collapsed, better trade-off than if{}
		event.target.parentNode.className = "expanded";
		// event.target == the anchor tag, so the parent is the h3
		event.preventDefault();
	}

	for (var j in headers) {
		headers[j].addEventListener("click", accordion.handleAction);
	}
})();
