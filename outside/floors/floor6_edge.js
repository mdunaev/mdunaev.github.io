/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['0px','auto','4034px','2500px','auto','0px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/bg.svg','0px','0px']
         },
         {
            id:'ManWalk',
            display:'none',
            type:'rect',
            rect:['1479px','auto','auto','auto','auto','139px']
         },
         {
            id:'man_stand',
            display:'none',
            type:'image',
            rect:['1479px','auto','53px','90px','auto','139px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man_stand.svg','0px','0px']
         },
         {
            id:'ball-pink',
            type:'image',
            rect:['2152px','auto','250px','301px','auto','296px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/ball-pink.svg','0px','0px'],
            transform:[[],[],[],['0.18','0.18']]
         },
         {
            id:'ball-pink2',
            display:'none',
            type:'image',
            rect:['1580px','auto','250px','301px','auto','429px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/ball-pink2.svg','0px','0px']
         },
         {
            id:'ball-orange',
            type:'image',
            rect:['2275px','auto','81px','100px','auto','344px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/ball-orange.svg','0px','0px'],
            transform:[[],[],[],['0.69','0.69']]
         },
         {
            id:'ball-yellow',
            type:'image',
            rect:['2203px','auto','67px','84px','auto','303px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/ball-yellow.svg','0px','0px'],
            transform:[[],[],[],['0.71','0.71']]
         },
         {
            id:'basket',
            type:'image',
            rect:['2227px','auto','99px','212px','auto','138px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/basket.svg','0px','0px']
         },
         {
            id:'man-nasos',
            display:'none',
            type:'image',
            rect:['1479px','auto','63px','91px','auto','139px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/man-nasos.svg','0px','0px']
         },
         {
            id:'man-nasos2',
            display:'none',
            type:'image',
            rect:['1479px','auto','63px','91px','auto','139px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/man-nasos2.svg','0px','0px']
         },
         {
            id:'man_walk',
            type:'image',
            rect:['1480px','auto','55px','87px','auto','143px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man_walk.svg','0px','0px']
         },
         {
            id:'man-fly2',
            type:'image',
            rect:['1655px','auto','82px','89px','auto','285px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         },
         {
            id:'basket2',
            display:'none',
            type:'image',
            rect:['1554px','auto','99px','212px','auto','138px'],
            clip:['rect(161px 99px 212px 0px)'],
            fill:["rgba(0,0,0,0)",'svg_floor6/basket.svg','0px','0px']
         },
         {
            id:'basket22',
            display:'none',
            type:'image',
            rect:['1717px','auto','77px','264px','auto','215px'],
            fill:["rgba(0,0,0,0)",'svg_floor6/basket2.svg','0px','0px']
         },
         {
            id:'bg2',
            type:'image',
            rect:['0px','auto','4034px','2500px','auto','0px'],
            clip:['rect(0px 2022px 2500px 0px)'],
            fill:["rgba(0,0,0,0)",'svg_floor6/bg.svg','0px','0px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','1335px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         }],
         symbolInstances: [
         {
            id:'ManWalk',
            symbolName:'ManWalk'
         }
         ]
      },
   states: {
      "Base State": {
         "${_basket22}": [
            ["style", "display", 'none'],
            ["style", "left", '1717px'],
            ["style", "bottom", '215px']
         ],
         "${_ball-orange}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.69'],
            ["style", "bottom", '331px'],
            ["transform", "scaleX", '0.69'],
            ["style", "left", '2275px']
         ],
         "${_ball-pink}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.18'],
            ["style", "bottom", '178px'],
            ["style", "display", 'block'],
            ["style", "left", '2152px'],
            ["transform", "scaleX", '0.18']
         ],
         "${_ManWalk}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "left", '1479px'],
            ["style", "bottom", '139px']
         ],
         "${_man-fly2}": [
            ["style", "display", 'block'],
            ["style", "left", '1655px'],
            ["style", "bottom", '285px']
         ],
         "${_man-nasos}": [
            ["style", "display", 'none'],
            ["style", "left", '1479px'],
            ["style", "bottom", '139px']
         ],
         "${_bg2}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "clip", [0,2022,2500,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '0px']
         ],
         "${_man_walk}": [
            ["style", "display", 'block'],
            ["style", "left", '1480px'],
            ["style", "bottom", '143px']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1459px'],
            ["style", "bottom", '1335px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man-nasos2}": [
            ["style", "display", 'none'],
            ["style", "left", '1479px'],
            ["style", "bottom", '139px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ],
         "${_basket2}": [
            ["style", "display", 'none'],
            ["style", "left", '1554px'],
            ["style", "clip", [161,99,212,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '138px']
         ],
         "${_basket}": [
            ["style", "display", 'block'],
            ["style", "left", '2227px'],
            ["style", "bottom", '138px']
         ],
         "${_ball-pink2}": [
            ["style", "display", 'none'],
            ["style", "left", '1580px'],
            ["style", "bottom", '429px']
         ],
         "${_man_stand}": [
            ["style", "display", 'none'],
            ["style", "left", '1479px'],
            ["style", "bottom", '139px']
         ],
         "${_ball-yellow}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.71'],
            ["style", "bottom", '292px'],
            ["transform", "scaleX", '0.71'],
            ["style", "left", '2203px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1540,
            "part1": 4037,
            "part2": 5526,
            "part3": 7034,
            "part4": 8500,
            "end": 12500
         },
         timeline: [
            { id: "eid134", tween: [ "style", "${_ball-yellow}", "bottom", '303px', { fromValue: '292px'}], position: 4079, duration: 1421 },
            { id: "eid105", tween: [ "style", "${_ball-yellow}", "bottom", '433px', { fromValue: '303px'}], position: 9500, duration: 1500 },
            { id: "eid118", tween: [ "style", "${_ball-yellow}", "bottom", '359px', { fromValue: '433px'}], position: 11191, duration: 0 },
            { id: "eid101", tween: [ "style", "${_basket2}", "bottom", '268px', { fromValue: '138px'}], position: 9500, duration: 1500 },
            { id: "eid110", tween: [ "style", "${_ball-pink2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_ball-pink2}", "display", 'block', { fromValue: 'none'}], position: 11060, duration: 0 },
            { id: "eid113", tween: [ "style", "${_ball-pink2}", "display", 'none', { fromValue: 'block'}], position: 11191, duration: 0 },
            { id: "eid114", tween: [ "style", "${_basket}", "display", 'none', { fromValue: 'block'}], position: 11191, duration: 0 },
            { id: "eid55", tween: [ "transform", "${_ball-pink}", "scaleY", '0.23', { fromValue: '0.18'}], position: 4079, duration: 1421 },
            { id: "eid72", tween: [ "transform", "${_ball-pink}", "scaleY", '0.6', { fromValue: '0.23'}], position: 5553, duration: 1447 },
            { id: "eid84", tween: [ "transform", "${_ball-pink}", "scaleY", '0.99', { fromValue: '0.6'}], position: 7094, duration: 1406 },
            { id: "eid87", tween: [ "style", "${_man_walk}", "left", '1526px', { fromValue: '1480px'}], position: 8560, duration: 440 },
            { id: "eid89", tween: [ "style", "${_man_walk}", "left", '1576px', { fromValue: '1526px'}], position: 9000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_man_walk}", "left", '1676px', { fromValue: '1576px'}], position: 9500, duration: 1500 },
            { id: "eid126", tween: [ "style", "${_basket22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_basket22}", "display", 'block', { fromValue: 'none'}], position: 11191, duration: 0 },
            { id: "eid109", tween: [ "style", "${_ball-pink}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_ball-pink}", "display", 'none', { fromValue: 'block'}], position: 11060, duration: 0 },
            { id: "eid9", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid8", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 1587, duration: 0, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid140", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'none'}], position: 12500, duration: 0 },
            { id: "eid128", tween: [ "style", "${_man-fly2}", "left", '1651px', { fromValue: '1655px'}], position: 11191, duration: 1309 },
            { id: "eid94", tween: [ "style", "${_basket2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid93", tween: [ "style", "${_basket2}", "display", 'block', { fromValue: 'none'}], position: 8560, duration: 0, easing: "easeInCubic" },
            { id: "eid117", tween: [ "style", "${_basket2}", "display", 'none', { fromValue: 'block'}], position: 11191, duration: 0 },
            { id: "eid6", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid7", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 1587, duration: 0, easing: "easeOutQuad" },
            { id: "eid138", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'none'}], position: 12500, duration: 0 },
            { id: "eid125", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_man-fly2}", "display", 'block', { fromValue: 'none'}], position: 11191, duration: 0 },
            { id: "eid136", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
            { id: "eid130", tween: [ "style", "${_ball-pink}", "bottom", '182px', { fromValue: '178px'}], position: 4079, duration: 1421 },
            { id: "eid131", tween: [ "style", "${_ball-pink}", "bottom", '238px', { fromValue: '182px'}], position: 5500, duration: 1500 },
            { id: "eid132", tween: [ "style", "${_ball-pink}", "bottom", '296px', { fromValue: '238px'}], position: 7000, duration: 1500 },
            { id: "eid99", tween: [ "style", "${_ball-pink}", "bottom", '430px', { fromValue: '296px'}], position: 9500, duration: 1500 },
            { id: "eid4", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid139", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'none'}], position: 12500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 4079, duration: 0 },
            { id: "eid44", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 4579, duration: 0 },
            { id: "eid48", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid50", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid58", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 5553, duration: 0 },
            { id: "eid61", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid62", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
            { id: "eid65", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'none'}], position: 7057, duration: 0 },
            { id: "eid73", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 7094, duration: 0 },
            { id: "eid75", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_man-nasos2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid79", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
            { id: "eid81", tween: [ "style", "${_man-nasos2}", "display", 'none', { fromValue: 'none'}], position: 8560, duration: 0 },
            { id: "eid52", tween: [ "transform", "${_ball-orange}", "scaleX", '1', { fromValue: '0.69'}], position: 4079, duration: 1421 },
            { id: "eid53", tween: [ "transform", "${_ball-orange}", "scaleY", '1', { fromValue: '0.69'}], position: 4079, duration: 1421 },
            { id: "eid1", tween: [ "style", "${_man-fly}", "bottom", '140px', { fromValue: '1335px'}], position: 0, duration: 1500, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_ball-yellow}", "left", '1530px', { fromValue: '2203px'}], position: 1587, duration: 2413 },
            { id: "eid104", tween: [ "style", "${_ball-yellow}", "left", '1631px', { fromValue: '1530px'}], position: 9500, duration: 1500 },
            { id: "eid122", tween: [ "style", "${_ball-yellow}", "left", '1692px', { fromValue: '1631px'}], position: 11191, duration: 0 },
            { id: "eid142", tween: [ "style", "${_bg2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_bg2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_ball-orange}", "left", '1602px', { fromValue: '2275px'}], position: 1587, duration: 2413 },
            { id: "eid102", tween: [ "style", "${_ball-orange}", "left", '1703px', { fromValue: '1602px'}], position: 9500, duration: 1500 },
            { id: "eid31", tween: [ "style", "${_ball-pink}", "left", '1479px', { fromValue: '2152px'}], position: 1587, duration: 2413 },
            { id: "eid98", tween: [ "style", "${_ball-pink}", "left", '1580px', { fromValue: '1479px'}], position: 9500, duration: 1500 },
            { id: "eid57", tween: [ "transform", "${_ball-yellow}", "scaleY", '1', { fromValue: '0.71'}], position: 4079, duration: 1421 },
            { id: "eid88", tween: [ "style", "${_man_walk}", "bottom", '201px', { fromValue: '143px'}], position: 8560, duration: 440, easing: "easeOutCirc" },
            { id: "eid90", tween: [ "style", "${_man_walk}", "bottom", '157px', { fromValue: '201px'}], position: 9000, duration: 500, easing: "easeInCirc" },
            { id: "eid107", tween: [ "style", "${_man_walk}", "bottom", '287px', { fromValue: '157px'}], position: 9500, duration: 1500 },
            { id: "eid54", tween: [ "transform", "${_ball-pink}", "scaleX", '0.23', { fromValue: '0.18'}], position: 4079, duration: 1421 },
            { id: "eid71", tween: [ "transform", "${_ball-pink}", "scaleX", '0.6', { fromValue: '0.23'}], position: 5553, duration: 1447 },
            { id: "eid83", tween: [ "transform", "${_ball-pink}", "scaleX", '0.99', { fromValue: '0.6'}], position: 7094, duration: 1406 },
            { id: "eid40", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid46", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 4079, duration: 0 },
            { id: "eid45", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 4579, duration: 0 },
            { id: "eid49", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid51", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 5553, duration: 0 },
            { id: "eid60", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'block'}], position: 7057, duration: 0 },
            { id: "eid74", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 7094, duration: 0 },
            { id: "eid76", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid80", tween: [ "style", "${_man-nasos}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_man-nasos}", "display", 'none', { fromValue: 'block'}], position: 8560, duration: 0 },
            { id: "eid100", tween: [ "style", "${_basket2}", "left", '1654px', { fromValue: '1554px'}], position: 9500, duration: 1500 },
            { id: "eid56", tween: [ "transform", "${_ball-yellow}", "scaleX", '1', { fromValue: '0.71'}], position: 4079, duration: 1421 },
            { id: "eid29", tween: [ "style", "${_bg}", "left", '-673px', { fromValue: '0px'}], position: 1587, duration: 2413 },
            { id: "eid95", tween: [ "style", "${_bg}", "left", '-763px', { fromValue: '-673px'}], position: 9500, duration: 1500, easing: "easeInCirc" },
            { id: "eid129", tween: [ "style", "${_man-fly2}", "bottom", '-114px', { fromValue: '285px'}], position: 11191, duration: 1309 },
            { id: "eid97", tween: [ "style", "${_basket}", "bottom", '268px', { fromValue: '138px'}], position: 9500, duration: 1500 },
            { id: "eid135", tween: [ "style", "${_ball-orange}", "bottom", '345px', { fromValue: '331px'}], position: 4079, duration: 1421 },
            { id: "eid103", tween: [ "style", "${_ball-orange}", "bottom", '474px', { fromValue: '345px'}], position: 9500, duration: 1500 },
            { id: "eid37", tween: [ "style", "${_basket}", "left", '1554px', { fromValue: '2227px'}], position: 1587, duration: 2413 },
            { id: "eid96", tween: [ "style", "${_basket}", "left", '1655px', { fromValue: '1554px'}], position: 9500, duration: 1500 },
            { id: "eid86", tween: [ "style", "${_man_walk}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_man_walk}", "display", 'block', { fromValue: 'none'}], position: 8560, duration: 0 },
            { id: "eid123", tween: [ "style", "${_man_walk}", "display", 'none', { fromValue: 'block'}], position: 11191, duration: 0 },
            { id: "eid137", tween: [ "style", "${_man_walk}", "display", 'none', { fromValue: 'none'}], position: 12500, duration: 0 }         ]
      }
   }
},
"ManWalk": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','auto','53px','90px','auto','0px'],
      id: 'man_walk',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/man_stand2.svg','0px','0px']
   },
   {
      id: 'man_walk2',
      type: 'image',
      rect: ['0px','auto','55px','87px','auto','3px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/man_walk.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man_walk}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '53px']
         ],
         "${_man_walk2}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid16", tween: [ "style", "${_man_walk2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_man_walk2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man_walk2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid11", tween: [ "style", "${_man_walk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_man_walk}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid15", tween: [ "style", "${_man_walk}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15060970");
