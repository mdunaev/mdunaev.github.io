!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);

var metaballs = {};


metaballs.renderLogoParams = function(params){

    var height = params.width/5; //соотношение сторон в логотипе

    var svg_source = document.createElementNS('http://www.w3.org/2000/svg','svg');
    var svg = d3.select(svg_source)
        .attr('width', params.width)
        .attr('height', height)
        .style('overflow','visible');



    var pattern = d3.select(metaballs.renderLogoParamsMetaballs(params)).select('g');
    pattern.select('rect').remove();

    var scaleFactor = (params.width/220)*0.20;

    var patG = svg.append('g').attr('class', 'genLogoContent');
    patG.append(function(){
        return pattern.node();
    });

    var svgG = svg.append('g').attr('class', 'logoContentA').attr('transform', 'scale('+(params.width/220)+','+(params.width/220)+')');
    if(params.black){
        metaballs.logoSource = metaballs.logoSource.split('fill:#010101;').join('fill:#ffffff;')
        svg.style('background-color', '#000000');
        d3.select('body').style('background-color', '#000000');
    } else {
      metaballs.logoSource = metaballs.logoSource.split('fill:#ffffff;').join('fill:#010101;')
      svg.style('background-color', '#ffffff');
      d3.select('body').style('background-color', '#ffffff');
    }
    svgG.html(metaballs.logoSource);

    return svg_source
};



