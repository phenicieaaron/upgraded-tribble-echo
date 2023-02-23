$(function () {
  console.log("bring the cookie");
  
 

  var $drag_counter = $( "#event-drag" ),
  counts = [ 0 ];

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
    $("img").attr(
      "src",
      "https://www.middlebury.edu/office/sites/www.middlebury.edu.office/files/styles/432x576/public/2019-08/cookie-monster-portrait.jpg?fv=oYugFKrU&itok=6qZScOPW");
    $("#draggable").fadeOut(2000).fadeIn(2000).position(0, 0);

    
  });
 
    $( "#draggable" ).draggable({
     
      drag: function() {
        counts++;
        updateCounterStatus( $drag_counter, counts );
      }
      
    });
 
    function updateCounterStatus( $event_counter, new_count ) {
      //to-do: if more than...

      var game_msg = "";
      

      if(new_count <= 174){ 
        //user message
        $('#gameOutput').text('Keep shaking');
      }
      else if(new_count >= 175 && new_count <=275) {
        $('#gameOutput').text('Last chance.....');
      }
      else {
        $('#gameOutput').text('How could you take his cookie?');
        
        $("img").attr(
          "src",
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"
        );
      }

      $("gameOutput").text(game_msg);

      $( "span.count", $event_counter ).text(new_count);
    }
});

