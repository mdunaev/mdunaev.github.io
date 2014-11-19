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
            id:'Hand3',
            display:'none',
            type:'rect',
            rect:['1461','auto','auto','auto','auto','119px']
         },
         {
            id:'Rectangle',
            display:'none',
            type:'rect',
            rect:['1481px','auto','169px','8px','auto','112px'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
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
            id:'Hero_shiva',
            display:'none',
            type:'rect',
            rect:['1471px','auto','auto','auto','auto','119px']
         },
         {
            id:'phone-tube',
            type:'image',
            rect:['1453px','auto','10px','28px','auto','150px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/phone-tube.svg','0px','0px'],
            transform:[[],['90']]
         },
         {
            id:'Group3',
            type:'group',
            rect:['-230','880','294','120','auto','auto'],
            c:[
            {
               id:'doomsCopy',
               type:'image',
               rect:['270px','auto','24px','120px','auto','0px'],
               clip:['rect(0px 24pxpx 120pxpx 0px)'],
               fill:["rgba(0,0,0,0)",'svg_floor5/dooms.svg','0px','0px']
            },
            {
               id:'Rectangle2',
               type:'rect',
               rect:['238px','auto','5px','10px','auto','990px'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'doom1',
            display:'none',
            type:'image',
            rect:['1629px','auto','34px','95px','auto','11px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/doom1.svg','0px','0px'],
            transform:[[],[],[],['1.28','1.28']]
         },
         {
            id:'doom2',
            display:'none',
            type:'image',
            rect:['1595px','auto','101px','95px','auto','11px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/doom2.svg','0px','0px'],
            transform:[[],[],[],['1.28','1.28']]
         },
         {
            id:'doom3',
            display:'none',
            type:'image',
            rect:['1554px','auto','183px','95px','auto','11px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/doom3.svg','0px','0px'],
            transform:[[],[],[],['1.28','1.28']]
         },
         {
            id:'doom4',
            display:'none',
            type:'image',
            rect:['1518px','auto','267px','95px','auto','11px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/doom4.svg','0px','0px'],
            transform:[[],[],[],['1.28','1.28']]
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','860px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/man-fly.svg','0px','0px']
         },
         {
            id:'table_clean',
            display:'none',
            type:'image',
            rect:['1399px','auto','201px','48px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor5/table_clean.svg','0px','0px']
         }],
         symbolInstances: [
         {
            id:'Hero_shiva',
            symbolName:'Hero_shiva'
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
            id:'woman_go',
            symbolName:'woman_go'
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
            id:'Hand3',
            symbolName:'Hand3'
         },
         {
            id:'Hero_with_Phone',
            symbolName:'Hero_with_Phone'
         }
         ]
      },
   states: {
      "Base State": {
         "${_doomsCopy}": [
            ["style", "clip", [0,24,11,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '230px'],
            ["style", "bottom", '0px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '10px'],
            ["style", "width", '5px'],
            ["style", "left", '238px'],
            ["style", "bottom", '990px']
         ],
         "${_Man_Left}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '118px']
         ],
         "${_doom4}": [
            ["transform", "scaleY", '1.28'],
            ["style", "bottom", '11px'],
            ["transform", "scaleX", '1.28'],
            ["style", "left", '1518px'],
            ["style", "display", 'none']
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
         "${_doom1}": [
            ["transform", "scaleY", '1.28'],
            ["style", "bottom", '11px'],
            ["transform", "scaleX", '1.28'],
            ["style", "left", '1629px'],
            ["style", "display", 'none']
         ],
         "${_table_clean}": [
            ["style", "display", 'none'],
            ["style", "left", '1399px'],
            ["style", "bottom", '119px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "bottom", '112px'],
            ["style", "height", '8px'],
            ["style", "display", 'none'],
            ["style", "left", '1481px'],
            ["style", "width", '169px']
         ],
         "${_hero_print}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '119px']
         ],
         "${_doom2}": [
            ["transform", "scaleY", '1.28'],
            ["style", "bottom", '11px'],
            ["transform", "scaleX", '1.28'],
            ["style", "left", '1595px'],
            ["style", "display", 'none']
         ],
         "${_Hand3}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '119px']
         ],
         "${_phone-tube}": [
            ["style", "display", 'block'],
            ["style", "bottom", '150px'],
            ["style", "left", '1453px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(133,204,204,1.00)'],
            ["style", "width", '3000px'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_furniture}": [
            ["style", "left", '675px'],
            ["style", "bottom", '118px']
         ],
         "${_hero12}": [
            ["style", "display", 'none'],
            ["style", "left", '1487px'],
            ["style", "bottom", '119px']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1459px'],
            ["style", "bottom", '860px']
         ],
         "${_Group}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Right_man}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '119px'],
            ["style", "display", 'none'],
            ["style", "left", '1759px'],
            ["transform", "scaleX", '1']
         ],
         "${_bg1}": [
            ["color", "background-color", 'rgba(153,102,51,1)'],
            ["style", "bottom", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_man3-13}": [
            ["transform", "scaleX", '-1'],
            ["style", "display", 'none'],
            ["style", "left", '2009px'],
            ["style", "bottom", '119px']
         ],
         "${_man3-1}": [
            ["style", "display", 'block'],
            ["style", "left", '1750px'],
            ["style", "bottom", '119px']
         ],
         "${_Hero_with_Phone}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '119px']
         ],
         "${_doom3}": [
            ["transform", "scaleY", '1.28'],
            ["style", "bottom", '11px'],
            ["transform", "scaleX", '1.28'],
            ["style", "left", '1554px'],
            ["style", "display", 'none']
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
         "${_bg2}": [
            ["color", "background-color", 'rgba(204,153,51,1)'],
            ["style", "bottom", '96px'],
            ["style", "height", '23px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
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
            "part2": 3037,
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
            { id: "eid447", tween: [ "style", "${_Rectangle2}", "height", '120px', { fromValue: '10px'}], position: 5107, duration: 250, easing: "easeInCirc" },
            { id: "eid151", tween: [ "style", "${_woman_go}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_woman_go}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0 },
            { id: "eid159", tween: [ "style", "${_woman_go}", "display", 'none', { fromValue: 'block'}], position: 3696, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Woman_Stand}", "left", '1222px', { fromValue: '1222px'}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Woman_Stand}", "left", '1222px', { fromValue: '1222px'}], position: 3091, duration: 0 },
            { id: "eid192", tween: [ "style", "${_Woman_Stand}", "left", '963px', { fromValue: '961px'}], position: 3696, duration: 1704, easing: "easeInElastic" },
            { id: "eid571", tween: [ "style", "${_Rectangle}", "width", '167px', { fromValue: '169px'}], position: 5845, duration: 213 },
            { id: "eid61", tween: [ "style", "${_Hero_with_Phone}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Hero_with_Phone}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_Hero_with_Phone}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutBack" },
            { id: "eid570", tween: [ "style", "${_Rectangle}", "left", '1484px', { fromValue: '1481px'}], position: 5845, duration: 213 },
            { id: "eid52", tween: [ "style", "${_phone-tube}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_phone-tube}", "display", 'none', { fromValue: 'block'}], position: 1809, duration: 0 },
            { id: "eid111", tween: [ "style", "${_table}", "display", 'block', { fromValue: 'block'}], position: 11, duration: 0 },
            { id: "eid110", tween: [ "style", "${_table}", "display", 'none', { fromValue: 'block'}], position: 4296, duration: 0 },
            { id: "eid449", tween: [ "style", "${_Rectangle2}", "left", '15px', { fromValue: '238px'}], position: 5357, duration: 750, easing: "easeInElastic" },
            { id: "eid450", tween: [ "style", "${_Rectangle2}", "width", '266px', { fromValue: '5px'}], position: 5357, duration: 750, easing: "easeInElastic" },
            { id: "eid90", tween: [ "style", "${_Hero_shiva}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid89", tween: [ "style", "${_Hero_shiva}", "display", 'block', { fromValue: 'none'}], position: 4296, duration: 0, easing: "easeOutBack" },
            { id: "eid191", tween: [ "style", "${_Hero_shiva}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInElastic" },
            { id: "eid567", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 5845, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Right_man}", "display", 'block', { fromValue: 'none'}], position: 1898, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'block'}], position: 3037, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Right_man}", "display", 'block', { fromValue: 'none'}], position: 3091, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Right_man}", "display", 'none', { fromValue: 'block'}], position: 4296, duration: 0 },
            { id: "eid474", tween: [ "style", "${_Hand3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "style", "${_Hand3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid473", tween: [ "style", "${_Hand3}", "display", 'none', { fromValue: 'block'}], position: 4296, duration: 0 },
            { id: "eid78", tween: [ "style", "${_man3-13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_man3-13}", "display", 'block', { fromValue: 'none'}], position: 3037, duration: 0 },
            { id: "eid134", tween: [ "style", "${_man3-13}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0 },
            { id: "eid140", tween: [ "style", "${_man3-13}", "display", 'block', { fromValue: 'none'}], position: 4296, duration: 0 },
            { id: "eid569", tween: [ "style", "${_Rectangle}", "bottom", '-3px', { fromValue: '112px'}], position: 5845, duration: 213 },
            { id: "eid12", tween: [ "style", "${_hero_print}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_hero_print}", "display", 'block', { fromValue: 'none'}], position: 946, duration: 0 },
            { id: "eid59", tween: [ "style", "${_hero_print}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_chart2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid84", tween: [ "style", "${_chart2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
            { id: "eid5", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 946, duration: 0 },
            { id: "eid193", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInElastic" },
            { id: "eid144", tween: [ "style", "${_man3-13}", "left", '2009px', { fromValue: '2009px'}], position: 3037, duration: 0 },
            { id: "eid145", tween: [ "style", "${_man3-13}", "left", '2009px', { fromValue: '2009px'}], position: 3091, duration: 0 },
            { id: "eid142", tween: [ "style", "${_man3-13}", "left", '1756px', { fromValue: '1756px'}], position: 4296, duration: 0 },
            { id: "eid158", tween: [ "style", "${_woman_go}", "left", '961px', { fromValue: '1219px'}], position: 3091, duration: 605 },
            { id: "eid555", tween: [ "style", "${_doom4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid565", tween: [ "style", "${_doom4}", "display", 'block', { fromValue: 'none'}], position: 5655, duration: 0 },
            { id: "eid453", tween: [ "style", "${_doomsCopy}", "clip", [0,24,120,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,11,0]}], position: 5107, duration: 250, easing: "easeInCirc" },
            { id: "eid71", tween: [ "style", "${_man3-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_man3-1}", "display", 'none', { fromValue: 'block'}], position: 1898, duration: 0 },
            { id: "eid149", tween: [ "style", "${_Woman_Stand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Woman_Stand}", "display", 'none', { fromValue: 'block'}], position: 3091, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Woman_Stand}", "display", 'block', { fromValue: 'none'}], position: 3696, duration: 0 },
            { id: "eid203", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 5051, duration: 0, easing: "easeInElastic" },
            { id: "eid196", tween: [ "style", "${_Group}", "left", '-5px', { fromValue: '0px'}], position: 5107, duration: 0, easing: "easeInElastic" },
            { id: "eid197", tween: [ "style", "${_Group}", "left", '-4px', { fromValue: '-1px'}], position: 5185, duration: 0, easing: "easeInElastic" },
            { id: "eid199", tween: [ "style", "${_Group}", "left", '17px', { fromValue: '0px'}], position: 5250, duration: 0, easing: "easeInElastic" },
            { id: "eid201", tween: [ "style", "${_Group}", "left", '-14px', { fromValue: '3px'}], position: 5333, duration: 0, easing: "easeInElastic" },
            { id: "eid205", tween: [ "style", "${_Group}", "left", '19px', { fromValue: '0px'}], position: 5394, duration: 0, easing: "easeInElastic" },
            { id: "eid207", tween: [ "style", "${_Group}", "left", '-4px', { fromValue: '19px'}], position: 5444, duration: 0, easing: "easeInElastic" },
            { id: "eid210", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 5500, duration: 0, easing: "easeInElastic" },
            { id: "eid86", tween: [ "style", "${_hero12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid44", tween: [ "style", "${_chart2}", "clip", [0,169,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,11,0]}], position: 1000, duration: 707, easing: "easeOutBack" },
            { id: "eid83", tween: [ "style", "${_chart2}", "clip", [0,169,36,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,34,0]}], position: 1898, duration: 876 },
            { id: "eid133", tween: [ "style", "${_chart2}", "clip", [0,169,62,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,36,0]}], position: 3037, duration: 373 },
            { id: "eid463", tween: [ "style", "${_chart2}", "clip", [0,169,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,62,0]}], position: 3750, duration: 546, easing: "easeInCirc" },
            { id: "eid464", tween: [ "style", "${_chart2}", "clip", [0,169,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,73,0]}], position: 4296, duration: 0, easing: "easeInCirc" },
            { id: "eid164", tween: [ "style", "${_chart2}", "clip", [0,169,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,169,73,0]}], position: 4375, duration: 732, easing: "easeInCirc" },
            { id: "eid448", tween: [ "style", "${_Rectangle2}", "bottom", '880px', { fromValue: '990px'}], position: 5107, duration: 250, easing: "easeInCirc" },
            { id: "eid454", tween: [ "style", "${_doomsCopy}", "left", '270px', { fromValue: '230px'}], position: 5357, duration: 750, easing: "easeInElastic" },
            { id: "eid568", tween: [ "style", "${_Rectangle}", "height", '122px', { fromValue: '8px'}], position: 5845, duration: 213 },
            { id: "eid556", tween: [ "style", "${_doom3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid563", tween: [ "style", "${_doom3}", "display", 'block', { fromValue: 'none'}], position: 5464, duration: 0 },
            { id: "eid564", tween: [ "style", "${_doom3}", "display", 'none', { fromValue: 'block'}], position: 5655, duration: 0 },
            { id: "eid1", tween: [ "style", "${_man-fly}", "bottom", '120px', { fromValue: '860px'}], position: 0, duration: 946 },
            { id: "eid194", tween: [ "style", "${_man-fly}", "bottom", '-110px', { fromValue: '120px'}], position: 6000, duration: 620, easing: "easeInQuint" },
            { id: "eid146", tween: [ "transform", "${_man3-13}", "scaleX", '-1', { fromValue: '-1'}], position: 3037, duration: 0 },
            { id: "eid147", tween: [ "transform", "${_man3-13}", "scaleX", '-1', { fromValue: '-1'}], position: 3091, duration: 0 },
            { id: "eid141", tween: [ "transform", "${_man3-13}", "scaleX", '1', { fromValue: '1'}], position: 4296, duration: 0 },
            { id: "eid113", tween: [ "style", "${_table_clean}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_table_clean}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid143", tween: [ "transform", "${_Right_man}", "scaleX", '1', { fromValue: '1'}], position: 1898, duration: 0 },
            { id: "eid137", tween: [ "transform", "${_Right_man}", "scaleX", '-1', { fromValue: '1'}], position: 3091, duration: 0 },
            { id: "eid558", tween: [ "style", "${_doom1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid559", tween: [ "style", "${_doom1}", "display", 'block', { fromValue: 'none'}], position: 5107, duration: 0 },
            { id: "eid560", tween: [ "style", "${_doom1}", "display", 'none', { fromValue: 'block'}], position: 5292, duration: 0 },
            { id: "eid557", tween: [ "style", "${_doom2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid561", tween: [ "style", "${_doom2}", "display", 'block', { fromValue: 'none'}], position: 5292, duration: 0 },
            { id: "eid562", tween: [ "style", "${_doom2}", "display", 'none', { fromValue: 'block'}], position: 5464, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Right_man}", "left", '2009px', { fromValue: '1759px'}], position: 1898, duration: 1139 },
            { id: "eid138", tween: [ "style", "${_Right_man}", "left", '1756px', { fromValue: '2009px'}], position: 3091, duration: 1205 }         ]
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
      transform: [[0,0],[],[],['-1']],
      id: 'man3-12',
      type: 'image',
      rect: ['0px','auto','60px','85px','auto','0px'],
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
         ],
         "${_list1}": [
            ["style", "top", '-60px'],
            ["style", "left", '-62px']
         ],
         "${_list32}": [
            ["style", "top", '-37px'],
            ["style", "left", '29px']
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
            { id: "eid233", tween: [ "style", "${_list32}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0, easing: "easeOutExpo" },
            { id: "eid221", tween: [ "style", "${_list1}", "left", '-62px', { fromValue: '-62px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid220", tween: [ "style", "${_list1}", "top", '-60px', { fromValue: '-60px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid232", tween: [ "style", "${_list32}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0, easing: "easeOutExpo" }         ]
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
            { id: "eid222", tween: [ "style", "${_list}", "left", '131px', { fromValue: '9px'}], position: 0, duration: 375, easing: "easeOutExpo" },
            { id: "eid223", tween: [ "style", "${_list}", "left", '133px', { fromValue: '131px'}], position: 375, duration: 375, easing: "easeOutExpo" },
            { id: "eid225", tween: [ "style", "${_list}", "left", '-45px', { fromValue: '133px'}], position: 750, duration: 375, easing: "easeOutExpo" },
            { id: "eid227", tween: [ "style", "${_list}", "left", '0px', { fromValue: '-45px'}], position: 1125, duration: 375, easing: "easeOutExpo" },
            { id: "eid224", tween: [ "style", "${_list}", "bottom", '-5px', { fromValue: '0px'}], position: 0, duration: 375, easing: "easeOutExpo" },
            { id: "eid229", tween: [ "style", "${_list}", "bottom", '-191px', { fromValue: '-5px'}], position: 375, duration: 375, easing: "easeOutExpo" },
            { id: "eid226", tween: [ "style", "${_list}", "bottom", '-136px', { fromValue: '-191px'}], position: 750, duration: 375, easing: "easeOutExpo" },
            { id: "eid228", tween: [ "style", "${_list}", "bottom", '0px', { fromValue: '-136px'}], position: 1125, duration: 375, easing: "easeOutExpo" }         ]
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
      id: 'Group2',
      type: 'group',
      rect: ['0','0','25','31','auto','auto'],
      c: [
      {
         rect: ['0px','auto','25px','31px','auto','0px'],
         id: 'list2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','svg_floor5/list.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_list2}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
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
            { id: "eid213", tween: [ "style", "${_list2}", "bottom", '113px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid215", tween: [ "style", "${_list2}", "bottom", '0px', { fromValue: '113px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid217", tween: [ "style", "${_list2}", "bottom", '-107px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid219", tween: [ "style", "${_list2}", "bottom", '0px', { fromValue: '-107px'}], position: 750, duration: 250, easing: "easeOutCirc" },
            { id: "eid212", tween: [ "style", "${_list2}", "left", '103px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid214", tween: [ "style", "${_list2}", "left", '217px', { fromValue: '103px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid216", tween: [ "style", "${_list2}", "left", '100px', { fromValue: '217px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid218", tween: [ "style", "${_list2}", "left", '0px', { fromValue: '100px'}], position: 750, duration: 250, easing: "easeOutCirc" }         ]
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
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
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
            { id: "eid234", tween: [ "style", "${_list3}", "left", '-89px', { fromValue: '0px'}], position: 0, duration: 331 },
            { id: "eid236", tween: [ "style", "${_list3}", "left", '80px', { fromValue: '-89px'}], position: 331, duration: 349 },
            { id: "eid238", tween: [ "style", "${_list3}", "left", '0px', { fromValue: '80px'}], position: 680, duration: 570 },
            { id: "eid235", tween: [ "style", "${_list3}", "bottom", '-130px', { fromValue: '0px'}], position: 0, duration: 331 },
            { id: "eid237", tween: [ "style", "${_list3}", "bottom", '-129px', { fromValue: '-130px'}], position: 331, duration: 349 },
            { id: "eid239", tween: [ "style", "${_list3}", "bottom", '5px', { fromValue: '-129px'}], position: 680, duration: 570 }         ]
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
      transform: [],
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
         transform: [],
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
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
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
         duration: 1677,
         autoPlay: true,
         timeline: [
            { id: "eid129", tween: [ "transform", "${_Group}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1677 },
            { id: "eid251", tween: [ "style", "${_Group}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid748", tween: [ "style", "${_Group}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid749", tween: [ "style", "${_Group}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid750", tween: [ "style", "${_Group}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid751", tween: [ "style", "${_Group}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid254", tween: [ "style", "${_Group}", "left", '29px', { fromValue: '-9px'}], position: 0, duration: 215 },
            { id: "eid262", tween: [ "style", "${_Group}", "left", '122px', { fromValue: '29px'}], position: 215, duration: 205 },
            { id: "eid260", tween: [ "style", "${_Group}", "left", '251px', { fromValue: '122px'}], position: 419, duration: 210 },
            { id: "eid265", tween: [ "style", "${_Group}", "left", '287px', { fromValue: '251px'}], position: 629, duration: 210 },
            { id: "eid256", tween: [ "style", "${_Group}", "left", '229px', { fromValue: '287px'}], position: 839, duration: 226 },
            { id: "eid266", tween: [ "style", "${_Group}", "left", '115px', { fromValue: '229px'}], position: 1065, duration: 193 },
            { id: "eid258", tween: [ "style", "${_Group}", "left", '26px', { fromValue: '115px'}], position: 1258, duration: 240 },
            { id: "eid268", tween: [ "style", "${_Group}", "left", '-9px', { fromValue: '26px'}], position: 1498, duration: 179 },
            { id: "eid255", tween: [ "style", "${_Group}", "top", '-86px', { fromValue: '3px'}], position: 0, duration: 215 },
            { id: "eid263", tween: [ "style", "${_Group}", "top", '-150px', { fromValue: '-86px'}], position: 215, duration: 205 },
            { id: "eid261", tween: [ "style", "${_Group}", "top", '-119px', { fromValue: '-150px'}], position: 419, duration: 210 },
            { id: "eid264", tween: [ "style", "${_Group}", "top", '-11px', { fromValue: '-119px'}], position: 629, duration: 210 },
            { id: "eid257", tween: [ "style", "${_Group}", "top", '81px', { fromValue: '-11px'}], position: 839, duration: 226 },
            { id: "eid267", tween: [ "style", "${_Group}", "top", '113px', { fromValue: '81px'}], position: 1065, duration: 193 },
            { id: "eid259", tween: [ "style", "${_Group}", "top", '86px', { fromValue: '113px'}], position: 1258, duration: 240 },
            { id: "eid269", tween: [ "style", "${_Group}", "top", '2px', { fromValue: '86px'}], position: 1498, duration: 179 }         ]
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
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
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
            { id: "eid240", tween: [ "style", "${_comp}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid752", tween: [ "style", "${_comp}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid753", tween: [ "style", "${_comp}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid754", tween: [ "style", "${_comp}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid755", tween: [ "style", "${_comp}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid244", tween: [ "style", "${_comp}", "bottom", '-102px', { fromValue: '0px'}], position: 0, duration: 375, easing: "easeInCirc" },
            { id: "eid246", tween: [ "style", "${_comp}", "bottom", '5px', { fromValue: '-102px'}], position: 375, duration: 375, easing: "easeInCirc" },
            { id: "eid248", tween: [ "style", "${_comp}", "bottom", '69px', { fromValue: '5px'}], position: 750, duration: 375, easing: "easeInCirc" },
            { id: "eid250", tween: [ "style", "${_comp}", "bottom", '5px', { fromValue: '69px'}], position: 1125, duration: 375, easing: "easeInCirc" },
            { id: "eid130", tween: [ "transform", "${_comp}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
            { id: "eid242", tween: [ "style", "${_comp}", "left", '-115px', { fromValue: '0px'}], position: 0, duration: 375, easing: "easeInCirc" },
            { id: "eid245", tween: [ "style", "${_comp}", "left", '-184px', { fromValue: '-115px'}], position: 375, duration: 375, easing: "easeInCirc" },
            { id: "eid247", tween: [ "style", "${_comp}", "left", '-83px', { fromValue: '-184px'}], position: 750, duration: 375, easing: "easeInCirc" },
            { id: "eid249", tween: [ "style", "${_comp}", "left", '15px', { fromValue: '-83px'}], position: 1125, duration: 375, easing: "easeInCirc" }         ]
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
      transform: [[0,0],[],[],['-1']],
      id: 'man1-12',
      type: 'image',
      rect: ['0px','auto','61px','84px','auto','0px'],
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
      type: 'image',
      id: 'dooms',
      rect: ['0px','auto','24px','120px','auto','0px'],
      clip: ['rect(0px 24pxpx 120pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','svg_floor5/dooms.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'doomsCopy',
      rect: ['0px','auto','24px','120px','auto','0px'],
      clip: ['rect(0px 24pxpx 120pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','svg_floor5/dooms.svg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['8px','auto','5px','10px','auto','110px'],
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
},
"Hand3": {
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
      id: '_3hand1',
      type: 'image',
      rect: ['0px','auto','94px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor5/3hand1.svg','0px','0px']
   },
   {
      rect: ['0px','auto','95px','90px','auto','0px'],
      id: '_3hand2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor5/3hand2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__3hand1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${__3hand2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '94px']
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
            { id: "eid466", tween: [ "style", "${__3hand1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid467", tween: [ "style", "${__3hand1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid470", tween: [ "style", "${__3hand1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid465", tween: [ "style", "${__3hand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid468", tween: [ "style", "${__3hand2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid469", tween: [ "style", "${__3hand2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
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
