$(document).ready(function(){
	var hash = window.location.hash;
	hash = hash.replace('#','');
	hash && document.getElementById(hash).scrollIntoView(true);		
})