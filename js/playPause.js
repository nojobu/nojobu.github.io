$('div.playpause').click(function(){

   	var vid = document.getElementById(video);
	var btn = document.getElementById(playpause);
	alert('You are clicking on me');

	if(vid.paused){
		btn.style.visibility = "hidden";

		vid.play();

	}else{
		btn.style.visibility = "visible";
		vid.paused();
		
	}
});


/*function togglePlayPause(btn, vid){
	
	var vid = document.getElementById(vid);
	var btn = document.getElementById(playpause);
	alert("HI")

	if(vid.paused){
		btn.style.visibility = "hidden";

		vid.play();

	}else{
		btn.style.visibility = "visible";
		vid.paused();
		
	}
}*/

