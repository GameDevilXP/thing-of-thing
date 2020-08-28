class Game {
  constructor() {

  }

  getState() {
      var gameStateRef = database.ref('gamestate');
      gameStateRef.on("value", function() {
          gameState = data.val();
      })
  }

  updateState(state) {
      database.ref('/').update({
          gameState:state
      })
  }

  start() {
      if(gameState === 0) {
          player = new Player();
          player.getCount();
          form = new Form();
          form.display();
      }
  }

  play() {
      form.hide();
      textSize(30);
      text("Game Start", 130, 100);
      Player.getPlayerInfo();
      if(allPlayer !== undefined) {
          var displayPosition = 130;
          for(var plr in allPlayer) {
                if(plr === "player" + player.index) {
                    fill('red')
                }
                else {
                    fill('black');
                }
                    
                displayPosition=+20;
                textSize = 15;
                text(allPlayer[plr].name + ":" + allPlayer[plr].distance,120,displayPosition);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index === null) {
            player.distance+= 50;
            player.update();
        }
    }
  
}