metaballs.renderLogoParamsMetaballs = function(params) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    //Цвет фона NR!
    var bgColor = '#000000';

    //Колличество точек
    var pointsNum = 5;


    params.height = params.width/10;

    //Размер метаболов NR!
    var metaballsSize = params.maxSize;


    //Цвет
    var rusAlphabit = [];
    for (var i = 1072; i < 1104; i++) {
        rusAlphabit.push(String.fromCharCode(i));
    }

    var engAlphabit = [];
    for (var i = 97; i < 123; i++) {
        engAlphabit.push(String.fromCharCode(i));
    }

    var webinar_name = params.webinar_name.split('');
    var result = 0;
    var maxResult = 0;
    for (var i = 0; i < webinar_name.length; i++) {
        var rusIndex = rusAlphabit.indexOf(webinar_name[i]);
        var engIndex = engAlphabit.indexOf(webinar_name[i]);

        var i2 = i + 1;
        i2 = 1;
        if (rusIndex != -1) {
            result += rusIndex / i2;
            maxResult += 25 / i2;
        } else if (engIndex != -1) {
            result += engIndex / i2;
            maxResult += 25 / i2;
        }

    }

    var basicPresetNum = Math.round(result / maxResult * 100) / 10;
    var presetPart = basicPresetNum % 1;
    basicPresetNum = Math.round(basicPresetNum);


    var presets = [
        [169, 169, 169, 45, 45, 45],
        [245, 245, 53, 252, 156, 38],
        [252, 151, 41, 251, 15, 33],
        [251, 34, 34, 150, 38, 250],
        [233, 34, 252, 36, 59, 251],
        [252, 179, 44, 181, 254, 52],
        [43, 254, 47, 253, 227, 50],
        [55, 253, 254, 63, 254, 48],
        [36, 113, 252, 43, 254, 130],
        [45, 30, 251, 52, 242, 254]
    ];

    var currentPreset = presets[basicPresetNum].slice();
    var nextPresetNum = ((basicPresetNum + 1) < 9) ? basicPresetNum + 1 : basicPresetNum;
    var nextPreset = presets[nextPresetNum].slice();

    for (var i = 0; i < 6; i++) {
        currentPreset[i] = currentPreset[i] + (nextPreset[i] - currentPreset[i]) * presetPart;
    }


    //Платный
    var isPaid = params.isPaid;

    //Категория
    var isDrawInside = params.isDrawInside;

    //Слои
    var numInsight = params.numOutlines;
    var numOutside = params.numFills;


    var svg_source = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    var randomFromString = function(str){
      var m5 = md5(str);
      var arr = m5.split('');

      var val = 0;
      var max = 0;
      for (var i = 0; i < arr.length; i++) {
        var letter = arr[i];
        if(+letter){
          val+=(+letter);
          max+=9;
        }
      }
      return (val/max)%0.2*5;
    }

    //Создание объектов точек
    var points = [];
    for (var i = 0; i < pointsNum; i++) {

        var randomX = randomFromString('x'+i+params.webinar_name);
        var randomY = randomFromString('y'+i+params.webinar_name+params.uid);
        var randomSize = randomFromString(params.webinar_name+i);
        var radius = metaballsSize * randomSize;
        if(radius < params.max_size/5) radius = params.max_size/5
        if(radius < 10) radius = 10

        if(!isDrawInside) radius = radius/2;

        points.push({
            x: randomX * params.width/3,
            y: randomY * params.width/10+params.width/20,
            radius: radius
        })
    };

    var svg = d3.select(svg_source)
        .attr('width', params.width)
        .attr('height', params.height)
        .style('background-color', bgColor).append('g');

    //Фон кругов

    var startColor = d3.rgb(currentPreset[0], currentPreset[1], currentPreset[2]);
    var endColor = d3.rgb(currentPreset[3], currentPreset[4], currentPreset[5]);

    var gradient = svg
        .append("linearGradient")
        .attr("y1", 0)
        .attr("y2", params.height)
        .attr("x1", "0")
        .attr("x2", "0")
        .attr("id", "gradient")
        .attr("gradientUnits", "userSpaceOnUse");

    gradient
        .append("stop")
        .attr("offset", "0")
        .attr("stop-color", startColor.toString());

    gradient
        .append("stop")
        .attr("offset", "1")
        .attr("stop-color", endColor.toString());


    var bg = svg.append('rect')
        .attr('width', params.width)
        .attr('height', params.height)
        .attr("fill", (isPaid) ? "url(#gradient)" : "#000000");

    //Рендер кругов
    var drawLayer = function(stepNum, addToRadius, fillColor, strokeWidth, strokeColor, stepNumDivider){
                stepNum++;
                if(!stepNumDivider)stepNumDivider = 5;
                // addToRadius = addToRadius / (1 + stepNum/stepNumDivider);
                addToRadius = addToRadius*(params.width/300)
                addToRadius = addToRadius / (1 + stepNum/stepNumDivider);
                var connections = [];
                for (var i = 0; i < points.length; i++) { //Перебор всех точек
                    var point_data = points[i];
                    var layer = svg.append('g').attr('class', 'genField');

                    //рисуются окружности
                    var radius = point_data.radius+addToRadius;


                    if (radius<0) continue

                    layer.append('circle')
                        .attr('cx', point_data.x)
                        .attr('cy', point_data.y)
                        .attr('fill', fillColor)
                        .attr('stroke-width', strokeWidth*2 )
                        .attr('stroke', strokeColor )
                        .attr('r', radius);


                    for (var a = 0; a < points.length; a++) { //всех точек второй раз для сравнения

                        if (i == a) continue;
                        var second_point_data = points[a];


                        //создание объектов с данными для обоих окружностей
                        var ball1 = {
                            position: {
                                x: point_data.x,
                                y: point_data.y
                            },
                            bounds: {
                                width: (point_data.radius+addToRadius) * 2,
                                height: (point_data.radius+addToRadius) * 2
                            }
                        };

                        var ball2 = {
                            position: {
                                x: second_point_data.x,
                                y: second_point_data.y
                            },
                            bounds: {
                                width: (second_point_data.radius+addToRadius) * 2,
                                height: (second_point_data.radius+addToRadius) * 2
                            }
                        };

                        //максимальный размер круга
                        var max_size = ( (point_data.radius+addToRadius) + (second_point_data.radius+addToRadius) ) * 1.3;

                        //вычисление объекта связи
                        var mtb = metaballs.metaball(ball1, ball2, 0.5, 50, max_size);
                        if (mtb) {
                            connections.push(mtb);
                        }
                    }
                }

                //рисование связей
                for (var i = 0; i < connections.length; i++) {
                    var connection = connections[i];
                    var coords = [];
                    for (var a = 0; a < connection.segments.length; a++) {
                        var segment = connection.segments[a];
                        var end = segment.handleOut;
                        if (!end) end = segment.handleIn;

                        if (a % 2 == 0) {
                            coords.push([segment.x, segment.y]);
                            coords.push([segment.x + end.x, segment.y + end.y]);
                        } else {
                            coords.push([segment.x + end.x, segment.y + end.y]);
                            coords.push([segment.x, segment.y]);
                        }
                    }

                    var line = 'M' + coords[0][0] + ',' + coords[0][1] + ' C' + coords[1][0] + ',' + coords[1][1] + ' ' + coords[2][0] + ',' + coords[2][1] + ' ' + coords[3][0] + ',' + coords[3][1] + ' ' +
                        'L' + coords[4][0] + ' ' + coords[4][1] +
                        'C' + coords[5][0] + ',' + coords[5][1] + ' ' + coords[6][0] + ',' + coords[6][1] + ' ' + coords[7][0] + ',' + coords[7][1] + ' Z';

                    svg.append("path")
                        .attr("d", line)
                        .attr("shape-rendering", "optimizeSpeed")
                        .attr('stroke-width', strokeWidth*2 )
                        .attr('stroke', strokeColor )
                        .attr('fill', fillColor);
                }
    }

    var render = function() {
                if(isPaid){ //Отрисовка платного вебинара
                    //Арбисы
                    //из центра от черного к белому
                    var colors = d3.scale.linear()
                                  .domain([0,numOutside])
                                  .interpolate(d3.interpolateRgb)
                                  .range(["#000000", "#ffffff"]);

                    for (var i = numOutside; i !=0; i--) {
                        var color = colors(i);
                        drawLayer(i,i*5, "url(#gradient)", 1, color);
                        drawLayer(i, i*5, 'url(#gradient)');
                    }

                    var colors = d3.scale.linear()
                                  .domain([0,numInsight])
                                  .interpolate(d3.interpolateRgb)
                                  .range(["#ffffff", "#000000"]);

                    if (numInsight!=0) drawLayer(i, 5, "#1c1c1c");
                    for (var i = 1; i < numInsight; i++) {
                       var color = colors(i);

                       drawLayer(i, -i*5, color);
                   }

                } else { //Отрисовка бесплатного вебинара
                    if(isDrawInside){//Арбисы внутри
                        var maxSize = numInsight+numOutside;

                        var colors = d3.scale.linear()
                                      .domain([0,maxSize])
                                      .interpolate(d3.interpolateRgb)
                                      .range([startColor.toString(), endColor.toString()]);

                        for (var i = 0; i < numInsight; i++) {
                            var color = colors(i);
                            drawLayer(i, -i*5, colors(i));
                        }

                        var arbColorFill = colors(i);
                        for (var i = numInsight; i < maxSize; i++) {
                            var color = colors(i);
                            drawLayer(i, -i*5, arbColorFill, 1, colors(i), 10);
                            drawLayer(i, -i*5, arbColorFill, 0, 0, 10);
                        }

                    } else { //Арбисы снаружи

                        var maxSize = numInsight+numOutside;
                        var colors = d3.scale.linear()
                                      .domain([0,maxSize])
                                      .interpolate(d3.interpolateRgb)
                                      .range([startColor.toString(), endColor.toString()]);

                        for (var i = maxSize; i != numInsight; i--) {
                            var color = colors(i);
                            drawLayer(i, i*5, colors(i), 0, 0, 20);
                        }

                        var arbColorFill = colors(i);
                        for (var i = numInsight; i > 0; i--) {
                            var color = colors(i);
                            drawLayer(i, i*5, arbColorFill, 1, colors(i), 10);
                            drawLayer(i, i*5, arbColorFill, 0, 0, 10);
                        }

                    }


                }
    }

    //Анимация появления
    var originalPoints = points.slice();

    var frameNum = 0;
    d3.select("body").transition()
          .ease("back-out")
          .duration(1000)
          .tween("back-out", function() {
            frameNum++;
            if(frameNum%2==0) return true
            return function(a) {
                d3.selectAll('.genLogoContent').selectAll('path').remove();
                d3.selectAll('.genLogoContent').selectAll('.genField').remove();

                points = [];
                for (var i = 0; i < originalPoints.length; i++) {
                    var point = {x:0, y:0, radius:0};
                    point.x = originalPoints[i].x;
                    point.y = originalPoints[i].y;
                    point.radius = originalPoints[i].radius;
                    var radius = point.radius;
                    point.radius = radius * a;
                    points.push(point);
                }
                render();

            }
          });

    return svg_source
}





