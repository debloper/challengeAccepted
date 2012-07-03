// Here goes the copyright/author info & stuff - I'm lazy now, sue me!

(function() {
	var el = document.getElementById("accordion")
	,	headers = el.querySelectorAll("h3")
	,	contents = el.querySelectorAll("h3 + div");

	var texts;
	for (var i in contents) {
		if (i == 0) continue; // Hard-coding display 1st one for now
		texts = contents[i].querySelectorAll("*");
		for (var j in texts) {
			if (texts[j].style) {
				texts[j].style.display = "none";
			} // Cause white-spaces are screwing up DOM manipulation
		} // I don't wanna directly apply "display: none" to the div
		// because, I'd later try to use CSS-transition on its height
	}
})();
