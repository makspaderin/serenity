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