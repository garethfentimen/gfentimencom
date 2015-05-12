(function() {
	"use strict";

	// don't use jquery - fine for ie9+
	document.addEventListener('DOMContentLoaded', function(){

		var url = window.location.href;
		var splitUrl = url.split("/");
		var location = splitUrl[splitUrl.length-1];

		var elements = document.querySelectorAll(".nav li");
		Array.prototype.forEach.call(elements, function(el){
			
			var menuText = el.textContent.toLowerCase();
			if (menuText === location || (location === "" && menuText === "home")) {
				addClass(el, "active");
			} else {
				removeClass(el, "active");
			}

		});

		function addClass(el, className) {
			if (el.classList) {
				el.classList.add(className);
			}
			else {
				el.className += ' ' + className;
			}
		}

		function removeClass(el, className) {
			if (el.classList) {
	  			el.classList.remove(className);
	  		}
			else {
	  			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  		}
		}

	});

})();