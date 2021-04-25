var inContainer = $(".in-container");
var Todo = $("#todo");
var get = $("#get");

var rTodo = "";

var rNum = 0;

$("#get").on("click", function(e) {
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/Moongomi/RandomTodo/main/data.json",
    dataType: "json",
    success: function(data) {
      function getRandom(min, max) {
        rNum = Math.floor(Math.random() * (max - min) + min);
        return rNum;
      }
      rNum = getRandom(0, data.length);
      rTodo = ('"' + data[rNum].todo + '"');
      
      inContainer.hide();
      inContainer.fadeOut(800, function(){
        Todo.text(rTodo);
        inContainer.fadeIn(1200);
      })
      
    }
  });
});

