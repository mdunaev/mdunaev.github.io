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
            id:'Group',
            type:'group',
            rect:['0px','auto','3000','2737','auto','0px'],
            c:[
            {
               id:'BG',
               type:'group',
               rect:['0px','auto','3000','997px','auto','0px'],
               transform:[],
               c:[
               {
                  id:'bg2',
                  type:'rect',
                  rect:['0px','auto','3000px','23px','auto','96px'],
                  fill:["rgba(204,153,51,1.00)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               },
               {
                  id:'bg1',
                  type:'rect',
                  rect:['0px','auto','3000px','100px','auto','0px'],
                  fill:["rgba(153,102,51,1.00)"],
                  stroke:[0,"rgba(0,0,0,1)","none"]
               }]
            },
            {
               id:'furniture',
               type:'image',
               rect:['675px','auto','1650px','2619px','auto','118px'],
               fill:["rgba(0,0,0,0)",'svg_floor5/furniture.svg','0px','0px']
            }]
         },
         {
            id:'man3-1',
            type:'image',
            rect:['1750px','auto','60px','85px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/man3-1.svg','0px','0px']
         },
         {
            id:'Right_man',
            display:'none',
            type:'rect',
            rect:['1854','auto','auto','auto','auto','119px']
         },
         {
            id:'man3-13',
            display:'none',
            type:'image',
            rect:['2009','auto','60px','85px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/man3-1.svg','0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'doom',
            display:'none',
            type:'rect',
            rect:['1637','auto','auto','auto','auto','-1px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','860px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/man-fly.svg','0px','0px']
         },
         {
            id:'hero_print',
            display:'none',
            type:'rect',
            rect:['1487','auto','auto','auto','auto','119px']
         },
         {
            id:'hero12',
            display:'none',
            type:'image',
            rect:['1487px','auto','58px','90px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/hero1.svg','0px','0px']
         },
         {
            id:'Hero_shiva',
            display:'none',
            type:'rect',
            rect:['1471px','auto','auto','auto','auto','119px']
         },
         {
            id:'Hero_with_Phone',
            display:'none',
            type:'rect',
            rect:['1477','auto','auto','auto','auto','119px']
         },
         {
            id:'table',
            type:'image',
            rect:['1399px','auto','201px','48px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/table.svg','0px','0px']
         },
         {
            id:'table_clean',
            display:'none',
            type:'image',
            rect:['1399px','auto','201px','48px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/table_clean.svg','0px','0px']
         },
         {
            id:'Woman_Stand',
            type:'rect',
            rect:['1222','auto','auto','auto','auto','119px']
         },
         {
            id:'woman_go',
            display:'none',
            type:'rect',
            rect:['1219px','auto','auto','auto','auto','119px']
         },
         {
            id:'Man_Left',
            type:'rect',
            rect:['1288','auto','auto','auto','auto','118px']
         },
         {
            id:'chart12',
            type:'image',
            rect:['1401px','auto','93px','67px','auto','227px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/chart1.svg','0px','0px']
         },
         {
            id:'chart2',
            display:'none',
            type:'image',
            rect:['1487px','auto','169px','169px','auto','102px'],
            clip:['rect(0px 169px 11px 0px)'],
            fill:["rgba(0,0,0,0)",'svg_floor5/chart2.svg','0px','0px']
         },
         {
            id:'phone-tube',
            type:'image',
            rect:['1453px','auto','10px','28px','auto','150px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/phone-tube.svg','0px','0px'],
            transform:[[],['90']]
         }],
         symbolInstances: [
         {
            id:'woman_go',
            symbolName:'woman_go'
         },
         {
            id:'Man_Left',
            symbolName:'Man_Left'
         },
         {
            id:'Woman_Stand',
            symbolName:'Woman_Stand'
         },
         {
            id:'doom',
            symbolName:'doom'
         },
         {
            id:'hero_print',
            symbolName:'hero_print'
         },
         {
            id:'Right_man',
            symbolName:'Right_man'
         },
         {
            id:'Hero_with_Phone',
            symbolName:'Hero_with_Phone'
         },
         {
            id:'Hero_shiva',
            symbolName:'Hero_shiva'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Man_Left}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '118px']
         ],
         "${_table}": [
            ["style", "display", 'block'],
            ["style", "left", '1399px'],
            ["style", "bottom", '119px']
         ],
         "${_chart2}": [
            ["style", "display", 'none'],
            ["style", "bottom", '101px'],
            ["style", "height", '169px'],
            ["style", "left", '1486px'],
            ["style", "clip", [0,169,11,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '169px']
         ],
         "${_chart12}": [
            ["style", "left", '1401px'],
            ["style", "bottom", '227px']
         ],
         "${_BG}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_table_clean}": [
            ["style", "display", 'none'],
            ["style", "left", '1399px'],
            ["style", "bottom", '119px']
         ],
         "${_doom}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '-1px']
         ],
         "${_hero_print}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '119px']
         ],
         "${_bg2}": [
            ["color", "background-color", 'rgba(204,153,51,1)'],
            ["style", "bottom", '96px'],
            ["style", "height", '23px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_bg1}": [
            ["color", "background-color", 'rgba(153,102,51,1)'],
            ["style", "bottom", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_hero12}": [
            ["style", "display", 'none'],
            ["style", "left", '1487px'],
            ["style", "bottom", '119px']
         ],
         "${_man3-13}": [
            ["style", "display", 'none'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '2009px'],
            ["style", "bottom", '119px']
         ],
         "${_phone-tube}": [
            ["style", "display", 'block'],
            ["style", "bottom", '150px'],
            ["style", "left", '1453px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_Right_man}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '119px'],
            ["style", "display", 'none'],
            ["style", "left", '1759px'],
            ["transform", "scaleX", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(133,204,204,1.00)'],
            ["style", "width", '3000px'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_Group}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_furniture}": [
            ["style", "left", '675px'],
            ["style", "bottom", '118px']
         ],
         "${_Hero_with_Phone}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '119px']
         ],
         "${_man3-1}": [
            ["style", "display", 'block'],
            ["style", "left", '1750px'],
            ["style", "bottom", '119px']
         ],
         "${_woman_go}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "left", '1219px'],
            ["style", "bottom", '119px']
         ],
         "${_Hero_shiva}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '119px']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1459px'],
            ["style", "bottom", '860px']
         ],
         "${_Woman_Stand}": [
            ["style", "display", 'block'],
            ["style", "top", 'auto'],
            ["style", "left", '1222px'],
            ["style", "bottom", '119px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6620,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1000,
            "part1": 1809,
            "part2": 3054,
            "part3": 4375,
            "end": 6620
         },
         timeline: [
            { id: "eid204", tween: [ "style", "${_Group}", "bottom", '0px', { fromValue: '0px'}], position: 5051, duration: 0, easing: "easeInElastic" },
            { id: "eid195", tween: [ "style", "${_Group}", "bottom", '0px', { fromValue: '0px'}], position: 5107, duration: 0, easing: "easeInElastic" },
            { id: "eid198", tween: [ "style", "${_Group}", "bottom", '-2px', { fromValue: '0px'}], position: 5185, duration: 0, easing: "easeInElastic" },
            { id: "eid200", tween: [ "style", "${_Group}", "bottom", '0px', { fromValue: '-3px'}], position: 5250, duration: 0, easing: "easeInElastic" },
            { id: "eid202", tween: [ "style", "${_Group}", "bottom", '0px', { fromValue: '0px'}], position: 5333, duration: 0, easing: "easeInElastic" },
            { id: "eid206", tween: [ "style", "${_Group}", "bottom", '-5px', { fromValue: '2px'}], position: 5394, duration: 0, easing: "easeInElastic" },
            { id: "eid208", tween: [ "style", "${_Group}", "bottom", '-1px', { fromValue: '0px'}], position: 5444, duration: 0, easing: "easeInElastic" },
            { id: "eid209", tween: [ "style", "${_Group}", "bottom", '0px', { fromValue: '-1px'}], position: 5500, duration: 0, easing: "easeInElastic" },
            { id: "eid151", tween: [ "style", "${_woman_go}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_woman_go}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0 },
            { id: "eid159", tween: [ "style", "${_woman_go}", "display", 'none', { fromValue: 'block'}], position: 4296, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Woman_Stand}", "left", '1222px', { fromValue: '1222px'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_Woman_Stand}", "left", '963px', { fromValue: '961px'}], position: 4296, duration: 1704, easing: "easeInElastic" },
            { id: "eid12", tween: [ "style", "${_hero_print}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_hero_print}", "display", 'block', { fromValue: 'none'}], position: 1034, duration: 0 },
            { id: "eid59", tween: [ "style", "${_hero_print}", "display", 'none', { fromValue: 'block'}], position: 1898, duration: 0 },
            { id: "eid85", tween: [ "style", "${_chart2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid84", tween: [ "style", "${_chart2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
            { id: "eid5", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid193", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInElastic" },
            { id: "eid61", tween: [ "style", "${_Hero_with_Phone}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Hero_with_Phone}", "display", 'block', { fromValue: 'none'}], position: 1898, duration: 0 },
            { id: "eid91", tween: [ "style", "${_Hero_with_Phone}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0, easing: "easeOutBack" },
            { id: "eid144", tween: [ "style", "${_man3-13}", "left", '2009px', { fromValue: '2009px'}], position: 3037, duration: 0 },
            { id: "eid145", tween: [ "style", "${_man3-13}", "left", '2009px', { fromValue: '2009px'}], position: 3091, duration: 0 },
            { id: "eid142", tween: [ "style", "${_man3-13}", "left", '1756px', { fromValue: '1756px'}], position: 4296, duration: 0 },
            { id: "eid158", tween: [ "style", "${_woman_go}", "left", '961px', { fromValue: '1219px'}], position: 3091, duration: 1205 },
            { id: "eid1", tween: [ "style", "${_man-fly}", "bottom", '120px', { fromValue: '860px'}], position: 0, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_man-fly}", "bottom", '-110px', { fromValue: '120px'}], position: 6000, duration: 620, easing: "easeInQuint" },
            { id: "eid52", tween: [ "style", "${_phone-tube}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_phone-tube}", "display", 'none', { fromValue: 'block'}], position: 1898, duration: 0 },
            { id: "eid111", tween: [ "style", "${_table}", "display", 'block', { fromValue: 'block'}], position: 11, duration: 0 },
            { id: "eid110", tween: [ "style", "${_table}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0 },
            { id: "eid86", tween: [ "style", "${_hero12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid87", tween: [ "style", "${_hero12}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
            { id: "eid88", tween: [ "style", "${_hero12}", "display", 'none', { fromValue: 'block'}], position: 1034, duration: 0, easing: "easeOutBack" },
            { id: "eid44", tween: [ "style", "${_chart2}", "clip", [0,169,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,11,0]}], position: 1000, duration: 707, easing: "easeOutBack" },
            { id: "eid83", tween: [ "style", "${_chart2}", "clip", [0,169,47,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,34,0]}], position: 1898, duration: 876, easing: "easeOutBack" },
            { id: "eid133", tween: [ "style", "${_chart2}", "clip", [0,169,80,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,47,0]}], position: 3091, duration: 373, easing: "easeOutBack" },
            { id: "eid164", tween: [ "style", "${_chart2}", "clip", [0,169,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,80,0]}], position: 4375, duration: 732, easing: "easeInQuint" },
            { id: "eid71", tween: [ "style", "${_man3-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_man3-1}", "display", 'none', { fromValue: 'block'}], position: 1898, duration: 0 },
            { id: "eid78", tween: [ "style", "${_man3-13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_man3-13}", "display", 'block', { fromValue: 'none'}], position: 3037, duration: 0 },
            { id: "eid134", tween: [ "style", "${_man3-13}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0 },
            { id: "eid140", tween: [ "style", "${_man3-13}", "display", 'block', { fromValue: 'none'}], position: 4296, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Hero_shiva}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid89", tween: [ "style", "${_Hero_shiva}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0, easing: "easeOutBack" },
            { id: "eid191", tween: [ "style", "${_Hero_shiva}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInElastic" },
            { id: "eid203", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 5051, duration: 0, easing: "easeInElastic" },
            { id: "eid196", tween: [ "style", "${_Group}", "left", '-5px', { fromValue: '0px'}], position: 5107, duration: 0, easing: "easeInElastic" },
            { id: "eid197", tween: [ "style", "${_Group}", "left", '-4px', { fromValue: '-1px'}], position: 5185, duration: 0, easing: "easeInElastic" },
            { id: "eid199", tween: [ "style", "${_Group}", "left", '17px', { fromValue: '0px'}], position: 5250, duration: 0, easing: "easeInElastic" },
            { id: "eid201", tween: [ "style", "${_Group}", "left", '-14px', { fromValue: '3px'}], position: 5333, duration: 0, easing: "easeInElastic" },
            { id: "eid205", tween: [ "style", "${_Group}", "left", '19px', { fromValue: '0px'}], position: 5394, duration: 0, easing: "easeInElastic" },
            { id: "eid207", tween: [ "style", "${_Group}", "left", '-4px', { fromValue: '19px'}], position: 5444, duration: 0, easing: "easeInElastic" },
            { id: "eid210", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 5500, duration: 0, easing: "easeInElastic" },
            { id: "eid149", tween: [ "style", "${_Woman_Stand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Woman_Stand}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Woman_Stand}", "display", 'block', { fromValue: 'none'}], position: 4296, duration: 0 },
            { id: "eid146", tween: [ "transform", "${_man3-13}", "scaleX", '-1', { fromValue: '-1'}], position: 3037, duration: 0 },
            { id: "eid147", tween: [ "transform", "${_man3-13}", "scaleX", '-1', { fromValue: '-1'}], position: 3091, duration: 0 },
            { id: "eid141", tween: [ "transform", "${_man3-13}", "scaleX", '1', { fromValue: '1'}], position: 4296, duration: 0 },
            { id: "eid113", tween: [ "style", "${_table_clean}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_table_clean}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0 },
            { id: "eid143", tween: [ "transform", "${_Right_man}", "scaleX", '1', { fromValue: '1'}], position: 1898, duration: 0 },
            { id: "eid137", tween: [ "transform", "${_Right_man}", "scaleX", '-1', { fromValue: '1'}], position: 3091, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Right_man}", "display", 'block', { fromValue: 'none'}], position: 1898, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'block'}], position: 3037, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Right_man}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'block'}], position: 4296, duration: 0 },
            { id: "eid175", tween: [ "style", "${_doom}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInExpo" },
            { id: "eid174", tween: [ "style", "${_doom}", "display", 'block', { fromValue: 'none'}], position: 5107, duration: 0, easing: "easeInExpo" },
            { id: "eid76", tween: [ "style", "${_Right_man}", "left", '2009px', { fromValue: '1759px'}], position: 1898, duration: 1139 },
            { id: "eid138", tween: [ "style", "${_Right_man}", "left", '1756px', { fromValue: '2009px'}], position: 3091, duration: 1205 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_doom}', [0] ], ""], position: 5107 }         ]
      }
   }
},
"hero_print": {
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
      id: 'hero1',
      type: 'image',
      rect: ['0px','auto','58px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/hero1.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','58px','90px','auto','0px'],
      id: 'hero1-1',
      fill: ['rgba(0,0,0,0)','svg_floor5/hero1-1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hero1-1}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_hero1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '58px']
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
            { id: "eid3", tween: [ "style", "${_hero1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_hero1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid10", tween: [ "style", "${_hero1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid6", tween: [ "style", "${_hero1-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_hero1-1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid9", tween: [ "style", "${_hero1-1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Woman_Stand": {
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
      id: 'man1-1',
      type: 'image',
      rect: ['0px','auto','61px','84px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/man1-1.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['9px','auto','52px','84px','auto','0px'],
      id: 'man1-2',
      fill: ['rgba(0,0,0,0)','svg_floor5/man1-2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man1-1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man1-2}": [
            ["style", "display", 'none'],
            ["style", "left", '9px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid13", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_man1-2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_man1-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_man1-1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man1-1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }         ]
      }
   }
},
"Man_Left": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','auto','58px','85px','auto','0px'],
      id: 'man2-2',
      fill: ['rgba(0,0,0,0)','svg_floor5/man2-2.svg','0px','0px']
   },
   {
      id: 'man2-3',
      type: 'image',
      rect: ['10px','auto','48px','85px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/man2-3.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','58px','85px','auto','0px'],
      id: 'man2-1',
      fill: ['rgba(0,0,0,0)','svg_floor5/man2-1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man2-1}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man2-3}": [
            ["style", "display", 'block'],
            ["style", "left", '10px'],
            ["style", "bottom", '0px']
         ],
         "${_man2-2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '58px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         labels: {
            "three": 2000
         },
         timeline: [
            { id: "eid31", tween: [ "style", "${_man2-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_man2-1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_man2-1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid20", tween: [ "style", "${_man2-3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_man2-3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_man2-3}", "display", 'block', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_man2-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_man2-2}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid33", tween: [ "style", "${_man2-2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_man2-2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }         ]
      }
   }
},
"Hero_with_Phone": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','auto','68px','90px','auto','0px'],
      id: 'hero2',
      fill: ['rgba(0,0,0,0)','svg_floor5/hero2.svg','0px','0px']
   },
   {
      id: 'hero2-0',
      type: 'image',
      rect: ['0px','auto','68px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/hero2-0.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hero2-0}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_hero2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '68px']
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
            { id: "eid55", tween: [ "style", "${_hero2-0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_hero2-0}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid57", tween: [ "style", "${_hero2-0}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "style", "${_hero2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_hero2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid58", tween: [ "style", "${_hero2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Right_man": {
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
      rect: ['0px','auto','60px','85px','auto','0px'],
      id: 'man3-12',
      transform: [[0,0],[],[],['-1']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/man3-1.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['-1']],
      rect: ['0px','auto','60px','87px','auto','-2px'],
      display: 'none',
      id: 'man3-22',
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/man3-2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '60px']
         ],
         "${_man3-12}": [
            ["style", "display", 'block'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man3-22}": [
            ["style", "display", 'none'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '-2px']
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
            { id: "eid65", tween: [ "style", "${_man3-12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_man3-12}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_man3-12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_man3-22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_man3-22}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_man3-22}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Hero_shiva": {
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
      id: 'Man-4hands',
      type: 'rect',
      rect: ['0','auto','auto','auto','auto','0px']
   },
   {
      id: 'list1',
      type: 'rect',
      rect: ['84','29','auto','auto','auto','auto']
   },
   {
      id: 'phone4',
      type: 'rect',
      rect: ['-99','31','auto','auto','auto','auto']
   },
   {
      id: 'list22',
      type: 'rect',
      rect: ['-75','29','auto','auto','auto','auto']
   },
   {
      id: 'list32',
      type: 'rect',
      rect: ['24','-120','auto','auto','auto','auto']
   },
   {
      id: 'comp_fly',
      type: 'rect',
      rect: ['109','33','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'list22',
      symbolName: 'list2'
   },
   {
      id: 'Man-4hands',
      symbolName: 'Man-4hands'
   },
   {
      id: 'list1',
      symbolName: 'list1'
   },
   {
      id: 'comp_fly',
      symbolName: 'comp_fly'
   },
   {
      id: 'phone4',
      symbolName: 'phone4'
   },
   {
      id: 'list32',
      symbolName: 'list3'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '74px']
         ],
         "${_Man-4hands}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Man-4hands": {
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
      id: 'hero3-1',
      type: 'image',
      rect: ['0px','auto','74px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/hero3-1.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['7px','auto','62px','90px','auto','0px'],
      id: 'hero3-2',
      fill: ['rgba(0,0,0,0)','svg_floor5/hero3-2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '74px']
         ],
         "${_hero3-1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_hero3-2}": [
            ["style", "display", 'none'],
            ["style", "left", '7px'],
            ["style", "bottom", '0px']
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
            { id: "eid92", tween: [ "style", "${_hero3-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid94", tween: [ "style", "${_hero3-2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_hero3-2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_hero3-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_hero3-1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0, easing: "easeOutBack" },
            { id: "eid97", tween: [ "style", "${_hero3-1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"list1": {
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
      rect: ['9px','auto','25px','31px','auto','0px'],
      id: 'list',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/list.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_list}": [
            ["style", "-webkit-transform-origin", [-208,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-208,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-208,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-208,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-208,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '0px'],
            ["style", "left", '9px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid100", tween: [ "transform", "${_list}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1500 }         ]
      }
   }
},
"list2": {
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
      rect: ['0px','auto','25px','31px','auto','0px'],
      id: 'list2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/list.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_list2}": [
            ["style", "-webkit-transform-origin", [464,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [464,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [464,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [464,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [464,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid103", tween: [ "transform", "${_list2}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }         ]
      }
   }
},
"list3": {
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
      rect: ['0px','auto','25px','31px','auto','0px'],
      id: 'list3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/list.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_list3}": [
            ["style", "-webkit-transform-origin", [50,525], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,525],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,525],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,525],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,525],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid106", tween: [ "transform", "${_list3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1250 }         ]
      }
   }
},
"phone4": {
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
      type: 'group',
      id: 'Group',
      rect: ['-9px','3px','28','25','auto','auto'],
      transform: [[0,0],[],[],[],['529%']],
      c: [
      {
         rect: ['9px','auto','10px','28px','auto','6px'],
         id: 'phone-tube2',
         transform: [[0,0],['90']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','svg_floor5/phone-tube.svg','0px','0px']
      },
      {
         rect: ['1px','auto','27px','19px','auto','0px'],
         id: 'phone_body',
         transform: [[0,0],[],[],[],['-368%']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','svg_floor5/phone_body.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "-webkit-transform-origin", [529,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [529,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [529,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [529,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [529,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '3px'],
            ["style", "left", '-9px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_phone-tube2}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '6px'],
            ["style", "left", '9px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_phone_body}": [
            ["style", "-webkit-transform-origin", [477,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [477,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [477,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [477,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [477,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '0px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '28px'],
            ["style", "width", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1677.2602053403,
         autoPlay: true,
         timeline: [
            { id: "eid129", tween: [ "transform", "${_Group}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1677 }         ]
      }
   }
},
"comp_fly": {
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
      rect: ['0px','auto','52px','23px','auto','0px'],
      id: 'comp',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/comp.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_comp}": [
            ["style", "-webkit-transform-origin", [-133,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-133,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-133,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-133,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-133,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid130", tween: [ "transform", "${_comp}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1500 }         ]
      }
   }
},
"woman_go": {
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
      transform: [[0,0],[],[],['-1']],
      rect: ['0px','auto','61px','84px','auto','0px'],
      display: 'none',
      id: 'man1-0',
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/man1-0.svg','0px','0px']
   },
   {
      rect: ['0px','auto','61px','84px','auto','0px'],
      id: 'man1-12',
      transform: [[0,0],[],[],['-1']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','svg_floor5/man1-1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man1-0}": [
            ["style", "display", 'none'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man1-12}": [
            ["style", "display", 'block'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '61px']
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
            { id: "eid152", tween: [ "style", "${_man1-12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_man1-12}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid154", tween: [ "style", "${_man1-12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid153", tween: [ "style", "${_man1-0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_man1-0}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid155", tween: [ "style", "${_man1-0}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"doom": {
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
      rect: ['0px','auto','24px','120px','auto','0px'],
      id: 'dooms',
      type: 'image',
      clip: ['rect(0px 24pxpx 120pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','svg_floor5/dooms.svg','0px','0px']
   },
   {
      rect: ['0px','auto','24px','120px','auto','0px'],
      id: 'doomsCopy',
      type: 'image',
      clip: ['rect(0px 24pxpx 120pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','svg_floor5/dooms.svg','0px','0px']
   },
   {
      rect: ['8px','auto','5px','10px','auto','110px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_doomsCopy}": [
            ["style", "clip", [0,24,5,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '10px'],
            ["style", "bottom", '110px'],
            ["style", "left", '8px'],
            ["style", "width", '5px']
         ],
         "${_dooms}": [
            ["style", "clip", [0,24,11,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid188", tween: [ "style", "${_Rectangle2}", "bottom", '0px', { fromValue: '110px'}], position: 0, duration: 250, easing: "easeInCirc" },
            { id: "eid182", tween: [ "style", "${_dooms}", "clip", [0,24,120,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,11,0]}], position: 0, duration: 250, easing: "easeInCirc" },
            { id: "eid187", tween: [ "style", "${_Rectangle2}", "height", '120px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInCirc" },
            { id: "eid172", tween: [ "style", "${_dooms}", "left", '40px', { fromValue: '0px'}], position: 250, duration: 750, easing: "easeInElastic" },
            { id: "eid189", tween: [ "style", "${_Rectangle2}", "left", '-215px', { fromValue: '8px'}], position: 250, duration: 750, easing: "easeInElastic" },
            { id: "eid190", tween: [ "style", "${_Rectangle2}", "width", '266px', { fromValue: '5px'}], position: 250, duration: 750, easing: "easeInElastic" },
            { id: "eid170", tween: [ "style", "${_doomsCopy}", "left", '-230px', { fromValue: '0px'}], position: 250, duration: 750, easing: "easeInElastic" },
            { id: "eid178", tween: [ "style", "${_doomsCopy}", "clip", [0,24,120,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,5,0]}], position: 0, duration: 250, easing: "easeInCirc" }         ]
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
})(jQuery, AdobeEdge, "EDGE-126001979");
