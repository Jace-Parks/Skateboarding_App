function isprime(n){
  if (n===1) {
    return false;
  } else if(n === 2) {
      return true;
  }else {
    for(var x = 2; x < n; x++) {
      if(n % x === 0)  {
        return false;
      }
    }
    return true;
   }
}


//max at 5            min at 1000
var scale = 100;

function scaleup(){
  console.log('check');
  if(scale <= 5){
    console.error(scale);
    console.log("Too big");
  }else{
    scale = scale - 10;
    location.reload();
  }
}

function scaledown(){
  console.log('check');
  if(scale >= 1000){
    console.error(scale);
    console.log("Too small");
  }else{
    scale = scale + 10;
    location.reload();
  }

}
var StateMain = {
    preload: function() {
        game.load.image("duck", "images/duck.png");
    },
    create: function() {

       //finding the size for grid and rounding
       var colms = Math.floor(window.innerWidth / scale)
       var rows = Math.floor(window.innerHeight / scale);

       //make an align grid
        var grid = new AlignGrid(colms, rows);

        //turn on the lines for testing
        //and layout
        grid.show();

        //ulam spiral Math
        var midcolm = Math.floor(colms / 2);
        var midrow  = Math.floor(rows / 2);

        var totalnum = colms * rows;


        //vars for spiral calculation
        var space = 1;
        var distance = 0;
        var direction = false;
        var switchcount = 0;
        var sign = true;
        var buffer = true;
        var case2 = true;

        for (var i = 1; i < (totalnum + 1); i++) {
            //place the duck at i for the column

            if(isprime(i)){
              var duck = game.add.sprite(0, 0, "duck");
              duck.anchor.set(0.5, 0.5);
              grid.placeAt(midcolm, midrow, duck);
            }

            if(direction){
              if(sign){
                midrow--;
              }else{
                midrow++;
              }
            }else{
              if(sign){
                midcolm++;
              }else{
                midcolm--;
              }
            }

            distance++;

            //case of first direction change out of 2
            if(distance >= space){
              direction = !direction;
              switchcount++;
              distance = 1;
            }

            //case of second direction change
            if(switchcount == 2){
                switchcount = 0;
                distance = 1;
                space++;
                sign = !sign;
              }

          //strange indexing cass when space goes from 1 to 3
          if((space == 2) && case2){
            space++;
            case2 = false;
          }
        }
    },
    update: function() {}
}

  document.getElementById("upbutt").addEventListener("click", scaleup);
  document.getElementById("downbutt").addEventListener("click", scaledown);
