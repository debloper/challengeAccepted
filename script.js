// Here goes the copyright/author info & stuff - I'm lazy now, sue me!

var accordion = {};

(function() {
	var el = document.getElementById("accordion")
	,	headers = el.querySelectorAll("h3")
	,	contents = el.querySelectorAll("h3 + div");

	accordion.setAccordion = function(order) {
		for (var i in contents) {
			if (i == order) {
				contents[i].className = "expanded";
				continue;
			}
			contents[i].className = "collapsed";
		}
	}
	accordion.getContent = function(header) {
		var content = header.nextSibling;
		if (!content.style) { // Let's make it recursive, if whitespace node
			content = accordion.getContent(content);
		} // to tacle https://developer.mozilla.org/en/Whitespace_in_the_DOM
		return content;
	}
	accordion.handleAction =  function(event) {
		for (var i in contents) {
			contents[i].className = "collapsed";
		} // Let's set all contents to collapsed, better trade-off than if{}
		var content = accordion.getContent(event.target.parentNode);
		// event.target == the anchor tag, so the parent is the h3
		content.className = "expanded";
		event.preventDefault();
	}

	for (var j in headers) {
		headers[j].addEventListener("click", accordion.handleAction);
	}
})();
