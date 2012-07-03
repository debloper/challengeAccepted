// Do What The Fuck You Want To Public License [WTFPL]: http://sam.zoy.org/wtfpl
// Copyright (C) 2012 Soumya Deb <debloper@gmail.com>

var accordion = {};		/// The global object, contains exposable data & methods

(function() {
	var el = document.getElementById("accordion")
	,	headers = el.querySelectorAll("h3");	///// `el` could've been dynamic

	accordion.target = headers[0];			//// Default value for targer header

	accordion.init = function(order) {
		for (var i in headers) {
			if (!order) order = 0;			//// Default value for targer header
			if (i == order) {
				headers[i].className = "expanded";
				continue;			//// Sets only the target header as expanded
			}
			headers[i].className = "collapsed";	/// Collapse rest of the headers
		}
	}
	accordion.content = function(target) {
		var content = target.nextSibling;
		if (!content.style) { 		//// Let's recurse it, to avoid white-spaces
			content = accordion.content(content);
		} 	//// To tacle https://developer.mozilla.org/en/Whitespace_in_the_DOM
		accordion.target = content; /// Sets the target-content for the callback
		return accordion.target;
	}
	accordion.setup = function(event) {
		for (var i in headers) {
			headers[i].className = "collapsed";
		} 		// Let's collapse all headers, better trade-off than nested if{}
		event.target.className = "expanded";	// And, expand the target header
		accordion.target = accordion.content(event.target); /// Get content-node
		accordion.fetch();			// Initiate remote-server request over JSONP
	}
	accordion.callback = function(data) {
		accordion.target.innerHTML = "<p>" + data + "</p>";	// Sets fetched data
	}
	accordion.fetch = function() {
		var jsonp = document.createElement('script');
		var remote = "http://gears.debs.io/challengeAccepted/"
		,	callback = "?callback=accordion.callback";
		jsonp.src = remote + callback;			/// Rig the JavaScript for JSONP
		document.getElementsByTagName('head')[0].appendChild(jsonp);	// FIRE!
	}

	for (var j in headers) {
		headers[j].addEventListener("click", accordion.setup);
		//// Adds event listener hooks to the headers to handle the click events
	}
})();
