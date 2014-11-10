floors = {'floor9':null, 'floor8':null, 'floor7':null, 'floor6':null, 'floor5':null, 'floor4':null, 'floor3':null};
points = {'floor9':[0], 'floor8':[500, 430, 150, 150], 'floor7':[0,0,0,0,0,0], 'floor6':[0,0,0,0,0,0], 'floor5':[0,0,0,0], 'floor4':[0,0,0,0], 'floor3':[770, 530, 530, 245, 77]};


$('.floor9 iframe')[0].contentWindow.init9 = (sym)->
  floors.floor9 = sym
  wait_while_all_loaded(floors.floor9)


$('.floor8 iframe')[0].contentWindow.init8 = (sym)->
  floors.floor8 = sym
  wait_while_all_loaded(floors.floor8)


$('.floor7 iframe')[0].contentWindow.init7 = (sym)->
  floors.floor7 = sym
  wait_while_all_loaded(floors.floor7)


$('.floor6 iframe')[0].contentWindow.init6 = (sym)->
  floors.floor6 = sym
  wait_while_all_loaded(floors.floor6)


$('.floor5 iframe')[0].contentWindow.init5 = (sym)->
  floors.floor5 = sym
  wait_while_all_loaded(floors.floor5)


$('.floor4 iframe')[0].contentWindow.init4 = (sym)->
  floors.floor4 = sym
  wait_while_all_loaded(floors.floor4)


$('.floor3 iframe')[0].contentWindow.init3 = (sym)->
  floors.floor3 = sym
  wait_while_all_loaded(floors.floor3)


iframes_loaded = 0
wait_while_all_loaded  = (sym)->
  sym.stop()

  iframes_loaded++
  if iframes_loaded == 7
    init()


timeStamp = new Date().getTime()
is_next_play = false


init = ()->
  enter_frame_handler()


  $('body').on('keydown', (e) ->

    if e.keyCode == 83
      goto_next()

    if e.keyCode == 65
      goto_prev()

  )

  set_floor_height()

  $('body').on('mousewheel', (e)->
    wheel = e.originalEvent.wheelDelta

    timeNow = new Date().getTime()

    if timeNow - timeStamp < 100
      timeStamp = timeNow

      if is_next_play && wheel>0
        goto_prev()
        is_next_play = false

      if !is_next_play && wheel<0
        goto_next()
        is_next_play = true

      return
    else
      timeStamp = timeNow

      if wheel < 0
        goto_next()
        is_next_play = true

      if wheel > 0
        goto_prev()
        is_next_play = false

    e.preventDefault()
  )

$(window).on('resize', set_floor_height)

set_floor_height = ()->
  for floor of points
    div_height = $(window).height() + points[floor][0] + 30
    $('.'+floor).height(div_height)
    $('.'+floor+' iframe').height(div_height)




enter_frame_handler = ()->
  _position = 0
  _sym = floors['floor'+current_scene]
  _stage = _sym.getComposition().getStage()
  _labels = _stage.timelines['Default Timeline'].labels

  if _stage then _position = _stage.getPosition()
  _current_label = false
  for _label_name of _labels
    if _labels[_label_name]==_position
      _current_label = _label_name

  if _current_label
    el = $('.floor'+current_scene)
    gap = (el.offset().top + el.height()) - $(document).scrollTop() - $(window).height();

  if _current_label == 'end' && !is_first_frame
    current_scene--
    _sym = floors['floor'+current_scene]
    _sym.play('start')

    move_scroll_to_position(0)

  if _current_label == 'start' && !is_first_frame
    current_scene++
    _sym = floors['floor'+current_scene]
    _sym.stop('end')
    _sym.playReverse()

    move_scroll_to_position( points['floor'+current_scene].length - 1 )


  if _current_label == 'start' && is_first_frame then is_first_frame = false
  if _current_label == 'end' && is_first_frame then is_first_frame = false

  requestAnimationFrame(enter_frame_handler)

is_first_frame = false

goto_next = ()->
  console.log 777
  floors['floor'+current_scene].play()

  _sym = floors['floor'+current_scene]
  _stage = _sym.getComposition().getStage()
  _labels = _stage.timelines['Default Timeline'].labels
  _position = 0
  if _stage then _position = _stage.getPosition()

  _prev_position = 0
  _next_label = 'part0'

  for _label_name of _labels
     if _position >= _prev_position && _position < _labels[_label_name]
       _next_label = _label_name
     _prev_position = _labels[_label_name]

  next_num = parseInt(_next_label.replace('part', '') )
  if !isNaN(next_num)
    move_scroll_to_position(next_num)



goto_prev = ()->
  floors['floor'+current_scene].playReverse()

  _sym = floors['floor'+current_scene]
  _stage = _sym.getComposition().getStage()
  _labels = _stage.timelines['Default Timeline'].labels
  _position = 0
  if _stage then _position = _stage.getPosition()

  _prev_position = 0
  _next_label = 'start'

  for _label_name of _labels
     if _position <= _prev_position && _position > _labels[_label_name]
       _next_label = _label_name

     _prev_position = _position

  next_num = parseInt(_next_label.replace('part', '') )
  if !isNaN(next_num)
    move_scroll_to_position(next_num)



move_scroll_to_position = (_position)->

  position_pix = points['floor'+current_scene][_position]

  el = $('.floor'+current_scene)
  gap = -(el.position().top + el.height()) + $(window).height() + position_pix;
  $('.content').stop()
  $('.content').animate( {marginTop: gap} )



current_scene = 9