function EmbedNavbar () {
	document.getElementById('navbarPlaceholder').innerHTML =
		'<nav class="navbar">' +
		'	<a href="../index.html">Home</a>' +
		'	<a href="../doom_wad_index.html">Doom WADs</a>' +
		'	<a href="../game_index.html">Games</a>' +
		'	<a href="../midi_index.html">MIDIs</a>' +
		'	<a href="../software_index.html">Software</a>' +
		'	<a href="../tutorial_index.html">Tutorials</a>' +
		'	<a href="../hardware.html">The hardware</a>' +
		'</nav>';
}

function EmbedFooter () {
	document.getElementById('footerPlaceholder').innerHTML =
		'<footer>' +
		'	<h4>&copy; 2021-2022 Santtu Pesonen</h4>' +
		'</footer>';
}
