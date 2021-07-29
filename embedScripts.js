function EmbedNavbar () {
	document.getElementById('navbarPlaceholder').innerHTML =
		'<nav class="navbar">' +
		'	<a href="../index.html">Home</a>' +
		'	<a href="../doom_wad_index.html">Doom WADs</a>' +
		'	<a href="../game_index.html">Games</a>' +
		'	<a href="../tutorial_index.html">Tutorials</a>' +
		'</nav>';
}

function EmbedFooter () {
	document.getElementById('footerPlaceholder').innerHTML =
		'<footer>"&copy; Santtu Pesonen, 2021"</footer>;
}
