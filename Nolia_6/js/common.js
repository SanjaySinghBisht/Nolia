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
        if ($(this).hasClass('checked')) {
			
            $(this).removeClass('checked');
        } else {
			$("#checkout-option .radio-btn").removeClass('checked');
            $(this).addClass('checked');
        }
    });
    /*----------------------*/
});