$(document).ready(function() {
    /*set footer at bottom*/
    var s = $(window).height();
    $(".page-bricks").css("min-height", s - 78 - 283 + 8);
    $(window).resize(function() {
        var s = $(window).height();
        $(".page-bricks").css("min-height", s - 78 - 283 + 8);
    });
    /*----------------------*/
    /*accordion*/
    $("#accordion a.panel-title").click(function() {
        if ($(this).find("span").html() == '+') {
            $("span.pull-right").html("+");
            $(this).find("span").html("-");
        } else {
            $("span.pull-right").html("+");
            $(this).find("span").html("+");
        }
    });
    /*----------------------*/
    /*custom radio buttons*/
    $('.radio-btn').click(function() {
	debugger;
        if ($(this).hasClass('checked')) {
		debugger;
			$(".radio-btn .backup").prop('checked',false);
            $(this).removeClass('checked');
        } else {
		debugger;
			$(".radio-btn").removeClass('checked');
			$(".radio-btn .backup").prop('checked',false);
            $(this).addClass('checked');
			$(this).find('input').prop('checked',true);
        }
    });
	
	
	
    /*----------------------*/
});