scroll_data = [ {part0: 510, part1: 510, part2: 300, part3: 60, part4: 60, part5: 60} ]
next_label_coord = 0
timeline_1 = null



window.i1start = (sym)->
    if timeline_1 then return
    sym.stop()
    timeline_1 = sym


$(document).ready( ()->

    window_height =  $(window).height()
    window_width = $(window).width()

    content_height = $('.content').height()

    scroll_creator_height = $('.scroll_creator').height()
    top_scroll = 0
    bottom_scroll = 0

    total_delay = scroll_data.reduce(((prev, curr)->
        return prev + curr.delay
    ), 0)

#    RESIZE

    resize_screen_handler = ()->
        window_height =  $(window).height()
        window_width  = $(window).width()
        $('.eighth_floor').css('height', window_height+400+'px');
        $('.popup1').css('top', window_height-650+'px')

    resize_screen_handler()
    $(window).on('resize', resize_screen_handler)


#    SCROLL

    scroll_handler = ()->

        _is_scroll_down = true


        _top_scroll = $(window).scrollTop()
        if _top_scroll==0
            window.scroll(0, 20);
            if _top_scroll == top_scroll
                top_scroll = 50


        if _top_scroll>=(20000-window_height)
            console.log 'bottom'
            window.scroll(0, 20000-window_height-40);
            top_scroll = 20000-window_height-60


        if _top_scroll - top_scroll < 0 || _top_scroll < 0
            _is_scroll_down=false

        bottom_scroll = top_scroll + window_height

        currentPosition = 0

        if timeline_1 == null then return
        stage  = timeline_1.getComposition().getStage()
        labels = stage.timelines['Default Timeline'].labels

        if stage then currentPosition = stage.getPosition()

        current_label = false
        for _label_name of labels
            if labels[_label_name]==currentPosition
                current_label = _label_name

        label_num = -1
        if current_label then label_num = parseInt( current_label.substr(current_label.length - 1) )


        if Math.abs(_top_scroll - top_scroll)<50
            top_scroll = _top_scroll
            return

        next_label_num = undefined

        if _is_scroll_down
            if label_num < 5
                timeline_1.play()
                next_label_num = label_num+1
                if current_label
                    next_label = current_label.substring(0, current_label.length-1) + next_label_num
                    next_label_coord = scroll_data[0][next_label]
                    use_transit('.content', { top: -(370-next_label_coord+140)+'px' } )
        else
            if label_num > 0
                timeline_1.playReverse()
                next_label_num = label_num-1
                if current_label
                    next_label = current_label.substring(0, current_label.length-1) + next_label_num
                    next_label_coord = scroll_data[0][next_label]
                    use_transit('.content', { top: -(370-next_label_coord+140)+'px' } )

        top_scroll = _top_scroll

    $(window).scroll(scroll_handler)
)


use_transit = (selector, animate_object)->
    if $(document).transit == undefined
        $.getScript('scripts/jquery.transit.min.js', ()->
            $(selector).transition(animate_object)
        );
    else
        $(selector).transition(animate_object)

init_popup = ()->
    popup = $('.popup1')
    close_btn = $('.close_btn')
    read_btn = $('.read_btn')

    read_btn.css('display', 'block')
    close_btn.css('display', 'none')

    use_transit('.popup_content', {height:'0px'})
    use_transit('.popup1', {height:'100px'})

    read_btn.on('click', ()->
        read_btn.css('display', 'none')
        close_btn.css('display', 'block')
        use_transit('.popup_content', {height:'155px'})
        use_transit('.popup1', {height:'190px'})
    )
    close_btn.on('click', ()->
        read_btn.css('display', 'block')
        close_btn.css('display', 'none')

        use_transit('.popup_content', {height:'0px'})
        use_transit('.popup1', {height:'100px'})
    )

init_popup()