//
//
// Logo params end
//
//

metaballs.renderLogo = function(width){

    var height = width/2.933; //соотношение сторон в логотипе

    var svg_source = document.createElementNS('http://www.w3.org/2000/svg','svg');
    var svg = d3.select(svg_source)
        .attr('width', width)
        .attr('height', height)
        .style('overflow','visible').append('g').attr('class', 'logoContentA').attr('transform', 'scale('+(width/220)+','+(width/220)+')')


    svg.html( metaballs.logoSource );

    bgroup = svg.append('g');
    bgroup.style('display', 'none');

    metagroup = svg.append('g');
    var circles = [];
    for (var i = 0; i < 5; i++) {
      var maxSize = 20;
      var originalWidth = 55;

      var ball = {
                    position: {
                        x: 65*Math.random()+10,
                        y: 25*Math.random()+30
                    },
                    bounds: {
                        width: (maxSize) * Math.random()+20,
                        height: (maxSize) * Math.random()+20
                    }
                  };

        var circle = bgroup.append('circle')
                    .attr('cx', ball.position.x)
                    .attr('cy', ball.position.y)
                    .attr('r', ball.bounds.width/2);
        circle.i = i;


        var animateCircle = function(_circle){

          var cx = 25*Math.random()+13*_circle.i;
          var r = (((maxSize) * Math.random()+10)/1.2);
          if(_circle.i==4){
            cx = 90-r-(Math.random()*10);
          }

            _circle.transition()
              .ease("sin-in-out")
              .delay(1000*Math.random())
              .duration(3000+7000*Math.random())
              .each('end', function(){
                animateCircle(_circle);
              })
              .attr('cx', cx)
              .attr('cy', 25*Math.random()+30)
              .attr('r', r);
        };
        animateCircle(circle);


        bgroup.attr('fill', d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255));
        bgroup.attr('fill2', d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255));

        var recolor = function(){
          bgroup.transition()
            .ease("sin-in-out")
            .delay(1000*Math.random())
            .duration(6000*Math.random())
            .attr('fill', d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255))
            .attr('fill2', d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255))
            .each('end', recolor)
        };

        recolor();


        circles.push(circle);

    };

    //Анимация логотипа
    var logoAnimation = function(){
      var balls = bgroup.selectAll('circle')[0];
      var startColor = bgroup.attr('fill');
      var endColor = bgroup.attr('fill2');


      //Пять слоев

      metagroup.selectAll('circle').remove();
      metagroup.selectAll('path').remove();

      for (var a = 0; a < 5; a++) { //перебор по кругам
        for (var i = 0; i < balls.length; i++) {//рисование слоев круга
            var ball = d3.select(balls[i]);
            var cx = ball.attr('cx');
            var cy = ball.attr('cy');
            var r = ball.attr('r')-a*3;
            if(r<=0) continue

            var colors = d3.scale.linear()
                              .domain([0,5])
                              .interpolate(d3.interpolateRgb)
                              .range([startColor, endColor]);
            var color = colors(a);
            metagroup.append('circle')
              .attr('cx', cx)
              .attr('cy', cy)
              .attr('r', r)
              .attr('fill', color);


            var connections = [];
            for (var v = 0; v < 5; v++) { //вычисление связей
              if(v==i) continue

              var ball1source = d3.select(balls[i]);
              var ball1 = {
                position: {
                    x: +ball1source.attr('cx'),
                    y: +ball1source.attr('cy')
                },
                bounds: {
                    width: (+ball1source.attr('r')-a*3)*2,
                    height: (+ball1source.attr('r')-a*3)*2
                }
              };

              var ball2source = d3.select(balls[v]);
              var ball2 = {
                position: {
                    x: +ball2source.attr('cx'),
                    y: +ball2source.attr('cy')
                },
                bounds: {
                    width: (+ball2source.attr('r')-a*3)*2,
                    height: (+ball2source.attr('r')-a*3)*2
                }
              };

              if(ball1.bounds.width<5) continue
              if(ball2.bounds.width<5) continue
              var connection = metaballs.metaball(ball1, ball2, 0.5, 30, (ball1.bounds.width+ball2.bounds.width)-5);
              connections.push(connection);
            }

            for (var c = 0; c < connections.length; c++) {
              var connection = connections[c];
              if(!connection) continue


              /////!!!!
              /////!!!!
              /////!!!!

                  var coords = [];
                  for (var x = 0; x < connection.segments.length; x++) {
                      var segment = connection.segments[x];
                      var end = segment.handleOut;
                      if (!end) end = segment.handleIn;

                      if (x % 2 == 0) {
                          coords.push([segment.x, segment.y]);
                          coords.push([segment.x + end.x, segment.y + end.y]);
                      } else {
                          coords.push([segment.x + end.x, segment.y + end.y]);
                          coords.push([segment.x, segment.y]);
                      }
                  }

                  var line = 'M' + coords[0][0] + ',' + coords[0][1] + ' C' + coords[1][0] + ',' + coords[1][1] + ' ' + coords[2][0] + ',' + coords[2][1] + ' ' + coords[3][0] + ',' + coords[3][1] + ' ' +
                      'L' + coords[4][0] + ' ' + coords[4][1] +
                      'C' + coords[5][0] + ',' + coords[5][1] + ' ' + coords[6][0] + ',' + coords[6][1] + ' ' + coords[7][0] + ',' + coords[7][1] + ' Z';

                  metagroup.append("path")
                      .attr("d", line)
                      .attr('fill', color);

              /////!!!!
              /////!!!!
              /////!!!!

            }

        }
      }

      window.requestAnimationFrame(logoAnimation);
    }
    logoAnimation();

    return svg_source
};

