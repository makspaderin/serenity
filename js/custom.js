$('#ham').click(function(){
	$('#menu').animate({
		marginRight: "0%"
	});
});

$('#close').click(function(){
	$('#menu').animate({
		marginRight: "-50%"
	});
});

        skillsProgressBar();
        function skillsProgressBar() {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        };

$.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });