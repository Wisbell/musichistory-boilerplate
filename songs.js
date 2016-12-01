/*
Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you
love.

Students must use JavaScript to create a list of songs in the
 index.html file for their Music History project. Have them
 download the songs.js file, which contains an array of strings
 with song information.

Each student must add one song to the beginning and the end of the
 array.

Loop over the array and remove any words or characters that
 obviously don't belong.

Students must find and replace the >
character in each item with a - character.

Must add each string to the DOM in index.html in the main content
 area.

{Song name} by {Artist} on the album {Album}
*/


console.log("songs.js loaded");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



function add_new_songs_to_array() {
	// Add song to the beginning and end of the array
	songs.unshift("Electric Feel - by MGMT on the album Oracular Spectacular");
	songs.push("Hurricane - by Bob Dylan on the album Desire");
};


function fix_song_typos() {
	for (var i = 0; i < songs.length; i++) {

	//Chain replace functions

	//songs[i] = songs[i].replace(">", "-").replace("*", "").replace("@", "").replace("(", "").replace("!", "").replace(")", "");

	// add all replace functions into a regex expression - the | is an or operator
	songs[i] = songs[i].replace(">", "-").replace(/\*|@|\(|\!|\)/g, '');
	console.log("test");

	//songs[i] = songs[i].replace(/\W+/g, "");

	//console.log(songs[i])

	/* http://stackoverflow.com/questions/6053541/regex-every-non-alphanumeric-character-except-white-space-or-colon*/
	/* regex is the devil */
	//songs[i] = songs[i].replace(/(?!-)\W/g, '');
	//songs[i] = songs[i].replace(/(?!-)\W\g/, '');
	//songs[i] = songs[i].replace(/[^0-9\-]/g, '');

	//console.log(songs[i]);

	}
};

function add_songs_main_content() {

	// grab div which will hold the new song divs
	var main_content = document.querySelector('.song-information');


	for (var i = 0; i < songs.length; i++) {

		// Get song Name

		var song_name = songs[i].slice(0, songs[i].indexOf(" -"));

		// Get band name

		var artist_name = songs[i].slice(songs[i].indexOf(' by ') + ' by '.length, songs[i].indexOf(' on the album'));

		// Get album name

		var album_name = songs[i].slice(songs[i].indexOf('the album') + 'the album'.length, songs[i].length);

		// Make new div to hold song/artist/album info

		var new_song_div = document.createElement("div");

		// Add the new div to the dom

		var add_div_to_dom = main_content.appendChild(new_song_div);

		// Make new paragraph to hold song name

		var new_song_para = document.createElement("p");

		// add new paragraph to the dom and add the song name

		new_song_div.appendChild(new_song_para).textContent = song_name;

		// make new ul to hold the other info

		var new_ul = document.createElement('ul');

		// add new ul to the new song div

		new_song_div.appendChild(new_ul);

		//create new list item for artist

		var new_li = document.createElement('li');

		// add new li to ul for artist

		new_ul.appendChild(new_li).textContent = artist_name;

		// create new li for barrier

		new_li = document.createElement('li');

		new_ul.appendChild(new_li).textContent = " |"

		// create new li for album name

		new_li = document.createElement('li');

		new_ul.appendChild(new_li).textContent = album_name;

	}

};


// Run Mah Functions

add_new_songs_to_array();
fix_song_typos();
add_songs_main_content();
