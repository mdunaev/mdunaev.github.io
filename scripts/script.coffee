$(document).ready( ()->
    Tipped.create('.popup');
    $('.short-btn').on('click', ()->
        $('.short-btn').addClass('btn-selected')
        $('.long-btn').removeClass('btn-selected')
        $('.short').removeClass('hidden')
        $('.long').addClass('hidden')
    )

    $('.long-btn').on('click', ()->
        $('.short-btn').removeClass('btn-selected')
        $('.long-btn').addClass('btn-selected')
        $('.short').addClass('hidden')
        $('.long').removeClass('hidden')
    )

    $('.photo').on('mouseover', ()->
        $('.sequence').fadeIn();
    )

    $('.sequence').on('mouseleave', ()->
        $('.sequence').fadeOut();
    )
    $('.sequence').on('mousemove', (e)->
        parentOffset = $(this).parent().offset()

        x = e.pageX - parentOffset.left
        step = Math.round( (x-116)/(116/8) ) * 232;
        $('.sequence').css('background-position', step+'px 0px')
    )

)