metaballs.renderMetaballs = function(params, oldRender) {
    if(!oldRender) oldRender = {points:[]};

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    //Цвет фона NR!
    var bgColor = '#000000';

    //Колличество точек
    var pointsNum = params.author_webinars;
    if (pointsNum > 12) pointsNum = 12;
    if (pointsNum < 1) pointsNum = 1;
    pointsNum = Math.sqrt(pointsNum) / Math.sqrt(120) * 25;

    //Размер метаболов NR!
    var total_watchers = params.total_watchers;
    if (total_watchers > 100) total_watchers = 100;
    if (total_watchers < 35) total_watchers = 30 + total_watchers/35*5;
    total_watchers = total_watchers / 200;

    var duration = params.duration;
    if (duration > 180) duration = 180;
    if (duration < 30) duration = 30;
    duration = 2 - duration / 180;


    var maxSize = (params.width/pointsNum + params.height/pointsNum)/1.2;
    var metaballsSize = total_watchers * duration * maxSize*1.2;
    var min = (params.width<params.height) ? params.width : params.height;
    if(metaballsSize>min/2) metaballsSize = min/2;

    //Раскрытие метабола
    var time_before = params.time_before;
    time_before = Math.pow(time_before, 2)
    if (time_before > 28224) time_before = 28224;
    var drawableWidth = 1;

    var gap = 1-(params.time_before / 1680);
    gap = gap*(params.width);

    if(gap<params.width*0.7) gap=params.width*0.7;

    //Заряд точек
    var chargePoints = params.time_before;
    if (chargePoints > 168) chargePoints = 168;
    chargePoints = 4.04 - (chargePoints / 168 * 3.636)

    //Цвет
    var rusAlphabit = [];
    for (var i = 1072; i < 1104; i++) {
        rusAlphabit.push(String.fromCharCode(i));
    }

    var engAlphabit = [];
    for (var i = 97; i < 123; i++) {
        engAlphabit.push(String.fromCharCode(i));
    }

    var webinar_name = params.webinar_name.split('');

    webinar_name.push(engAlphabit[webinar_name[0]])
    webinar_name.push(engAlphabit[webinar_name[1]])
    webinar_name.push(engAlphabit[webinar_name[2]])

    var result = 0;
    var maxResult = 0;
    for (var i = 0; i < webinar_name.length; i++) {
        var rusIndex = rusAlphabit.indexOf(webinar_name[i]);
        var engIndex = engAlphabit.indexOf(webinar_name[i]);

        var i2 = i + 1;
        if (rusIndex != -1) {
            result += rusIndex / i2;
            maxResult += 25 / i2;
        } else if (engIndex != -1) {
            result += engIndex / i2;
            maxResult += 25 / i2;
        }

    }


    var basicPresetNum = Math.round(result / maxResult * 100) / 10;
    var presetPart = basicPresetNum % 1;
    basicPresetNum = Math.round(basicPresetNum);


    var presets = [
        [169, 169, 169, 45, 45, 45],
        [245, 245, 53, 252, 156, 38],
        [252, 151, 41, 251, 15, 33],
        [251, 34, 34, 150, 38, 250],
        [233, 34, 252, 36, 59, 251],
        [252, 179, 44, 181, 254, 52],
        [43, 254, 47, 253, 227, 50],
        [55, 253, 254, 63, 254, 48],
        [36, 113, 252, 43, 254, 130],
        [45, 30, 251, 52, 242, 254]
    ];

    var currentPreset = presets[basicPresetNum].slice();
    var nextPresetNum = ((basicPresetNum + 1) < 9) ? basicPresetNum + 1 : basicPresetNum;
    var nextPreset = presets[nextPresetNum].slice();

    for (var i = 0; i < 6; i++) {
        currentPreset[i] = currentPreset[i] + (nextPreset[i] - currentPreset[i]) * presetPart;
    }


    //Платный
    var isPaid = params.isPaid;

    //Категория
    var falseCategory = ['обучение', 'тренинг', 'экзамен', 'аттестация', 'тестирование', 'промо', 'рост', 'квалификация', 'инстрктаж'];
    var isDrawInside = (falseCategory.indexOf(params.category.toLowerCase()) != -1);

    //Слои
    var tags = (params.tags+","+params.type).toLowerCase().split(' ').join('').split(',');

    var tagsValues = [
        ['Продажи', 4, 0],
        ['Финансы', 3, 0],
        ['Бухгалтерия', 10, 0],
        ['Налоги', 5, 0],
        ['Биржа', 7, 1],
        ['Торговля', 2, 2],
        ['Туризм', 3, 0],
        ['ИТ', 8, 0],
        ['IT', 8, 0],
        ['Консалтинг', 6, 3],
        ['Брокер', 6, 0],
        ['Разработка', 2, 0],
        ['Программирование', 5, 1],
        ['Закон', 10, 0],
        ['HR', 4, 2],
        ['Маркетинг', 3, 3],
        ['Рекрутинг', 4, 1],
        ['Страхование', 9, 1],
        ['Наука', 2, 5],
        ['СМИ', 0, 3],
        ['Медиа', 0, 4],
        ['Дизайн', 0, 8],
        ['Реклама', 0, 5],
        ['Личность', 5, 5],
        ['PR', 3, 6]
    ];

    var numInsight = 0;
    var numOutside = 0;
    for (var i = 0; i < tagsValues.length; i++) {
        var value = tagsValues[i];
        if (tags.indexOf(value[0].toLowerCase()) != -1) {
            numInsight += value[2];
            numOutside += value[1];
        }
    }

    if (numOutside == 0 && numInsight == 0) {
        numInsight = (isPaid) ? 2 : 1;
        numOutside = (isPaid) ? 0 : 1;
    }

    numInsight = (numInsight > 10) ? 10 : numInsight;
    numOutside = (numOutside > 10) ? 10 : numOutside;


    var svg_source = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    var randomFromString = function(str){
      var m5 = md5(str);
      var arr = m5.split('');

      var val = 0;
      var max = 0;
      for (var i = 0; i < arr.length; i++) {
        var letter = arr[i];
        if(+letter){
          val+=(+letter);
          max+=9;
        }
      }

      return (val/max)%0.2*5;
    }

    //Создание объектов точек
    var points = [];
    for (var i = 0; i < pointsNum; i++) {

        var randomX = randomFromString('x'+i+params.webinar_name);
        var randomY = randomFromString('y'+i+params.webinar_name+params.uid);
        var randomSize = randomFromString(params.category+i);
        var radius = metaballsSize * randomSize;
        radius *= 1.3;

        if(radius < 40) radius = 40
        if(isPaid) {
          radius *= 1.3;
          if(radius < 50) radius=0
        }


        points.push({
            x: randomX * drawableWidth * (params.width-gap*2)+gap,
            y: randomY * params.height,
            radius: radius
        })
    };

    var svg = d3.select(svg_source)
        .attr('width', params.width)
        .attr('height', params.height)
        .style('background-color', bgColor).append('g');

    //Фон кругов

    var startColor = d3.rgb(currentPreset[0], currentPreset[1], currentPreset[2]);
    var endColor = d3.rgb(currentPreset[3], currentPreset[4], currentPreset[5]);

    var gradient = svg
        .append("linearGradient")
        .attr("y1", 0)
        .attr("y2", params.height)
        .attr("x1", "0")
        .attr("x2", "0")
        .attr("id", "gradient")
        .attr("gradientUnits", "userSpaceOnUse");

    gradient
        .append("stop")
        .attr("offset", "0")
        .attr("stop-color", startColor.toString());

    gradient
        .append("stop")
        .attr("offset", "1")
        .attr("stop-color", endColor.toString());


    var bg = svg.append('rect')
        .attr('width', params.width)
        .attr('height', params.height)
        .attr("fill", (isPaid) ? "url(#gradient)" : "#000000");

    //Рендер кругов
    var drawLayer = function(stepNum, addToRadius, fillColor, strokeWidth, strokeColor, stepNumDivider){
                stepNum++;
                if(!stepNumDivider)stepNumDivider = 5;
                addToRadius = addToRadius / (1 + stepNum/stepNumDivider) * 1.5;
                var connections = [];
                for (var i = 0; i < points.length; i++) { //Перебор всех точек
                    var point_data = points[i];
                    var layer = svg.append('g').attr('class', 'genField');

                    //рисуются окружности

                    var radius = point_data.radius+addToRadius;

                    if (radius<0) continue
                    if (radius<10) radius=10;

                    layer.append('circle')
                        .attr('cx', point_data.x)
                        .attr('cy', point_data.y)
                        .attr('fill', fillColor)
                        .attr('stroke-width', strokeWidth*2 )
                        .attr('stroke', strokeColor )
                        .attr('r', radius);


                    for (var a = 0; a < points.length; a++) { //всех точек второй раз для сравнения

                        if (i == a) continue;
                        var second_point_data = points[a];


                        //создание объектов с данными для обоих окружностей
                        var ball1 = {
                            position: {
                                x: point_data.x,
                                y: point_data.y
                            },
                            bounds: {
                                width: (point_data.radius+addToRadius) * 2,
                                height: (point_data.radius+addToRadius) * 2
                            }
                        };

                        var ball2 = {
                            position: {
                                x: second_point_data.x,
                                y: second_point_data.y
                            },
                            bounds: {
                                width: (second_point_data.radius+addToRadius) * 2,
                                height: (second_point_data.radius+addToRadius) * 2
                            }
                        };

                        //максимальный размер круга
                        var max_size = ( (point_data.radius+addToRadius) + (second_point_data.radius+addToRadius) ) * 1.3;

                        //вычисление объекта связи
                        var mtb = metaballs.metaball(ball1, ball2, 0.5, 50, max_size);
                        if (mtb) {
                            connections.push(mtb);
                        }
                    }
                }

                //рисование связей
                for (var i = 0; i < connections.length; i++) {
                    var connection = connections[i];
                    var coords = [];
                    for (var a = 0; a < connection.segments.length; a++) {
                        var segment = connection.segments[a];
                        var end = segment.handleOut;
                        if (!end) end = segment.handleIn;

                        if (a % 2 == 0) {
                            coords.push([segment.x, segment.y]);
                            coords.push([segment.x + end.x, segment.y + end.y]);
                        } else {
                            coords.push([segment.x + end.x, segment.y + end.y]);
                            coords.push([segment.x, segment.y]);
                        }
                    }

                    var line = 'M' + coords[0][0] + ',' + coords[0][1] + ' C' + coords[1][0] + ',' + coords[1][1] + ' ' + coords[2][0] + ',' + coords[2][1] + ' ' + coords[3][0] + ',' + coords[3][1] + ' ' +
                        'L' + coords[4][0] + ' ' + coords[4][1] +
                        'C' + coords[5][0] + ',' + coords[5][1] + ' ' + coords[6][0] + ',' + coords[6][1] + ' ' + coords[7][0] + ',' + coords[7][1] + ' Z';

                    svg.append("path")
                        .attr("d", line)
                        .attr("shape-rendering", "optimizeSpeed")
                        .attr('stroke-width', strokeWidth*2 )
                        .attr('stroke', strokeColor )
                        .attr('fill', fillColor);
                }
    }

    var render = function() {
                if(isPaid){ //Отрисовка платного вебинара
                    //Арбисы
                    //из центра от черного к белому
                    var colors = d3.scale.linear()
                                  .domain([0,numOutside])
                                  .interpolate(d3.interpolateRgb)
                                  .range(["#000000", "#ffffff"]);

                    for (var i = numOutside; i !=0; i--) {
                        var color = colors(i);
                        drawLayer(i,i*15, "url(#gradient)", 1, color);
                        drawLayer(i, i*15, 'url(#gradient)');
                    }

                    var colors = d3.scale.linear()
                                  .domain([0,numInsight])
                                  .interpolate(d3.interpolateRgb)
                                  .range(["#ffffff", "#000000"]);

                    if (numInsight!=0) drawLayer(i, 5, "#1c1c1c");
                    for (var i = 1; i < numInsight; i++) {
                       var color = colors(i);

                       drawLayer(i, -i*15, color);
                   }

                } else { //Отрисовка бесплатного вебинара
                    if(isDrawInside){//Арбисы внутри
                        var maxSize = numInsight+numOutside;

                        var colors = d3.scale.linear()
                                      .domain([0,maxSize])
                                      .interpolate(d3.interpolateRgb)
                                      .range([startColor.toString(), endColor.toString()]);

                        for (var i = 0; i < numInsight; i++) {
                            var color = colors(i);
                            drawLayer(i, -i*12, colors(i));
                        }

                        var arbColorFill = colors(i);
                        for (var i = numInsight; i < maxSize; i++) {
                            var color = colors(i);
                            drawLayer(i, -i*12, arbColorFill, 1, colors(i), 10);
                            drawLayer(i, -i*12, arbColorFill, 0, 0, 10);
                        }

                    } else { //Арбисы снаружи

                        var maxSize = numInsight+numOutside;
                        var colors = d3.scale.linear()
                                      .domain([0,maxSize])
                                      .interpolate(d3.interpolateRgb)
                                      .range([startColor.toString(), endColor.toString()]);

                        for (var i = maxSize; i != numInsight; i--) {
                            var color = colors(i);
                            drawLayer(i, i*12, arbColorFill, 1, colors(i), 10);
                            drawLayer(i, i*12, 0, 0, 0, 10);
                        }

                        var arbColorFill = colors(i);
                        for (var i = numInsight; i > 0; i--) {
                            var color = colors(i);
                            drawLayer(i, i*12, colors(i), 0, 0, 10);
                        }

                    }


                }
    }

    //Анимация появления
    var originalPoints = points.slice();
    if (!oldRender.points) {
        oldRender.points = [{x:0, y:0, radius: 0}];
    }

    var interNum9 = function(step, start, end){
      step = Math.sin(Math.acos(1-step/49));
      // step = step/49;
      return start + (end-start)*step;
    }

    var maxPoints = (oldRender.points.length > originalPoints.length)
          ? oldRender.points.length
          : originalPoints.length;


    var animPoints = [];
    for(var a=0; a<50; a++){
      for(var i=0; i<maxPoints; i++){




        var oldPoint = oldRender.points[i];
        var originalPoint = originalPoints[i];

        if(!oldPoint){
          oldPoint = {
            x: originalPoint.x,
            y: originalPoint.y,
            radius: 0
          }
        }

        if(!originalPoint){
          originalPoint = {
            x: oldPoint.x,
            y: oldPoint.y,
            radius: 0
          }
        }


        if(i==0) animPoints[a] = [];
        if(originalPoint && oldPoint){
          animPoints[a].push({
            x: interNum9(a, oldPoint.x, originalPoint.x),
            y: interNum9(a, oldPoint.y, originalPoint.y),
            radius: interNum9(a, oldPoint.radius, originalPoint.radius)
          });
        }
      }
    }

    var animate = function(step){
      if(step<50){
        requestAnimationFrame(animate.bind(this, step+1));
        // STEP START

            d3.select(svg_source).selectAll('.genField').remove();
            d3.select(svg_source).selectAll('path').remove();

            points = animPoints[step];
            render();

        // STEP END
      }
    };
    animate(0);

    // var frameNum = 0;
    // d3.select("body").transition()
    //       .ease("back-out")
    //       .duration(1000)
    //       .tween("back-out", function() {
    //         frameNum++;
    //         if(frameNum%2==0) return true
    //         return function(a) {
    //             d3.select(svg_source).selectAll('.genField').remove();
    //             d3.select(svg_source).selectAll('path').remove();
    //
    //             points = [];
    //             for (var i = 0; i < originalPoints.length; i++) {
    //                 var point = {x:0, y:0, radius:0};
    //                 point.x = originalPoints[i].x;
    //                 point.y = originalPoints[i].y;
    //                 point.radius = originalPoints[i].radius;
    //                 var radius = point.radius;
    //                 point.radius = radius * a;
    //                 points.push(point);
    //             }
    //             render();
    //
    //         }
    //       });

    svg_source.points = originalPoints;

    return svg_source
}


