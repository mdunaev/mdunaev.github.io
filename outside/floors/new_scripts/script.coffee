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


  resize_screen_handler = ()->
    window_height =  $(window).height()
    window_width  = $(window).width()
    $('.eighth_floor').css('height', window_height+400+'px');
    $('.popup1').css('top', window_height-650+'px')

  resize_screen_handler()
  $(window).on('resize', resize_screen_handler)
)


timeStamp = new Date().getTime()
is_next_play = false

$('body').on('mousewheel', (e)->
  wheel = e.originalEvent.wheelDelta
  timeNow = new Date().getTime()

  if timeNow - timeStamp < 100
    timeStamp = timeNow

    if is_next_play && wheel>0
      play_prev()

    if !is_next_play && wheel<0
      play_next()

    return
  else
    timeStamp = timeNow

    if wheel < 0
      play_next()

    if wheel > 0
      play_prev()

  e.preventDefault()
)


play_next = ()->
  is_next_play = true
  timeline_1.play()

play_prev = ()->
  is_next_play = false
  timeline_1.playReverse()


# TRANSIT
use_transit = (selector, animate_object)->
  if $(document).transit == undefined
    $.getScript('scripts/jquery.transit.min.js', ()->
      $(selector).transition(animate_object)
    );
  else
    $(selector).transition(animate_object)

