class Game{

    constructor(){

    }
getState(){
        var gameStateRef=database.ref('gameState')
          gameStateRef.on("value",function(data){
              gameState=data.val()
          })
    }

 update(state){
    database.ref('/').update({
        gameState:state
    })

 }

 async start(){
    if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form()
        form.display();
    }
    // if(gameState===0){
      //player=new Player()
      //player.getCount()
      //form=new Form()
      //form.display()

     //}
    player=createSprite(400,350,10,10);
   player.addImage("penguin",penguinImg)
  // players=[player1];

 }

 play(){
     form.hide()

     Player.getPlayerInfo();

     if(player1!==undefined){
      image(back_img, 0, 0, 1000, 800);
      var x =100;
      var y=200;
     var index=0
      drawSprites()
        // for(var plr in allPlayers){

         //}
          //index = index+1;
          //x = 500-allPlayers[plr].distance;
          //y=500;
          
          //players[index -1].x = x;
          //players[index - 1].y = y;
      }


     if (frameCount % 20 === 0) {
       obstacle= createSprite(random(100, 1000), 0, 100, 100);
        obstacle.velocityY = 6;
        var rand = Math.round(random(1,5));
        switch(rand){
            case 1: obstacle.addImage("b1",b1);
            break;
            case 2: obstacle.addImage("b2",b2);
            break;
            case 3: obstacle.addImage("b3", b3);
            break; 
            case 4: obstacle.addImage("stick", stick);
            break;
            case 5: obstacle.addImage("tree",tree);
            break;
            case 6: obstacle.addImage("flag",flag)
            break;
            case 7: obstacle.addImage("candy",c1)
            break;
            case 8: obstacle.addImage("candy",c2)
            break
            case 9: obstacle.addImage("candy",c3)
            break;
            case 10: obstacle.addImage("candy",c4)
        }
       // obstacle.lifetime=70
        obGroup.add(obstacle);
        
    }    
 }

 
}