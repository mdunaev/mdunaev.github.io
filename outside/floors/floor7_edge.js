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
            id:'BG',
            type:'group',
            rect:['0px','auto','3000','997','auto','0px'],
            transform:[],
            c:[
            {
               id:'bg3',
               type:'rect',
               rect:['0px','auto','3000px','878px','auto','119px'],
               fill:["rgba(255,230,0,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
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
            id:'Furniture',
            type:'rect',
            rect:['1019','auto','auto','auto','auto','105px']
         },
         {
            id:'MonkeyMask',
            display:'none',
            type:'rect',
            rect:['1560px','auto','111px','90px','auto','119px'],
            fill:["rgba(255,230,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bang4',
            display:'none',
            type:'image',
            rect:['1438px','auto','258px','258px','auto','-7px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bang4.svg','0px','0px']
         },
         {
            id:'bang-bg',
            display:'none',
            type:'image',
            rect:['1353px','auto','419px','120px','auto','-1px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bang-bg.svg','0px','0px']
         },
         {
            id:'bang3',
            display:'none',
            type:'image',
            rect:['1479px','auto','179px','179px','auto','37px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bang3.svg','0px','0px']
         },
         {
            id:'bang2',
            display:'none',
            type:'image',
            rect:['1430px','auto','274px','274px','auto','-18px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bang2.svg','0px','0px']
         },
         {
            id:'bang1',
            display:'none',
            type:'image',
            rect:['1517px','auto','101px','101px','auto','72px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bang1.svg','0px','0px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','1013px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         },
         {
            id:'man-fly2',
            display:'none',
            type:'image',
            rect:['1455px','auto','82px','89px','auto','120px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         },
         {
            id:'man_stand',
            display:'none',
            type:'image',
            rect:['1473px','auto','53px','90px','auto','119px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man_stand.svg','0px','0px']
         },
         {
            id:'ManWalk',
            display:'none',
            type:'rect',
            rect:['1473','auto','auto','auto','auto','119px']
         },
         {
            id:'monkey_shake_hand',
            display:'none',
            type:'rect',
            rect:['1568px','auto','auto','auto','auto','119px']
         },
         {
            id:'Monkey_Stand2',
            display:'none',
            type:'rect',
            rect:['1597','auto','auto','auto','auto','243px']
         },
         {
            id:'Monkey_visit',
            display:'none',
            type:'rect',
            rect:['1567','auto','auto','auto','auto','291px']
         },
         {
            id:'bomb',
            display:'none',
            type:'image',
            rect:['1585px','auto','44px','44px','auto','297px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bomb.svg','0px','0px']
         }],
         symbolInstances: [
         {
            id:'Furniture',
            symbolName:'Furniture'
         },
         {
            id:'Monkey_Stand2',
            symbolName:'Monkey_Stand'
         },
         {
            id:'monkey_shake_hand',
            symbolName:'monkey_shake_hand'
         },
         {
            id:'ManWalk',
            symbolName:'ManWalk'
         },
         {
            id:'Monkey_visit',
            symbolName:'Monkey_visit'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bg3}": [
            ["color", "background-color", 'rgba(255,230,0,1.00)'],
            ["style", "bottom", '119px'],
            ["style", "height", '878px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_bang-bg}": [
            ["style", "display", 'none'],
            ["style", "left", '1353px'],
            ["style", "bottom", '-1px']
         ],
         "${_Monkey_Stand2}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "left", '1568px'],
            ["style", "bottom", '118px']
         ],
         "${_bang4}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1438px'],
            ["style", "bottom", '-7px']
         ],
         "${_man-fly2}": [
            ["style", "display", 'none'],
            ["style", "left", '1455px'],
            ["style", "bottom", '120px']
         ],
         "${_bg1}": [
            ["color", "background-color", 'rgba(153,102,51,1.00)'],
            ["style", "bottom", '0px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_Furniture}": [
            ["style", "top", 'auto'],
            ["style", "left", '1019px'],
            ["style", "bottom", '105px']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1459px'],
            ["style", "bottom", '1013px']
         ],
         "${_bang1}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1517px'],
            ["style", "bottom", '72px']
         ],
         "${_bang3}": [
            ["style", "display", 'none'],
            ["style", "left", '1479px'],
            ["style", "bottom", '37px']
         ],
         "${_bg2}": [
            ["color", "background-color", 'rgba(204,153,51,1.00)'],
            ["style", "bottom", '96px'],
            ["style", "height", '23px'],
            ["style", "left", '0px'],
            ["style", "width", '3000px']
         ],
         "${_MonkeyMask}": [
            ["style", "display", 'none'],
            ["style", "left", '1560px'],
            ["style", "bottom", '119px']
         ],
         "${_ManWalk}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '119px']
         ],
         "${_monkey_shake_hand}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "left", '1568px'],
            ["style", "bottom", '119px']
         ],
         "${_man_stand}": [
            ["style", "display", 'none'],
            ["style", "left", '1473px'],
            ["style", "bottom", '119px']
         ],
         "${_Monkey_visit}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '291px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,230,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ],
         "${_bomb}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1579px'],
            ["style", "bottom", '296px']
         ],
         "${_BG}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_bang2}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1430px'],
            ["style", "bottom", '-18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 512,
            "part1": 2521,
            "part2": 4029,
            "part3": 6028,
            "part4": 8075,
            "part5": 9047,
            "end": 12000
         },
         timeline: [
            { id: "eid210", tween: [ "style", "${_bang1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid214", tween: [ "style", "${_bang1}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutCubic" },
            { id: "eid220", tween: [ "style", "${_bang1}", "display", 'none', { fromValue: 'block'}], position: 11205, duration: 0, easing: "easeOutCubic" },
            { id: "eid222", tween: [ "transform", "${_bang4}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 10351, duration: 692 },
            { id: "eid42", tween: [ "style", "${_Furniture}", "left", '469px', { fromValue: '1019px'}], position: 512, duration: 1988, easing: "swing" },
            { id: "eid56", tween: [ "style", "${_Furniture}", "left", '129px', { fromValue: '469px'}], position: 2547, duration: 1453, easing: "swing" },
            { id: "eid65", tween: [ "style", "${_Furniture}", "left", '-321px', { fromValue: '129px'}], position: 4064, duration: 1936, easing: "swing" },
            { id: "eid4", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid195", tween: [ "transform", "${_bomb}", "rotateZ", '-233deg', { fromValue: '0deg'}], position: 9500, duration: 500, easing: "easeOutCubic" },
            { id: "eid221", tween: [ "transform", "${_bang2}", "rotateZ", '-72deg', { fromValue: '0deg'}], position: 10095, duration: 1041 },
            { id: "eid212", tween: [ "style", "${_bang3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid216", tween: [ "style", "${_bang3}", "display", 'block', { fromValue: 'none'}], position: 10186, duration: 0, easing: "easeOutCubic" },
            { id: "eid225", tween: [ "style", "${_bang3}", "display", 'none', { fromValue: 'block'}], position: 11090, duration: 0, easing: "easeOutCubic" },
            { id: "eid198", tween: [ "style", "${_bomb}", "left", '1545px', { fromValue: '1579px'}], position: 9500, duration: 500, easing: "easeOutCubic" },
            { id: "eid171", tween: [ "style", "${_Monkey_Stand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid172", tween: [ "style", "${_Monkey_Stand2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeOutBack" },
            { id: "eid186", tween: [ "style", "${_Monkey_Stand2}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutBack" },
            { id: "eid2", tween: [ "style", "${_man-fly}", "bottom", '120px', { fromValue: '1013px'}], position: 0, duration: 500 },
            { id: "eid207", tween: [ "style", "${_Monkey_visit}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid206", tween: [ "style", "${_Monkey_visit}", "display", 'block', { fromValue: 'none'}], position: 9445, duration: 0, easing: "easeOutCubic" },
            { id: "eid199", tween: [ "style", "${_bomb}", "bottom", '90px', { fromValue: '296px'}], position: 9500, duration: 500, easing: "easeOutCubic" },
            { id: "eid209", tween: [ "style", "${_bang4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid218", tween: [ "style", "${_bang4}", "display", 'block', { fromValue: 'none'}], position: 10351, duration: 0, easing: "easeOutCubic" },
            { id: "eid223", tween: [ "style", "${_bang4}", "display", 'none', { fromValue: 'block'}], position: 11043, duration: 0, easing: "easeOutCubic" },
            { id: "eid190", tween: [ "style", "${_bomb}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid189", tween: [ "style", "${_bomb}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeOutBack" },
            { id: "eid208", tween: [ "style", "${_bomb}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutCubic" },
            { id: "eid20", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 523, duration: 0 },
            { id: "eid43", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid45", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 2547, duration: 0 },
            { id: "eid57", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0, easing: "swing" },
            { id: "eid62", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "swing" },
            { id: "eid232", tween: [ "style", "${_man-fly2}", "left", '1455px', { fromValue: '1455px'}], position: 10611, duration: 0 },
            { id: "eid234", tween: [ "style", "${_man-fly2}", "left", '1455px', { fromValue: '1455px'}], position: 10750, duration: 0 },
            { id: "eid177", tween: [ "style", "${_Monkey_Stand2}", "bottom", '243px', { fromValue: '118px'}], position: 8104, duration: 896, easing: "easeOutBack" },
            { id: "eid185", tween: [ "style", "${_Monkey_Stand2}", "bottom", '300px', { fromValue: '243px'}], position: 9092, duration: 408, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "style", "${_man-fly2}", "bottom", '120px', { fromValue: '120px'}], position: 10611, duration: 0 },
            { id: "eid235", tween: [ "style", "${_man-fly2}", "bottom", '-160px', { fromValue: '120px'}], position: 10750, duration: 1250, easing: "easeInQuad" },
            { id: "eid175", tween: [ "style", "${_Monkey_Stand2}", "left", '1652px', { fromValue: '1568px'}], position: 8104, duration: 896 },
            { id: "eid184", tween: [ "style", "${_Monkey_Stand2}", "left", '1534px', { fromValue: '1652px'}], position: 9092, duration: 408, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "transform", "${_bang1}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 10000, duration: 1205 },
            { id: "eid213", tween: [ "style", "${_bang-bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid217", tween: [ "style", "${_bang-bg}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutCubic" },
            { id: "eid211", tween: [ "style", "${_bang2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid215", tween: [ "style", "${_bang2}", "display", 'block', { fromValue: 'none'}], position: 10095, duration: 0, easing: "easeOutCubic" },
            { id: "eid227", tween: [ "style", "${_bang2}", "display", 'none', { fromValue: 'block'}], position: 11136, duration: 0, easing: "easeOutCubic" },
            { id: "eid7", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid6", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 523, duration: 0 },
            { id: "eid44", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 2547, duration: 0 },
            { id: "eid58", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 4064, duration: 0, easing: "swing" },
            { id: "eid63", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "swing" },
            { id: "eid228", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 10611, duration: 0 },
            { id: "eid230", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_man-fly2}", "display", 'block', { fromValue: 'none'}], position: 10611, duration: 0 },
            { id: "eid106", tween: [ "style", "${_monkey_shake_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_monkey_shake_hand}", "display", 'block', { fromValue: 'none'}], position: 6058, duration: 0 },
            { id: "eid128", tween: [ "style", "${_monkey_shake_hand}", "display", 'none', { fromValue: 'block'}], position: 8104, duration: 0 },
            { id: "eid105", tween: [ "style", "${_MonkeyMask}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_MonkeyMask}", "display", 'block', { fromValue: 'none'}], position: 6058, duration: 0 },
            { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ManWalk}', [0] ], ""], position: 523 },
            { id: "eid130", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_monkey_shake_hand}', [0] ], ""], position: 6058 }         ]
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
      fill: ['rgba(0,0,0,0)','svg_floor7/man_stand.svg','0px','0px']
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
         "${_man_walk2}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '53px']
         ],
         "${_man_walk}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
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
            { id: "eid16", tween: [ "style", "${_man_walk2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_man_walk2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man_walk2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid11", tween: [ "style", "${_man_walk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_man_walk}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid15", tween: [ "style", "${_man_walk}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Furniture": {
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
      id: 'furniture',
      type: 'image',
      rect: ['0px','auto','2332px','2407px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/furniture.svg','0px','0px']
   },
   {
      id: 'Man1',
      type: 'rect',
      rect: ['793','2310px','auto','auto','auto','auto']
   },
   {
      id: 'Man2',
      type: 'rect',
      rect: ['1132','2309px','auto','auto','auto','auto']
   },
   {
      id: 'monkey1',
      type: 'image',
      rect: ['1889px','auto','102px','76px','auto','14px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey1.svg','0px','0px']
   },
   {
      id: 'Man3',
      type: 'rect',
      rect: ['1462','2309px','auto','auto','auto','auto']
   },
   {
      id: 'Star',
      type: 'rect',
      rect: ['1891px','2315px','auto','auto','auto','auto']
   },
   {
      id: 'Mouth',
      type: 'rect',
      rect: ['1924','2348','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Man1',
      symbolName: 'Man1'
   },
   {
      id: 'Man2',
      symbolName: 'Man2'
   },
   {
      id: 'Man3',
      symbolName: 'Man3'
   },
   {
      id: 'Star',
      symbolName: 'Star'
   },
   {
      id: 'Mouth',
      symbolName: 'Mouth'
   }   ]
   },
   states: {
      "Base State": {
         "${_furniture}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Star}": [
            ["style", "top", '2315px'],
            ["style", "left", '1891px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2407px'],
            ["style", "width", '2332px']
         ],
         "${_Man3}": [
            ["style", "top", '2309px']
         ],
         "${_monkey1}": [
            ["style", "left", '1889px'],
            ["style", "bottom", '14px']
         ],
         "${_Man2}": [
            ["style", "top", '2309px']
         ],
         "${_Man1}": [
            ["style", "top", '2310px']
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
"Man1": {
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
      rect: ['0px','auto','134px','84px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/man1-1.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','134px','84px','auto','0px'],
      id: 'man1-2',
      fill: ['rgba(0,0,0,0)','svg_floor7/man1-2.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','134px','84px','auto','0px'],
      id: 'man1-32',
      fill: ['rgba(0,0,0,0)','svg_floor7/man1-3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man1-32}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '134px']
         ],
         "${_man1-2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man1-1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         labels: {
            "close": 7826
         },
         timeline: [
            { id: "eid23", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_man1-2}", "display", 'block', { fromValue: 'none'}], position: 3199, duration: 0 },
            { id: "eid30", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'block'}], position: 7804, duration: 0 },
            { id: "eid34", tween: [ "style", "${_man1-2}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_man1-32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_man1-32}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid27", tween: [ "style", "${_man1-32}", "display", 'none', { fromValue: 'block'}], position: 3199, duration: 0 },
            { id: "eid32", tween: [ "style", "${_man1-32}", "display", 'block', { fromValue: 'none'}], position: 7804, duration: 0 },
            { id: "eid33", tween: [ "style", "${_man1-32}", "display", 'block', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid22", tween: [ "style", "${_man1-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_man1-1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_man1-1}", "display", 'none', { fromValue: 'none'}], position: 3199, duration: 0 },
            { id: "eid31", tween: [ "style", "${_man1-1}", "display", 'none', { fromValue: 'none'}], position: 7804, duration: 0 },
            { id: "eid35", tween: [ "style", "${_man1-1}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0 }         ]
      }
   }
},
"Man2": {
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
      id: 'man2-1',
      type: 'image',
      rect: ['0px','auto','156px','85px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/man2-1.svg','0px','0px']
   },
   {
      rect: ['0px','auto','156px','85px','auto','94px'],
      id: 'man2-2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/man2-2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man2-1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man2-2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '156px']
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
            { id: "eid50", tween: [ "style", "${_man2-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_man2-1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid52", tween: [ "style", "${_man2-1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid53", tween: [ "style", "${_man2-2}", "bottom", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid49", tween: [ "style", "${_man2-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_man2-2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid51", tween: [ "style", "${_man2-2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Man3": {
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
      id: 'man3-1',
      type: 'image',
      rect: ['0px','auto','136px','85px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/man3-1.svg','0px','0px']
   },
   {
      id: 'man3-1-eyes',
      type: 'image',
      rect: ['80px','auto','18px','2px','auto','64px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/man3-1-eyes.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man3-1-eyes}": [
            ["style", "left", '82px'],
            ["style", "bottom", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '136px']
         ],
         "${_man3-1}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 903,
         autoPlay: true,
         timeline: [
            { id: "eid72", tween: [ "style", "${_man3-1-eyes}", "left", '84px', { fromValue: '82px'}], position: 0, duration: 750 },
            { id: "eid78", tween: [ "style", "${_man3-1-eyes}", "left", '82px', { fromValue: '84px'}], position: 750, duration: 153 }         ]
      }
   }
},
"Star": {
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
      id: 'star',
      type: 'image',
      rect: ['0px','auto','19px','19px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/star.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_star}": [
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '19px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 215,
         autoPlay: true,
         timeline: [
            { id: "eid80", tween: [ "transform", "${_star}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "transform", "${_star}", "rotateZ", '22deg', { fromValue: '22deg'}], position: 107, duration: 0 },
            { id: "eid82", tween: [ "transform", "${_star}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 215, duration: 0 }         ]
      }
   }
},
"Mouth": {
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
      id: 'mouth1',
      type: 'image',
      rect: ['0px','auto','38px','14px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth1.svg','0px','0px']
   },
   {
      rect: ['13px','auto','11px','9px','auto','1px'],
      id: 'mouth2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth2.svg','0px','0px']
   },
   {
      rect: ['4px','auto','30px','11px','auto','1px'],
      id: 'mouth3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth3.svg','0px','0px']
   },
   {
      rect: ['2px','auto','33px','9px','auto','2px'],
      id: 'mouth4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth4.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mouth2}": [
            ["style", "display", 'none'],
            ["style", "left", '13px'],
            ["style", "bottom", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '14px'],
            ["style", "width", '38px']
         ],
         "${_mouth4}": [
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "bottom", '2px']
         ],
         "${_mouth3}": [
            ["style", "display", 'none'],
            ["style", "left", '4px'],
            ["style", "bottom", '1px']
         ],
         "${_mouth1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "style", "${_mouth4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_mouth4}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid95", tween: [ "style", "${_mouth4}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_mouth4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid100", tween: [ "style", "${_mouth4}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_mouth3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_mouth3}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_mouth3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_mouth3}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_mouth3}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_mouth2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_mouth2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid93", tween: [ "style", "${_mouth2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_mouth2}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid102", tween: [ "style", "${_mouth2}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_mouth1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_mouth1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid92", tween: [ "style", "${_mouth1}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid99", tween: [ "style", "${_mouth1}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid103", tween: [ "style", "${_mouth1}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 }         ]
      }
   }
},
"monkey_shake_hand": {
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
      id: 'monkey1',
      type: 'image',
      rect: ['0px','auto','102px','76px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey1.svg','0px','0px']
   },
   {
      rect: ['0px','auto','102px','76px','auto','0px'],
      id: 'monkey1-1',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey1-1.svg','0px','0px']
   },
   {
      id: 'Star',
      type: 'rect',
      rect: ['2px','-1px','auto','auto','auto','auto']
   },
   {
      id: 'Mouth',
      type: 'rect',
      rect: ['35px','32px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Mouth',
      symbolName: 'Mouth'
   },
   {
      id: 'Star',
      symbolName: 'Star'
   }   ]
   },
   states: {
      "Base State": {
         "${_Mouth}": [
            ["style", "left", '35px'],
            ["style", "top", '32px']
         ],
         "${_monkey1-1}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '102px']
         ],
         "${_monkey1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Star}": [
            ["style", "top", '-1px'],
            ["style", "left", '2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid119", tween: [ "style", "${_Star}", "top", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid120", tween: [ "style", "${_Star}", "top", '14px', { fromValue: '-1px'}], position: 500, duration: 0 },
            { id: "eid122", tween: [ "style", "${_Star}", "top", '0px', { fromValue: '14px'}], position: 1000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Star}", "top", '14px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid126", tween: [ "style", "${_Star}", "top", '-1px', { fromValue: '14px'}], position: 2000, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Star}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Star}", "left", '-3px', { fromValue: '2px'}], position: 500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Star}", "left", '2px', { fromValue: '-3px'}], position: 1000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_Star}", "left", '-3px', { fromValue: '2px'}], position: 1500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_Star}", "left", '2px', { fromValue: '-3px'}], position: 2000, duration: 0 },
            { id: "eid108", tween: [ "style", "${_monkey1-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_monkey1-1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid112", tween: [ "style", "${_monkey1-1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_monkey1-1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_monkey1-1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid109", tween: [ "style", "${_monkey1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_monkey1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid113", tween: [ "style", "${_monkey1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid115", tween: [ "style", "${_monkey1}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_monkey1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }         ]
      }
   }
},
"MonkeySit": {
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
      id: 'monkey_sit',
      type: 'image',
      rect: ['0px','auto','102px','76px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey3.svg','0px','0px']
   },
   {
      id: 'Mouth2',
      type: 'rect',
      rect: ['33','38','auto','auto','auto','auto']
   },
   {
      id: 'Star2',
      type: 'rect',
      rect: ['2px','5px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Mouth2',
      symbolName: 'Mouth'
   },
   {
      id: 'Star2',
      symbolName: 'Star'
   }   ]
   },
   states: {
      "Base State": {
         "${_Star2}": [
            ["style", "top", '5px'],
            ["style", "left", '2px']
         ],
         "${_monkey_sit}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '102px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Star2}', [0] ], ""], position: 0 }         ]
      }
   }
},
"Monkey_Stand": {
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
      id: 'monkey12',
      type: 'image',
      rect: ['0px','auto','102px','76px','auto','1px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey1.svg','0px','0px']
   },
   {
      id: 'Star3',
      type: 'rect',
      rect: ['2px','-3px','auto','auto','auto','auto']
   },
   {
      id: 'mouth42',
      type: 'image',
      rect: ['37px','auto','33px','9px','auto','33px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth4.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Star3',
      symbolName: 'Star'
   }   ]
   },
   states: {
      "Base State": {
         "${_mouth42}": [
            ["style", "left", '37px'],
            ["style", "bottom", '33px']
         ],
         "${_Star3}": [
            ["style", "top", '-3px'],
            ["style", "left", '2px']
         ],
         "${_monkey12}": [
            ["style", "left", '0px'],
            ["style", "bottom", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '102px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Monkey_visit": {
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
      id: 'monkey4',
      type: 'image',
      rect: ['0px','auto','79px','119px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/monkey4.svg','0px','0px']
   },
   {
      id: 'mouth2',
      type: 'image',
      rect: ['12px','auto','11px','9px','auto','40px'],
      fill: ['rgba(0,0,0,0)','svg_floor7/mouth2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_monkey4}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_mouth2}": [
            ["style", "left", '12px'],
            ["style", "bottom", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '119px'],
            ["style", "width", '79px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-48847544");
