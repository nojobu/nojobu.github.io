

function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
        if(allElements[i].id == elementID)
            elementCollection.push(allElements[i]);

    }
    return elementCollection;
}

var players = getElementsById("video");

console.log(players);

players.forEach(function(player) {
  player.on('play', function() {
    players.forEach(function(pl) {
      if (pl !== player) {
        pl.pause();
      }
    })
  })
});
