function EmbedNavbar () {
	document.getElementById('navbarPlaceholder').innerHTML =
		'<nav class="navbar">' +
		'	<a href="../index.html">Home</a>' +
		'	<a href="../doom_wad_index.html">Doom WADs</a>' +
		'	<a href="../game_index.html">Games</a>' +
		'	<a href="../midi_index.html">MIDIs</a>' +
		'	<a href="../script_index.html">Scripts</a>' +
		'	<a href="../tutorial_index.html">Tutorials</a>' +
		'	<a href="../hardware.html">The hardware</a>' +
		'</nav>';
}

function EmbedFooter () {
	document.getElementById('footerPlaceholder').innerHTML =
		'<footer>' +
		'	<h4>&copy; 2021-2023 Santtu Pesonen</h4><br>' +
		'	<a href="https://www.youtube.com/@madfinnishgamer38"><img src="../images/buttons/footer_yt.png" width="40" height="40"></a>' +
		'	<a href="https://twitter.com/TheMFG38"><img src="../images/buttons/footer_twitter.png" width="40" height="40"></a>' +
		'	<a href="https://www.twitch.tv/mfg38"><img src="../images/buttons/footer_twitch.png" width="40" height="40"></a>' +
		'	<a href="https://github.com/MFG38"><img src="../images/buttons/footer_github.png" width="40" height="40"></a>' +
		'</footer>';
}
