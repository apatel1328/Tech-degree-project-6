


	// Configure player features

	$('video').mediaelementplayer({

		features: ['playpause', 'current', 'track', 'progress', 'duration', 'volume', 'fullscreen'],
		alwaysShowControls: true,
		enableAutosize: true,
		stretching: 'responsive'

	});



//Highlight text as video plays

	//Set global variables 

	const video = document.getElementsByTagName('video')[0];
	const span = document.querySelectorAll('section span');

	//Track current time in video
	video.addEventListener('timeupdate', function(event){

		const currentTime = video.currentTime;

		
	//Iterate through all span elements with time codes
		for(let i = 0; i < span.length; i++){

			let spanStartTime = parseFloat(span[i].dataset.timecodestart);
			let spanEndTime = parseFloat(span[i].dataset.timecodestop);
			let thisSpan = span[i];

	//Compare time elements to current time and add class 
			if( currentTime > spanStartTime && currentTime < spanEndTime) {

				thisSpan.classList.add('standOut');

			} else {

				thisSpan.classList.remove('standOut');

			}

		}

	});


//Set video time when user clicks on a certain sentence

	for( let i = 0; i < span.length; i++){
		
		document.querySelectorAll('section span')[i].addEventListener('click', function(){

			let spanStartTime = parseFloat(span[i].dataset.timecodestart);
			let currentTime = video.currentTime;

			video.currentTime = spanStartTime;
			video.play();

		});

	}

	


