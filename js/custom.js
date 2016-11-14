$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

if ($(window).width() > 1020) {
  $('#ham').click(function(){
	$('#menu').animate({
		marginRight: "0%"
	});
});
} else {
  $('#ham').click(function(){
    $('#menu').animate({
      marginLeft: "0%"
    });
  });
}

if ($(window).width() > 1020) {
  $('#close').click(function(){
  	$('#menu').animate({
  		marginRight: "-50%"
  	});
  });
} else {
  $('#close').click(function(){
    $('#menu').animate({
      marginLeft: "-100%"
    });
  });
}


skillsProgressBar();
function skillsProgressBar() {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
};

$(function() {
  $.scrollify({
        section:".portfolio-box",
        // scrollbars:false,
        before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
    }
  });

  
  $(".pagination a").on("click",$.scrollify.move);

});