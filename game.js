var color = ["red", "blue", "green", "yellow"];
var game = [];
var userValue = [];
var randomColor;
var random;
var level = -1;
var check=0;


$(".play").click(function() {

  if(level===-1){
  sequence();
  level = 0;
  $("h1").text("Level "+level);
}
});



$(".simon").click(function() {
    var userChoice = $(this).attr("id");
    $("#" + userChoice).addClass("pressed");
    setTimeout(function() {
    $("#" + userChoice).removeClass("pressed")
    }, 100);
    makeSound(userChoice);
    userValue.push(userChoice);
    console.log(userValue);

if(userValue[check]===game[check]){
    check+=1;
    if (userValue.length === game.length) {
      if(JSON.stringify(userValue)===JSON.stringify(game)){
        check=0;
      userValue=[];
      sequence();}
    }
}else{
    fail();

    makeSound("wrong");
}



});


/*$("#"+randomColor).on("click",function(){
    var snd=new Audio("sounds/"+randomColor+".mp3");

    snd.play();

  }
);*/

function sequence() {
  random = (Math.random() * 4);
  random = Math.floor(random);
  randomColor = color[random];
  game.push(randomColor);
  console.log("---"+game+"---");
  $("#" + randomColor).fadeOut(600).fadeIn(600);
  makeSound(randomColor);
  level+=1;
  $("h1").text("Level "+level);

}

function fail(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  level=-1;
  game=[];
  check=0;
  userValue=[];
$("h1").text("Well played,press play!! button for restart");


}




function makeSound() {
  var UsrSnd = new Audio("sounds/" + arguments[0] + ".mp3");
  UsrSnd.play();
}
