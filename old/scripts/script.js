// Generated by CoffeeScript 1.6.3
(function() {
  var current_num, display_image;

  $(document).ready(function() {
    var element, i, image, images_div, portfolio_div, _i, _len;
    Tipped.create('.popup', {
      maxWidth: 200
    });
    $('.short-btn').on('click', function() {
      $('.short-btn').addClass('btn-selected');
      $('.long-btn').removeClass('btn-selected');
      $('.short').removeClass('hidden');
      return $('.long').addClass('hidden');
    });
    $('.long-btn').on('click', function() {
      $('.short-btn').removeClass('btn-selected');
      $('.long-btn').addClass('btn-selected');
      $('.short').addClass('hidden');
      return $('.long').removeClass('hidden');
    });
    $('.photo').on('mouseover', function() {
      return $('.sequence').fadeIn();
    });
    $('.sequence').on('mouseleave', function() {
      return $('.sequence').fadeOut();
    });
    $('.sequence').on('mousemove', function(e) {
      var parentOffset, step, x;
      parentOffset = $(this).parent().offset();
      x = e.pageX - parentOffset.left;
      step = Math.round((x - 116) / (116 / 8)) * 232;
      return $('.sequence').css('background-position', step + 'px 0px');
    });
    $(document).on('scroll', function() {
      $('.top_header').fadeOut(0);
      return $('.top_header').fadeIn(0);
    });
    portfolio_div = $('.portfolio');
    images_div = $('.images');
    for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
      element = data[i];
      image = $('<img />');
      image.attr('src', 'images/projects/' + element.image);
      image.attr('i', i);
      image.css('z-index', i);
      images_div.append(image);
    }
    display_image(0);
    $('.right_btn').on('mousedown', function() {
      var next;
      next = current_num + 1;
      if (next < data.length) {
        return display_image(next);
      }
    });
    return $('.portfolio img').on('mousedown', function() {
      element = $(this);
      i = parseInt(element.attr('i'));
      if (i !== current_num) {
        return display_image(i);
      }
    });
  });

  current_num = 0;

  display_image = function(num) {
    var current_object;
    current_num = num;
    current_object = data[num];
    $('.p-header a').text(current_object.header).attr('href', current_object.link);
    $('.cont-a').html(current_object.desc + '<br>' + current_object.tech).attr('href', current_object.link).css('opacity', 0).transition({
      opacity: 1
    });
    $('.portfolio img').css('cursor', 'pointer');
    return $('.portfolio img').each(function() {
      var element, i;
      element = $(this);
      i = parseInt(element.attr('i'));
      if (i === num) {
        element.transition({
          perspective: '1000px',
          rotateY: '0deg',
          scale: 1,
          left: 0
        });
        element.css('cursor', 'auto');
      }
      if ((i - num) === -1) {
        element.transition({
          perspective: '1000px',
          rotateY: '-70deg',
          scale: 0.8,
          left: -355
        });
      }
      if ((i - num) === 1) {
        element.transition({
          perspective: '1000px',
          rotateY: '70deg',
          scale: 0.8,
          left: 355
        });
      }
      if ((i - num) > 1) {
        element.transition({
          perspective: '1000px',
          rotateY: '0deg',
          scale: 0.67,
          left: (i - num) * 297
        });
      }
      if ((i - num) < -1) {
        return element.transition({
          perspective: '1000px',
          rotateY: '0deg',
          scale: 0.67,
          left: (i - num) * 297
        });
      }
    });
  };

}).call(this);

/*
//@ sourceMappingURL=script.map
*/