// ---------------------------------------------
metaballs.getDistance = function(coord1, coord2) {

    var x1 = coord1.x;
    var y1 = coord1.y;

    var x2 = coord2.x;
    var y2 = coord2.y;

    return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
}

metaballs.getAngleInRadians = function(p1, p2) {
    return angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

metaballs.plus = function(coord1, coord2) {

    var dx = coord2.x + coord1.x;
    var dy = coord2.y + coord1.y;

    return {
        x: coord1.x + coord2.x,
        y: coord1.y + coord2.y,
        length: Math.sqrt(dx * dx + dy * dy),
        angle: Math.acos(dx / Math.sqrt(dx * dx + dy * dy))
    }
}

metaballs.minus = function(coord1, coord2) {

    var dx = coord2.x - coord1.x;
    var dy = coord2.y - coord1.y;

    return {
        x: coord1.x - coord2.x,
        y: coord1.y - coord2.y,
        length: Math.sqrt(dx * dx + dy * dy),
        angle: Math.acos(dx / Math.sqrt(dx * dx + dy * dy))
    }
}

metaballs.getVector = function(radians, length) { //!

    var vector = {
        angle: radians,
        length: length
    };

    vector.x = Math.cos(vector.angle) * vector.length;
    vector.y = Math.sin(vector.angle) * vector.length;

    return vector
}

metaballs.metaball = function(ball1, ball2, v, handle_len_rate, maxDistance) {

    var center1 = ball1.position;
    var center2 = ball2.position;
    var radius1 = ball1.bounds.width / 2;
    var radius2 = ball2.bounds.width / 2;
    var pi2 = Math.PI / 2;
    var d = metaballs.getDistance(center1, center2); //!

    var u1, u2;

    if (radius1 == 0 || radius2 == 0)
        return;

    if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
        return;
    } else if (d < radius1 + radius2) {
        u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
            (2 * radius1 * d));
        u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
            (2 * radius2 * d));
    } else {
        u1 = 0;
        u2 = 0;
    }

    var angle1 = metaballs.getAngleInRadians(center1, center2); //!

    var angle2 = Math.acos((radius1 - radius2) / d);
    var angle1a = angle1 + u1 + (angle2 - u1) * v;
    var angle1b = angle1 - u1 - (angle2 - u1) * v;
    var angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
    var angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;

    var p1a = metaballs.plus(center1, metaballs.getVector(angle1a, radius1));
    var p1b = metaballs.plus(center1, metaballs.getVector(angle1b, radius1));
    var p2a = metaballs.plus(center2, metaballs.getVector(angle2a, radius2));
    var p2b = metaballs.plus(center2, metaballs.getVector(angle2b, radius2));


    var totalRadius = (radius1 + radius2);
    var d2 = Math.min(v * handle_len_rate, metaballs.minus(p1a, p2a).length / totalRadius);


    d2 *= Math.min(1, d * 2 / (radius1 + radius2));

    radius1 *= d2;
    radius2 *= d2;

    var path = {
        segments: [p1a, p2a, p2b, p1b],
        style: ball1.style,
        closed: true
    };
    var segments = path.segments;
    segments[0].handleOut = metaballs.getVector(angle1a - pi2, radius1);
    segments[1].handleIn = metaballs.getVector(angle2a + pi2, radius2);
    segments[2].handleOut = metaballs.getVector(angle2b - pi2, radius2);
    segments[3].handleIn = metaballs.getVector(angle1b + pi2, radius1);
    return path;
};


