document.addEventListener('DOMContentLoaded', function(){
	var nav_trigger = document.getElementById("nav-trigger");
	nav_trigger.addEventListener("click", function(){
		var col_nav = document.getElementById("col-nav"),
		active_class = "col-nav-active";
		nav_trigger.checked ? col_nav.classList.add(active_class) : col_nav.classList.remove(active_class);
	});
});