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
})();
