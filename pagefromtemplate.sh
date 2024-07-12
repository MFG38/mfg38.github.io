#!/bin/env bash

if [ $# -lt 2 ]; then
	echo "Not enough arguments - 2 expected."
	echo "Arg1 = template name (doom, game or tutorial)"
	echo "Arg2 = filename of generated page"
else
	case $1 in
		doom)
			echo "Creating page doom/$2.html..."
			cp ./templates/doom_wad.html ./doom/$2.html
			;;
		game)
			echo "Creating page game/$2.html..."
			cp ./templates/game.html ./games/$2.html
			;;
		tutorial)
			echo "Creating page tutorial/$2.html..."
			cp ./templates/tutorial.html ./tutorials/$2.html
			;;
	esac
fi

