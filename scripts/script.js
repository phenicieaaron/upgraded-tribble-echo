
$(function () {
  console.log("bring the cookie");
  
  const wrapper = document.getElementById("blob-wrapper");

  const animateBubble = x => {  
    const blob = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  
    blob.className.baseVal = "blob";
    blob.setAttributeNS(null, "style", `left: ${x - 250}px;`);
    blob.setAttributeNS(null, "viewBox", "0 -4 14 4");
  
    path.setAttributeNS(null, "d", "m 0 0 v -1 q 3 0 5 -2 t 4 0 q 2 2 5 2 v 1 z");
  
    blob.appendChild(path);
  
    wrapper.appendChild(blob);
  
    setTimeout(() => wrapper.removeChild(blob), 1000);
  }
  
  window.addEventListener("mousemove", function(e) {
    animateBubble(e.clientX);
  });
  
  window.addEventListener("touchmove", function(e) {
    animateBubble(e.changedTouches[0].clientX);
  });
  
  window.addEventListener("load", function(e) {
    if (!navigator.userAgentData.mobile) {
      document.getElementById("sub").firstChild.textContent = "Move your cursor!"
    } else {
      document.getElementById("sub").firstChild.textContent = "Touch, hold and move!"
    }
  });

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

