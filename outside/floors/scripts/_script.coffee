

scroll_timeline = [{gap:3690, delay:3000}]

animation_functions = []

# Первый этаж называется 8 fail
timeline_8 = null
window.i8start = (sym)->
    sym.stop()
    timeline_8 = sym


$(document).ready(()->

#    Базовые переменные высот
    window_height =  $(window).height()
    window_width = $(window).width()

    content_height = $('.content').height()

    scroll_creator_height = $('.scroll_creator').height()
    scroll_top = 0


#   Общее время простоя
    total_delay = scroll_timeline.reduce(((prev, curr)->
        return prev + curr.delay
    ), 0)


    $(window).on('resize', ()->
        window_height =  $(window).height()
        window_width = $(window).width()
    )

    $(window).scroll( ()->
        scroll_top = $(window).scrollTop();
    )

    top_gap = 0
    enter_frame = ()->
        _scroll_percent = scroll_top/(scroll_creator_height-window_height)
        _top_gap = (window_height - content_height-total_delay)*_scroll_percent

        if _top_gap != top_gap
            top_gap = _top_gap
            top_delay = 0

            _bottom_gap = -_top_gap + window_height;

            for val in scroll_timeline
                if _bottom_gap>(val.gap+val.delay)
                    top_delay += val.delay

#            console.log _bottom_gap
            _top_gap += top_delay
            can_scroll = -1
            for val, i in scroll_timeline
                if _bottom_gap>val.gap && _bottom_gap<(val.gap+val.delay)
                    can_scroll = i

            if can_scroll == -1
                if _top_gap>0 then _top_gap = 0
                $('.content').css('top', _top_gap+'px')
            else
                _top_gap_from_bottom_gap = -(scroll_timeline[can_scroll].gap-window_height-top_delay)
                if _top_gap_from_bottom_gap > 0 then _top_gap_from_bottom_gap = 0
                $('.content').css('top', _top_gap_from_bottom_gap+'px')
                timelines_controller(can_scroll)

        #        TODO Обнулять таймлайны мнеьше текущего



      
        requestAnimationFrame(enter_frame)
    enter_frame()

    timelines_controller = (floor_num)->
        _bottom_gap = -top_gap + window_height
        _gap_from_animation_start = _bottom_gap - scroll_timeline[floor_num].gap
        percent = _gap_from_animation_start/scroll_timeline[floor_num].delay

#Исправить!

        animation_functions[floor_num](percent)


#    Фунции Анимации Таймлайнов



    floor_one_animation = (percent)->
        if timeline_8 == null then return
        _total_time = 8000
#        console.log _total_time*percent
        timeline_8.stop(_total_time*percent)
        if percent>0.5
            show_popup()
        else
            hide_popup()

    animation_functions.push(floor_one_animation)


    floor_two_animation = (percent)->
        console.log 2

    animation_functions.push(floor_two_animation)


    floor_three_animation = (percent)->
        console.log 3

    animation_functions.push(floor_three_animation)

    is_popup_visible = true;

    show_popup = ()->
        if !is_popup_visible
            $('.popup').fadeIn()
            is_popup_visible = true

    hide_popup = ()->
        if is_popup_visible
            $('.popup').fadeOut()
            is_popup_visible = false

    open_popup = ()->
        $('.close_btn').css('display', 'block');
        $('.read_btn').css('display', 'none')
        $('.popup_content').animate({height: 56})
        $('.popup').animate({height: 75})
        $('.popup').animate({height: 75})

    close_popup = ()->
        $('.read_btn').css('display', 'block')
        $('.close_btn').css('display', 'none')
        $('.popup_content').animate({height: 0})
        $('.popup').animate({height: 15})

    init_popup = ()->
        close_popup()
        hide_popup()
        $('.close_btn').on('click', ()->
            close_popup()
        )
        $('.read_btn').on('click', ()->
            open_popup()
        )

    init_popup()


)