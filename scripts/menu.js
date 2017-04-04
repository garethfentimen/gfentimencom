(function() {
	"use strict";

	// For ie9+
	document.addEventListener('DOMContentLoaded', function(){

		var url = window.location.href,
			splitUrl = url.split("/"),
			location = splitUrl[splitUrl.length-1].replace("#", ""),
			subLocation = splitUrl[splitUrl.length-2].replace("#", "");

		var collapsableNavToggle = document.querySelectorAll(".navbar-toggle")[0];
		
		var onClickNavToggle = function() {
			var navbar = document.querySelectorAll(".navbar-collapse")[0];
			if (!navbar.classList) {
				return;
			}

			if (navbar.classList.length > 1)
			{
				removeClass(navbar, "collapse");
			} else {
				addClass(navbar, "collapse");
			}
		}

		collapsableNavToggle.removeEventListener("click", onClickNavToggle);
		collapsableNavToggle.addEventListener("click", onClickNavToggle);

		var elements = document.querySelectorAll(".nav li");
		Array.prototype.forEach.call(elements, function(el){
			
			var menuText = el.textContent.toLowerCase();
			if (menuText === location || subLocation === menuText || (location === "" && menuText === "home")) {
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