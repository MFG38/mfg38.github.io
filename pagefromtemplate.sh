#!/bin/env bash

case $1 in
	doom)
		cp ./templates/doom_wad.html ./doom/$2.html
		;;
	game)
		cp ./templates/game.html ./games/$2.html
		;;
	tutorial)
		cp ./templates/tutorial.html ./tutorials/$2.html
		;;
esac

