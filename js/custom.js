$('#ham').click(function(){
	$('')
});

        skillsProgressBar();
        function skillsProgressBar() {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        };