$(document).ready(function() {
    $('.fade-in-from-top').animate({'opacity': '1', 'margin-top': '0'}, 1000);
    $(".fade-in-from-top div").each(function(j) {
        if($(this)[0].className === "bolt") {
            $(this).delay(400*j).slideDown('medium');
        } else {
            $(this).delay(400*j).fadeIn(300);
        }
    });    
    $(window).scroll( function() {
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 700;

        $('.fade-in-from-left').each( function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            if(bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1', 'margin-left': '0'}, 1000);
                $(".fade-in-from-left div").each(function(j) {
                    if($(this)[0].className === "bolt") {
                        $(this).delay(400*j).slideDown('medium');
                    } else {
                        $(this).delay(400*j).fadeIn(300);
                    }
                });    
            }
        })

        $('.fade-in-from-bottom').each( function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            if(bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1', 'margin-bottom': '0'}, 1000);
                $(".fade-in-from-bottom div").each(function(j) {
                    if($(this)[0].className === "bolt") {
                        $(this).delay(400*j).slideDown('medium');
                    } else {
                        $(this).delay(400*j).fadeIn(300);
                    }
                });    
            }
        })
    });
})