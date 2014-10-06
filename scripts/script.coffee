$(document).ready( ()->
    Tipped.create('.popup', {maxWidth:200});

#    Прокрутка фотографии
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


#   Раздел портфолио
    portfolio_div = $('.portfolio')
    images_div = $('.images')

    for element, i in data
        image = $('<img />')
        image.attr('src', 'images/projects/'+element.image)
        image.attr('i', i)
        image.css('z-index', i);
        images_div.append(image)

    display_image(0)

    $('.right_btn').on('mousedown', ()->
        next = current_num+1
        if next<data.length
            display_image(next)
    )

    $('.portfolio img').on('mousedown', ()->
        element = $(this)
        i = parseInt( element.attr('i') )

        if i!=current_num
            display_image(i)
    )
)

current_num = 0

display_image = (num)->
    current_num = num
    current_object = data[num]

    $('.p-header a').text(current_object.header).attr('href', current_object.link)
    $('.p-desc').html(current_object.desc+'<br>'+current_object.tech).css('opacity', 0).transition({opacity:1})
    $('.p-link a').attr('href', current_object.link)



    $('.portfolio img').css('cursor','pointer')
    $('.portfolio img').each(()->
        element = $(this)
        i = parseInt( element.attr('i') )

        if i == num
            element.transition({perspective: '1000px', rotateY: '0deg', scale:1, left: 0, opacity:1})
            element.css('cursor', 'auto')

        if (i-num) == -1
            element.transition({perspective: '1000px', rotateY: '-70deg', scale:0.8, left: -355, opacity:0.8})

        if (i-num) == 1
            element.transition({perspective: '1000px', rotateY: '70deg', scale:0.8, left: 355, opacity:0.8})

        if (i-num) > 1
            element.transition({perspective: '1000px', rotateY: '0deg', scale:0.67, left: (i-num)*297, opacity:0.7})

        if (i-num) < -1
            element.transition({perspective: '1000px', rotateY: '0deg', scale:0.67, left: (i-num)*297, opacity:0.7})



    )
