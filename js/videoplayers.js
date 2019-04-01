(function(){
  var resizeVideoJs = function(player, aspectRatio){
    // Get the parent element's actual width
    var width = document.getElementById(player.id).parentElement.offsetWidth;
    // Set width to fill parent element, Set height
    player.width(width).height( width * aspectRatio );    
  }

  // Get all the videos!
  var videos = document.getElementsByTagName('video'); 
  
  // Loop through the videos
  for(i=0;i<videos.length;i++) {
    
    // Stash the video
    var video = videos[i];
    
    // Check for VideoJs
    if(video.className.indexOf('video-js') > -1) { 
      
      // When player is ready...
      _V_(video.id).ready(function(){
    
        // Stash the player object
        var player = this;
        // Create an aspect ratio
        var aspectRatio = player.height()/player.width();  
      
        // Apply the resizer
        resizeVideoJs(player, aspectRatio); 
  
        // Add/Attach the event on resize
        if (window.addEventListener) {
          window.addEventListener('resize', function(){
            resizeVideoJs(player, aspectRatio);
          }, false); 
        } else if (window.attachEvent)  {
          window.attachEvent('onresize', function(){
            resizeVideoJs(player, aspectRatio);
          });
        }
      });
    }
  }
})();