metaballs.logoSource = '<g> <g transform="translate(0, -20)"> <path style="fill:#010101;" d="M91.25,32.193h5.428l3.717,15.985l3.792-15.836h5.056l3.941,15.836l3.494-15.985h5.13 l-6.245,22.974h-4.684l-4.312-17.026l-4.164,17.026h-4.535L91.25,32.193z"/> <path style="fill:#010101;" d="M138.165,49.962c-0.297,1.859-1.041,3.346-2.305,4.312c-1.19,0.967-2.974,1.487-5.279,1.487 c-2.825,0-4.907-0.743-6.32-2.305s-2.082-3.717-2.082-6.543c0-1.413,0.223-2.677,0.595-3.792s0.967-2.082,1.71-2.825 c0.743-0.743,1.636-1.338,2.677-1.784c1.041-0.372,2.156-0.595,3.42-0.595c2.602,0,4.535,0.743,5.799,2.23 c1.264,1.487,1.933,3.494,1.933,6.022v1.784H126.64c0.074,1.338,0.372,2.379,1.041,3.197c0.669,0.743,1.636,1.115,2.9,1.115 c1.784,0,2.825-0.743,3.123-2.23h4.461V49.962z M134.075,44.907c0-1.19-0.297-2.082-0.818-2.677 c-0.595-0.669-1.487-0.967-2.677-0.967c-0.595,0-1.115,0.074-1.561,0.297c-0.446,0.223-0.818,0.446-1.115,0.818 c-0.297,0.297-0.52,0.743-0.743,1.19c-0.149,0.446-0.297,0.892-0.297,1.413h7.212V44.907z"/> <path style="fill:#010101;" d="M142.031,32.193h4.535v8.253c1.264-1.71,2.974-2.528,5.13-2.528c2.305,0,4.089,0.818,5.279,2.379 c1.19,1.561,1.71,3.792,1.71,6.543c0,1.338-0.149,2.528-0.52,3.643c-0.297,1.115-0.818,2.007-1.487,2.825 c-0.669,0.818-1.413,1.413-2.305,1.784c-0.892,0.372-1.933,0.669-3.048,0.669c-0.892,0-1.784-0.149-2.602-0.52 c-0.818-0.372-1.636-0.967-2.379-1.859v1.859h-4.387V32.193H142.031z M146.492,46.914c0,1.115,0.074,2.007,0.297,2.602 c0.149,0.669,0.446,1.19,0.892,1.636c0.446,0.372,0.892,0.669,1.338,0.743c0.446,0.149,0.892,0.149,1.338,0.149 c0.52,0,0.967-0.074,1.413-0.297c0.446-0.223,0.818-0.52,1.19-0.892c0.297-0.446,0.595-0.967,0.818-1.636 c0.223-0.669,0.297-1.487,0.297-2.454c0-0.967-0.074-1.784-0.297-2.454c-0.149-0.669-0.446-1.19-0.743-1.636 s-0.669-0.743-1.115-0.892s-0.892-0.297-1.413-0.297c-0.595,0-1.041,0.074-1.487,0.223s-0.818,0.372-1.19,0.743 c-0.446,0.446-0.743,0.892-0.967,1.561c-0.223,0.595-0.297,1.413-0.297,2.379v0.52H146.492z"/> <path style="fill:#010101;" d="M162.328,32.193h4.61v4.089h-4.61V32.193z M162.402,38.364h4.535v16.803h-4.535V38.364z"/> <path style="fill:#010101;" d="M171.176,38.364h4.387v2.305c0.669-0.967,1.487-1.71,2.379-2.156 c0.892-0.446,1.859-0.669,2.825-0.669c1.933,0,3.346,0.52,4.238,1.487c0.892,0.967,1.413,2.602,1.413,4.684v11.152h-4.535V44.684 c0-1.19-0.223-2.007-0.669-2.454c-0.446-0.446-1.041-0.669-1.784-0.669c-0.595,0-1.115,0.074-1.487,0.223 c-0.446,0.149-0.818,0.446-1.19,0.743c-0.297,0.297-0.52,0.669-0.743,1.115c-0.223,0.446-0.297,0.892-0.297,1.338v10.112h-4.535 C171.176,55.093,171.176,38.364,171.176,38.364z"/> <path style="fill:#010101;" d="M200.544,53.085c-0.669,0.743-1.413,1.338-2.23,1.859c-0.818,0.446-1.933,0.743-3.197,0.743 c-0.743,0-1.487-0.074-2.156-0.297c-0.669-0.223-1.264-0.52-1.784-0.892c-0.52-0.372-0.892-0.892-1.19-1.561 c-0.297-0.669-0.446-1.413-0.446-2.305c0-1.19,0.223-2.082,0.743-2.825c0.52-0.743,1.19-1.264,2.007-1.71 c0.818-0.372,1.784-0.669,2.825-0.892c1.041-0.149,2.082-0.297,3.197-0.297l2.156-0.074v-0.818c0-1.041-0.297-1.71-0.818-2.156 c-0.595-0.372-1.264-0.595-2.007-0.595c-1.784,0-2.825,0.669-3.048,2.007l-4.089-0.372c0.297-1.784,1.041-3.048,2.305-3.792 c1.264-0.818,2.9-1.19,5.056-1.19c1.264,0,2.379,0.149,3.271,0.446c0.892,0.297,1.636,0.743,2.156,1.338 c0.52,0.595,0.967,1.264,1.19,2.082c0.223,0.818,0.372,1.784,0.372,2.751v10.632h-4.238v-2.082H200.544z M200.395,47.732 l-2.007,0.074c-0.967,0.074-1.71,0.149-2.305,0.297c-0.595,0.149-1.041,0.372-1.338,0.595c-0.297,0.223-0.52,0.52-0.595,0.818 c-0.074,0.297-0.149,0.669-0.149,0.967c0,0.595,0.223,0.967,0.595,1.338c0.372,0.297,0.892,0.52,1.636,0.52 c1.19,0,2.082-0.297,2.825-0.818c0.372-0.297,0.743-0.669,0.967-1.115s0.372-1.041,0.372-1.71V47.732z"/> <path style="fill:#010101;" d="M208.871,38.364h4.387v2.379c0.595-0.892,1.264-1.561,2.007-2.007 c0.818-0.446,1.636-0.669,2.528-0.669c0.446,0,0.818,0,1.041,0.074c0.297,0,0.52,0.074,0.743,0.149l-0.52,4.089 c-0.52-0.149-1.115-0.223-1.933-0.223c-0.52,0-0.967,0.074-1.413,0.149c-0.446,0.149-0.892,0.372-1.19,0.669 c-0.372,0.372-0.669,0.743-0.818,1.19c-0.149,0.446-0.297,0.892-0.297,1.338v9.74h-4.535L208.871,38.364L208.871,38.364z"/> </g> </g>';

