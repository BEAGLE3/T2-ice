class Form {

constructor(){

}

hide(){
    title.hide()
    button1.hide()
   // button2.hide()
    //button3.hide()
}

display(){
    background(bg)

   image(peng,30,50,440,500)
    
    var title=createElement('h2')
    title.html("ICE SKATING GAME")
    title.position(500,100);

    var button1=createButton('HENRY')
    button1.position(570,200)

    //var button2=createButton('DAISY')
    //button2.position(570,300)

    //var button3=createButton('PINGU')
    //button3.position(570,400)


    button1.mousePressed(()=>{
      button1.hide()
      game.update(1);
      title.hide()
     // button2.hide()
      //button3.hide()
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
     
    })

    //button2.mousePressed(()=>{
      //player.updateCount();
      //game.update(1);
      //title.hide()
     // button1.hide()
      //button2.hide()
      //button3.hide()
      //playerCount+=1;
      //player.index=playerCount;
      //player.update()
     // player.updateCount(playerCount)
    //})

   // button3.mousePressed(()=>{
     // player.updateCount();
      //game.update(1);
      //title.hide()
      //button1.hide()
      //button2.hide()
      //button3.hide()
      //playerCount+=1;
      //player.index=playerCount;
      //player.update()
      //player.updateCount(playerCount)
    //})
}




}