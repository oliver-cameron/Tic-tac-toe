var turn = true;
var game = true;
var cells = 0;
var cella = [["a1", "a2", "a3"],["b1", "b2", "b3"],[ "c1", "c2", "c3"]]
var rows = [["a1", "a2", "a3"],["b1", "b2", "b3"],["c1", "c2", "c3"],["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a1","b2","c3"],["a3","b2","c1"]]
var weightGrid = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
var weight = [0,0]
var low = 0
var bot = false
mymove = ""
//functions
function a1() {
  if (game) {
    if (
      document.getElementById("a1X").style.display == "none" &&
      document.getElementById("a1O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("a1X").style.display = "block";
        cells += 1;
      } else {
        document.getElementById("a1O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function a2() {
  if (game) {
    if (
      document.getElementById("a2X").style.display == "none" &&
      document.getElementById("a2O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("a2X").style.display = "block";
        cells += 2;
      } else {
        document.getElementById("a2O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function a3() {
  if (game) {
    if (
      document.getElementById("a3X").style.display == "none" &&
      document.getElementById("a3O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("a3X").style.display = "block";
        cells += 4;
      } else {
        document.getElementById("a3O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function b1() {
  if (game) {
    if (
      document.getElementById("b1X").style.display == "none" &&
      document.getElementById("b1O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("b1X").style.display = "block";
        cells += 8;
      } else {
        document.getElementById("b1O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function b2() {
  if (game) {
    if (
      document.getElementById("b2X").style.display == "none" &&
      document.getElementById("b2O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("b2X").style.display = "block";
        cells += 16;
      } else {
        document.getElementById("b2O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function b3() {
  if (game) {
    if (
      document.getElementById("b3X").style.display == "none" &&
      document.getElementById("b3O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("b3X").style.display = "block";
        cells += 32;
      } else {
        document.getElementById("b3O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function c1() {
  if (game) {
    if (
      document.getElementById("c1X").style.display == "none" &&
      document.getElementById("c1O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("c1X").style.display = "block";
        cells += 64;
      } else {
        document.getElementById("c1O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function c2() {
  if (game) {
    if (
      document.getElementById("c2X").style.display == "none" &&
      document.getElementById("c2O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("c2X").style.display = "block";
        cells += 128;
      } else {
        document.getElementById("c2O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function c3() {
  if (game) {
    if (
      document.getElementById("c3X").style.display == "none" &&
      document.getElementById("c3O").style.display == "none"
    ) {
      if (turn) {
        document.getElementById("c3X").style.display = "block";
        cells += 256;
      } else {
        document.getElementById("c3O").style.display = "block";
      }
      checkdraw();
      turn = !turn;
      console.log(`X${checkwin("X")}`);
      console.log(`O${checkwin("O")}`);
        if(bot){
    calc_move();
  }
    }
  }

}
function checkwin(player) {
  if (
    document.getElementById("a1" + player).style.display == "block" &&
    document.getElementById("a2" + player).style.display == "block" &&
    document.getElementById("a3" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a1").style.background = document.getElementById(
      `a1${player}`
    ).style.color;
    document.getElementById("a2").style.background = document.getElementById(
      `a2${player}`
    ).style.color;
    document.getElementById("a3").style.background = document.getElementById(
      `a3${player}`
    ).style.color;
    //return "a";
    return(true)
  }
  if (
    document.getElementById("b1" + player).style.display == "block" &&
    document.getElementById("b2" + player).style.display == "block" &&
    document.getElementById("b3" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("b1").style.background = document.getElementById(
      `b1${player}`
    ).style.color;
    document.getElementById("b2").style.background = document.getElementById(
      `b2${player}`
    ).style.color;
    document.getElementById("b3").style.background = document.getElementById(
      `b3${player}`
    ).style.color;
    //return "b";
    return(true)
  }
  if (
    document.getElementById("c1" + player).style.display == "block" &&
    document.getElementById("c2" + player).style.display == "block" &&
    document.getElementById("c3" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("c1").style.background = document.getElementById(
      `c1${player}`
    ).style.color;
    document.getElementById("c2").style.background = document.getElementById(
      `c2${player}`
    ).style.color;
    document.getElementById("c3").style.background = document.getElementById(
      `c3${player}`
    ).style.color;
    //return "c";
    return(true)
  }
  if (
    document.getElementById("a1" + player).style.display == "block" &&
    document.getElementById("b1" + player).style.display == "block" &&
    document.getElementById("c1" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a1").style.background = document.getElementById(
      `a1${player}`
    ).style.color;
    document.getElementById("b1").style.background = document.getElementById(
      `b1${player}`
    ).style.color;
    document.getElementById("c1").style.background = document.getElementById(
      `c1${player}`
    ).style.color;
    //return "1";
    return(true)
  }
  if (
    document.getElementById("a2" + player).style.display == "block" &&
    document.getElementById("b2" + player).style.display == "block" &&
    document.getElementById("c2" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a2").style.background = document.getElementById(
      `a2${player}`
    ).style.color;
    document.getElementById("b2").style.background = document.getElementById(
      `b2${player}`
    ).style.color;
    document.getElementById("c2").style.background = document.getElementById(
      `c2${player}`
    ).style.color;
    //return "2";
    return(true)
  }
  if (
    document.getElementById("a3" + player).style.display == "block" &&
    document.getElementById("b3" + player).style.display == "block" &&
    document.getElementById("c3" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a3").style.background = document.getElementById(
      `a3${player}`
    ).style.color;
    document.getElementById("b3").style.background = document.getElementById(
      `b3${player}`
    ).style.color;
    document.getElementById("c3").style.background = document.getElementById(
      `c3${player}`
    ).style.color;
    //return "3";
    return(true)
  }
  if (
    document.getElementById("a1" + player).style.display == "block" &&
    document.getElementById("b2" + player).style.display == "block" &&
    document.getElementById("c3" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a1").style.background = document.getElementById(
      `a1${player}`
    ).style.color;
    document.getElementById("b2").style.background = document.getElementById(
      `b2${player}`
    ).style.color;
    document.getElementById("c3").style.background = document.getElementById(
      `c3${player}`
    ).style.color;
    //return "r";
    return(true)
  }
  if (
    document.getElementById("a3" + player).style.display == "block" &&
    document.getElementById("b2" + player).style.display == "block" &&
    document.getElementById("c1" + player).style.display == "block"
  ) {
    reset();
    document.getElementById("a3").style.background = document.getElementById(
      `a3${player}`
    ).style.color;
    document.getElementById("b2").style.background = document.getElementById(
      `b2${player}`
    ).style.color;
    document.getElementById("c1").style.background = document.getElementById(
      `c1${player}`
    ).style.color;
    //return "l";
    return(true)
  }
  return(false)
}
function reset() {
  document.getElementById("a1X").style.display = "none";
  document.getElementById("a2X").style.display = "none";
  document.getElementById("a3X").style.display = "none";
  document.getElementById("b1X").style.display = "none";
  document.getElementById("b2X").style.display = "none";
  document.getElementById("b3X").style.display = "none";
  document.getElementById("c1X").style.display = "none";
  document.getElementById("c2X").style.display = "none";
  document.getElementById("c3X").style.display = "none";
  document.getElementById("a1O").style.display = "none";
  document.getElementById("a2O").style.display = "none";
  document.getElementById("a3O").style.display = "none";
  document.getElementById("b1O").style.display = "none";
  document.getElementById("b2O").style.display = "none";
  document.getElementById("b3O").style.display = "none";
  document.getElementById("c1O").style.display = "none";
  document.getElementById("c2O").style.display = "none";
  document.getElementById("c3O").style.display = "none";
  game = false;
}
//clear the board when user presses space
document.addEventListener("keydown", function (event) {
  if(event.key = "Shift"){
    if(!game){
      document.body.innerHTML = `<div id="board">
        <div id="a1" onclick="a1();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; left:0px;">
            <img id="a1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="a2" onclick="a2();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; left:calc(min(100vh, 100vw) / 3);">
            <img id="a2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="a3" onclick="a3();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; right:0px;">
            <img id="a3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b1" onclick="b1();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); left:0px;">
            <img id="b1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b2" onclick="b2();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); left:calc(min(100vh, 100vw) / 3);">
            <img id="b2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b3" onclick="b3();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); right:0px;">
            <img id="b3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c1" onclick="c1();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; left:0px;">
            <img id="c1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c2" onclick="c2();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; left:calc(min(100vh, 100vw) / 3);">
            <img id="c2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c3" onclick="c3();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; right:0px;">
            <img id="c3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
    </div>`;
    bot = true
    }
  }
  if (!game && (event.key == " " || event.key == "Meta")) {
    document.body.innerHTML = `<div id="board">
        <div id="a1" onclick="a1();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; left:0px;">
            <img id="a1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="a2" onclick="a2();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; left:calc(min(100vh, 100vw) / 3);">
            <img id="a2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="a3" onclick="a3();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:0px; right:0px;">
            <img id="a3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="a3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b1" onclick="b1();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); left:0px;">
            <img id="b1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b2" onclick="b2();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); left:calc(min(100vh, 100vw) / 3);">
            <img id="b2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="b3" onclick="b3();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); top:calc(min(100vh, 100vw) / 3); right:0px;">
            <img id="b3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="b3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c1" onclick="c1();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; left:0px;">
            <img id="c1O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c1X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c2" onclick="c2();" style="background:#ff7f50;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; left:calc(min(100vh, 100vw) / 3);">
            <img id="c2O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c2X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
        <div id="c3" onclick="c3();" style="background:#fafad2;position:absolute; width:calc(min(100vh, 100vw) / 3); height:calc(min(100vh, 100vw) / 3); bottom: 0px; right:0px;">
            <img id="c3O"src="O.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#826AED">
            <img id="c3X"src="X.png" width="100%" height="100%" style="position:absolute; top:0px;left:0px;display:none; color:#00fa9a">
        
        </div>
    </div>`;
    bot = false
  }
  turn = true;
  game = true;
});


//check if a row is unable to have a win
function unavalible(rowlist) {
  return [8, 11, 13].includes(
    3 * ~~(document.getElementById(`${rowlist[0]}X`).style.display == "block") +
      5 *
        ~~(document.getElementById(`${rowlist[0]}O`).style.display == "block") +
      (3 *
        ~~(document.getElementById(`${rowlist[1]}X`).style.display == "block") +
        5 *
          ~~(
            document.getElementById(`${rowlist[1]}O`).style.display == "block"
          )) +
      (3 *
        ~~(document.getElementById(`${rowlist[2]}X`).style.display == "block") +
        5 *
          ~~(
            document.getElementById(`${rowlist[2]}O`).style.display == "block"
          ))
  );
}
//check if the game is a draw
function checkdraw() {
  if (
    unavalible(["a1", "a2", "a3"]) &&
    unavalible(["b1", "b2", "b3"]) &&
    unavalible(["c1", "c2", "c3"]) &&
    unavalible(["a1", "b1", "c1"]) &&
    unavalible(["a2", "b2", "c2"]) &&
    unavalible(["a3", "b3", "c3"]) &&
    unavalible(["a1", "b2", "c3"]) &&
    unavalible(["a3", "b2", "c1"])
  ) {
    if (
      [document.getElementById("a1X"), document.getElementById("a1O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("a1").style.background = [
        document.getElementById("a1X"),
        document.getElementById("a1O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("a2X"), document.getElementById("a2O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("a2").style.background = [
        document.getElementById("a2X"),
        document.getElementById("a2O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("a3X"), document.getElementById("a3O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("a3").style.background = [
        document.getElementById("a3X"),
        document.getElementById("a3O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("b1X"), document.getElementById("b1O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("b1").style.background = [
        document.getElementById("b1X"),
        document.getElementById("b1O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("b2X"), document.getElementById("b2O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("b2").style.background = [
        document.getElementById("b2X"),
        document.getElementById("b2O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("b3X"), document.getElementById("b3O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("b3").style.background = [
        document.getElementById("b3X"),
        document.getElementById("b3O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("c1X"), document.getElementById("c1O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("c1").style.background = [
        document.getElementById("c1X"),
        document.getElementById("c1O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("c2X"), document.getElementById("c2O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("c2").style.background = [
        document.getElementById("c2X"),
        document.getElementById("c2O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    if (
      [document.getElementById("c3X"), document.getElementById("c3O")].filter(
        (x) => x.style.display == "block"
      ).length == 1
    ) {
      document.getElementById("c3").style.background = [
        document.getElementById("c3X"),
        document.getElementById("c3O"),
      ].filter((x) => x.style.display == "block")[0].style.color;
    }
    game = false;
  }
}
function calc_move() {
  weightGrid = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
  for(var k=0;k<8;k++){
    if(sumRow(rows[k]) == 10){
      rows[k].forEach(element => weightGrid[["a","b","c"].indexOf(element.split("")[0])][parseInt(element.split("")[1]-1)]+=25)
    }
    if(sumRow(rows[k]) == 6){
      rows[k].forEach(element => weightGrid[["a","b","c"].indexOf(element.split("")[0])][parseInt(element.split("")[1]-1)]+=5)
    }
    if(sumRow(rows[k]) == 3){
      rows[k].forEach(element => weightGrid[["a","b","c"].indexOf(element.split("")[0])][parseInt(element.split("")[1]-1)]+=1)
    }
    if(sumRow(rows[k]) == 5){
      rows[k].forEach(element => weightGrid[["a","b","c"].indexOf(element.split("")[0])][parseInt(element.split("")[1]-1)]+=1)
    }
  }
    low = 0
    mymove = ""
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
                if((weightGrid[i][j])>low && document.getElementById(`${cella[i][j]}X`).style.display == "none" && document.getElementById(`${cella[i][j]}O`).style.display == "none"){
                    low = weightGrid[i][j]
                    mymove = cella[i][j]
                }
        }
    }
        if(game){
    document.getElementById(`${mymove}O`).style.display = "block"
    checkwin("O")
    turn=!turn;}
}
function sumRow(rowlist){
  return(
    3 * ~~(document.getElementById(`${rowlist[0]}X`).style.display == "block") +
      5 *
        ~~(document.getElementById(`${rowlist[0]}O`).style.display == "block") +
      (3 *
        ~~(document.getElementById(`${rowlist[1]}X`).style.display == "block") +
        5 *
          ~~(
            document.getElementById(`${rowlist[1]}O`).style.display == "block"
          )) +
      (3 *
        ~~(document.getElementById(`${rowlist[2]}X`).style.display == "block") +
        5 *
          ~~(
            document.getElementById(`${rowlist[2]}O`).style.display == "block"
          )))
}