/**
 * innerHTML property for SVGElement
 * Copyright(c) 2010, Jeff Schiller
 *
 * Licensed under the Apache License, Version 2
 *
 * Works in a SVG document in Chrome 6+, Safari 5+, Firefox 4+ and IE9+.
 * Works in a HTML5 document in Chrome 7+, Firefox 4+ and IE9+.
 * Does not work in Opera since it doesn't support the SVGElement interface yet.
 *
 * I haven't decided on the best name for this property - thus the duplication.
 */

(function() {
var serializeXML = function(node, output) {
  var nodeType = node.nodeType;
  if (nodeType == 3) { // TEXT nodes.
    // Replace special XML characters with their entities.
    output.push(node.textContent.replace(/&/, '&amp;').replace(/</, '&lt;').replace('>', '&gt;'));
  } else if (nodeType == 1) { // ELEMENT nodes.
    // Serialize Element nodes.
    output.push('<', node.tagName);
    if (node.hasAttributes()) {
      var attrMap = node.attributes;
      for (var i = 0, len = attrMap.length; i < len; ++i) {
        var attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '=\'', attrNode.value, '\'');
      }
    }
    if (node.hasChildNodes()) {
      output.push('>');
      var childNodes = node.childNodes;
      for (var i = 0, len = childNodes.length; i < len; ++i) {
        serializeXML(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
  } else if (nodeType == 8) {
    // TODO(codedread): Replace special characters with XML entities?
    output.push('<!--', node.nodeValue, '-->');
  } else {
    // TODO: Handle CDATA nodes.
    // TODO: Handle ENTITY nodes.
    // TODO: Handle DOCUMENT nodes.
    throw 'Error serializing XML. Unhandled node of type: ' + nodeType;
  }
}
// The innerHTML DOM property for SVGElement.
Object.defineProperty(SVGElement.prototype, 'innerHTML', {
  get: function() {
    var output = [];
    var childNode = this.firstChild;
    while (childNode) {
      serializeXML(childNode, output);
      childNode = childNode.nextSibling;
    }
    return output.join('');
  },
  set: function(markupText) {
    // Wipe out the current contents of the element.
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }

    try {
      // Parse the markup into valid nodes.
      var dXML = new DOMParser();
      dXML.async = false;
      // Wrap the markup into a SVG node to ensure parsing works.
      sXML = '<svg xmlns=\'http://www.w3.org/2000/svg\'>' + markupText + '</svg>';
      var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement;

      // Now take each node, import it and append to this element.
      var childNode = svgDocElement.firstChild;
      while(childNode) {
        this.appendChild(this.ownerDocument.importNode(childNode, true));
        childNode = childNode.nextSibling;
      }
    } catch(e) {
      throw new Error('Error parsing XML string');
    };
  }
});

// The innerSVG DOM property for SVGElement.
Object.defineProperty(SVGElement.prototype, 'innerSVG', {
  get: function() {
    return this.innerHTML;
  },
  set: function(markupText) {
    this.innerHTML = markupText;
  }
});

})();
