$(document).ready(function(){
  $(".zm-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#zm").offset().top -0 }, 200);
  });
});

$(document).ready(function(){
  $(".nm-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#nm").offset().top -0 }, 200);
  });
});

$(document).ready(function(){
  $(".hd1-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#hd").offset().top -0 }, 200);
  });
});

$(document).ready(function(){
  $(".fz-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#fz").offset().top -0 }, 200);
  });
});

$(document).ready(function(){
  $(".yz-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#yz").offset().top -0 }, 200);
  });
});

$(document).ready(function(){
  $(".hd2-bean").click(function(){
  	$('html,body').animate({ scrollTop: $("#hd").offset().top -0 }, 200);
  });
});


$(document).ready(function(){
    $('html,body').on("scroll", function() { 
        if ($('html,body').scrollTop() > 0) { 
            $(".icon").fadeIn();
        }
        else {
            $(".icon").fadeOut();
        }
    });
    $(".icon").on("click", function() {
    	$('html,body').animate({ scrollTop: 0 }, "slow");
    });
});