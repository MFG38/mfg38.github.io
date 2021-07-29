var navbar = document.querySelector('#navbarPlaceholder');
var navbarHTML = navbar.innerHTML;

navbar.innerHTML =
	'<nav class="navbar">' +
	'	<a href="index.html">Home</a>' +
	'	<a href="doom_wad_index.html">Doom WADs</a>' +
	'	<a href="game_index.html">Games</a>' +
	'	<a href="tutorial_index.html">Tutorials</a>' +
	'</nav>';
