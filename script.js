// Here goes the copyright/author info & stuff - I'm lazy now, sue me!

var accordion = {};

(function() {
	var el = document.getElementById("accordion")
	,	headers = el.querySelectorAll("h3");

	accordion.target = headers[0];	// Default value for targer header

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
	accordion.setup = function(event) {
		for (var i in headers) {
			headers[i].className = "collapsed";
		} // Let's set all contents to collapsed, better trade-off than if{}
		event.target.className = "expanded";
		accordion.target = event.target;
		accordion.fetch();
	}
	accordion.callback = function(data) {
		accordion.target.innerHTML = data;
	}
	accordion.fetch = function() {
		var jsonp = document.createElement('script');
		var remote = "http://gears.debs.io/challengeAccepted/"
		,	callback = "?callback=accordion.callback";
		jsonp.src = remote + callback;
		document.getElementsByTagName('head')[0].appendChild(jsonp);
	}

	for (var j in headers) {
		headers[j].addEventListener("click", accordion.setup);
	}
})();
