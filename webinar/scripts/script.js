if (!metaballs) var metaballs = {};


$(document).ready(function(){
  var search = parent.location.hash.split('#')[1];
  var data = getQueryParams(search);

  if(data){

      if(data.isPaid == 'false'){
        data.isPaid = false;
      }

      var render = metaballs.renderMetaballs(data);
      var content = document.getElementById('content');
      content.innerHTML = '';
      content.appendChild(render);

      metaballs.oldRender = render;
  }

  metaballs.paramsCreator = function () {
      this.width = 1920;
      this.height = 1080;
      this.uid = 100;
      this.webinar_name = 'webinar name';
      this.category = '';

      this.duration = 30;
      this.time_before = 10;
      this.author_webinars = 5;
      this.total_watchers = 50;
      this.isPaid = false;
      this.type = 'webinar';
      this.tags = '';
      this['Финансы'] = false;
      this['Бухгалтерия'] = false;
      this['Налоги'] = false;
      this['Биржа'] = false;
      this['Торговля'] = false;
      this['Туризм'] = false;
      this['ИТ'] = false;
      this['Консалтинг'] = false;
      this['Брокер'] = false;
      this['Разработка'] = false;
      this['Программирование'] = false;
      this['Закон'] = false;
      this['HR'] = false;
      this['Маркетинг'] = false;
      this['Рекрутинг'] = false;
      this['Страхование'] = false;
      this['Наука'] = false;
      this['СМИ'] = false;
      this['Медиа'] = false;
      this['Дизайн'] = false;
      this['Реклама'] = false;
      this['Личность'] = false;
      this['PR'] = false;
      this['другие теги'] = '';

      var tags = ['Финансы',
      'Бухгалтерия',
      'Налоги',
      'Биржа',
      'Торговля',
      'Туризм',
      'ИТ',
      'Консалтинг',
      'Брокер',
      'Разработка',
      'Программирование',
      'Закон',
      'HR',
      'Маркетинг',
      'Рекрутинг',
      'Страхование',
      'Наука',
      'СМИ',
      'Медиа',
      'Дизайн',
      'Реклама',
      'Личность',
      'PR'];

      this.oldRender = metaballs.oldRender || [];
      this.lastRender = new Date()

      for (key in data){
        if(data[key] == 'false') data[key] = false;
        if(data[key] == 'true') data[key] = true;
        this[key] = data[key];
      }

      this.RENDER = function () {
          var current = new Date();
          if( current-this.lastRender < 100 ) return
          this.lastRender = current;

          console.log(current-this.lastRender);

          this.tags = '';
          for (var i = 0; i < tags.length; i++) {
              var tag = tags[i];
              if(this[tag]){
                  this.tags += (tag+', ')
              }
          }
          this.tags+=(', '+this['другие теги'])


          var render = metaballs.renderMetaballs(this, this.oldRender);
          var content = document.getElementById('content');
          content.innerHTML = '';

          content.appendChild(render);

          this.oldRender = render;

          var str = "";
          for (var key in this) {

              if(key=='RENDER' ||
                 key=='lastRender' ||
                 key=='oldRender'
               ) {
                 continue
               }


              if (str != "") {
                  str += "&";
              }
              str += key + "=" + encodeURIComponent(this[key]);
          }
          parent.location.hash = parent.location.hash.split('#')[0]+str;
      };
  };


  metaballs.params = new metaballs.paramsCreator();
  metaballs.gui = new dat.GUI();
  metaballs.gui.add(metaballs.params, 'width');
  metaballs.gui.add(metaballs.params, 'height');
  metaballs.gui.add(metaballs.params, 'uid');
  metaballs.gui.add(metaballs.params, 'webinar_name');
  metaballs.gui.add(metaballs.params, 'category', [
                  'Обучение',
                  'Тренинг',
                  'Экзамен',
                  'Аттестация',
                  'Тестирование',
                  'Промо',
                  'Рост',
                  'Квалификация',
                  'Инстрктаж',
                  'Совещание',
                  'Руководство',
                  'Управление',
                  'Менеджмент',
                  'Собеседование',
                  'Итоги'
                  ]);
  metaballs.gui.add(metaballs.params, 'duration');
  metaballs.gui.add(metaballs.params, 'time_before');
  metaballs.gui.add(metaballs.params, 'author_webinars');
  metaballs.gui.add(metaballs.params, 'total_watchers');
  metaballs.gui.add(metaballs.params, 'isPaid');

  metaballs.tagsFolder = metaballs.gui.addFolder('Теги');
  metaballs.tagsFolder.add(metaballs.params, 'Финансы');
  metaballs.tagsFolder.add(metaballs.params, 'Бухгалтерия');
  metaballs.tagsFolder.add(metaballs.params, 'Налоги');
  metaballs.tagsFolder.add(metaballs.params, 'Биржа');
  metaballs.tagsFolder.add(metaballs.params, 'Торговля');
  metaballs.tagsFolder.add(metaballs.params, 'Туризм');
  metaballs.tagsFolder.add(metaballs.params, 'ИТ');
  metaballs.tagsFolder.add(metaballs.params, 'Консалтинг');
  metaballs.tagsFolder.add(metaballs.params, 'Брокер');
  metaballs.tagsFolder.add(metaballs.params, 'Разработка');
  metaballs.tagsFolder.add(metaballs.params, 'Программирование');
  metaballs.tagsFolder.add(metaballs.params, 'Закон');
  metaballs.tagsFolder.add(metaballs.params, 'HR');
  metaballs.tagsFolder.add(metaballs.params, 'Маркетинг');
  metaballs.tagsFolder.add(metaballs.params, 'Рекрутинг');
  metaballs.tagsFolder.add(metaballs.params, 'Страхование');
  metaballs.tagsFolder.add(metaballs.params, 'Наука');
  metaballs.tagsFolder.add(metaballs.params, 'СМИ');
  metaballs.tagsFolder.add(metaballs.params, 'Медиа');
  metaballs.tagsFolder.add(metaballs.params, 'Дизайн');
  metaballs.tagsFolder.add(metaballs.params, 'Реклама');
  metaballs.tagsFolder.add(metaballs.params, 'Личность');
  metaballs.tagsFolder.add(metaballs.params, 'PR');
  metaballs.tagsFolder.add(metaballs.params, 'другие теги');


  metaballs.gui.add(metaballs.params, 'type');
  metaballs.gui.add(metaballs.params, 'RENDER');



});

var onChangeRender = function(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }

  var e = document.createEvent('UIEvents');
  e.initUIEvent('click', true, true);
  d3.select('.cr.function .button').node().dispatchEvent(e);
}

d3.select('.dg').on('change', onChangeRender);
d3.select('.dg').on('blur', onChangeRender);

$('#save').click(function(){
  encode_as_img_and_link()
});

function encode_as_img_and_link(){
  var html = $('#content>svg')[0];
  var serializer = new XMLSerializer();
  var result = serializer.serializeToString(html);
  var b64 = window.btoa(result);
  $("body>a").remove()
  $("body").append($("<a href-lang='image/svg+xml'  download='file.svg' href='data:image/svg+xml;base64,\n"+b64+"' title='file.svg'>Сохранить</a>"));
}


function getQueryParams(qs) {
    if(!qs) return false

    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);

        if(params[decodeURIComponent(tokens[1])] == 'false') params[decodeURIComponent(tokens[1])] = false;
        if(params[decodeURIComponent(tokens[1])] == 'true')  params[decodeURIComponent(tokens[1])] = true;
    }

    return params;
}










//
