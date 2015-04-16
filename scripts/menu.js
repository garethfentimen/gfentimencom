"use strict";

$(document).ready(function() {

	var url = window.location.href;
	var splitUrl = url.split("/");
	var location = splitUrl[splitUrl.length-1];
	
	//console.log(location);

	$(".nav li").each(function(index)
	{
		
		var menuText = $(this).text().toLowerCase();
		if (menuText === location || (location === "" && menuText === "home"))
		{
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});

});