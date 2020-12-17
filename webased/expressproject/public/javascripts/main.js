var game;
window.onload = function()
{
	 var isMobile=navigator.userAgent.indexOf("Mobile");

   if (isMobile==-1)
    {
			  //while(true){  //this part is trying to constantly update the window
          game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"ph_game");
				  console.log('notmobile');
			  //}
    }
    else
    {
      game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"ph_game");
      console.log("Mobile");
    }

    game.state.add("StateMain",StateMain);
    game.state.start("StateMain");
}
