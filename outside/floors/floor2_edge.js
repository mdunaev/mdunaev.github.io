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
            rect:['0px','auto','3000px','2000px','auto','0px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/bg.svg','0px','0px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1296px','auto','61px','89px','auto','118px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/man-fly.svg','0px','0px']
         },
         {
            id:'hero2',
            display:'none',
            type:'image',
            rect:['1296px','auto','61px','85px','auto','120px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/hero2.svg','0px','0px']
         },
         {
            id:'monkey1',
            type:'image',
            rect:['1816px','auto','58px','103px','auto','117px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/monkey1.svg','0px','0px']
         },
         {
            id:'monkey22',
            display:'none',
            type:'image',
            rect:['1816px','auto','58px','103px','auto','117px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/monkey2.svg','0px','0px']
         },
         {
            id:'man2stand',
            type:'image',
            rect:['1005','auto','67px','90px','auto','220px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/man2stand.svg','0px','0px'],
            transform:[]
         },
         {
            id:'man_go',
            display:'none',
            type:'rect',
            rect:['1137','auto','auto','auto','auto','117px']
         },
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['1822px','auto','35px','35px','auto','217px'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'alien2',
            type:'image',
            rect:['1679px','auto','95px','107px','auto','118px'],
            fill:["rgba(0,0,0,0)",'svg_floor2/alien.svg','0px','0px'],
            transform:[[],[],[],['-1']]
         }],
         symbolInstances: [
         {
            id:'man_go',
            symbolName:'man_go'
         }
         ]
      },
   states: {
      "Base State": {
         "${_hero2}": [
            ["style", "display", 'none'],
            ["style", "left", '1296px'],
            ["style", "bottom", '118px']
         ],
         "${_man_go}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "left", '1137px'],
            ["style", "bottom", '117px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_alien2}": [
            ["transform", "scaleX", '-1'],
            ["style", "left", '1679px'],
            ["style", "bottom", '118px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '215px'],
            ["style", "height", '35px'],
            ["style", "left", '1829px'],
            ["style", "width", '35px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '3000px'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_monkey22}": [
            ["style", "display", 'none'],
            ["style", "left", '1816px'],
            ["style", "bottom", '117px']
         ],
         "${_monkey1}": [
            ["style", "left", '1816px'],
            ["style", "display", 'block']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1296px'],
            ["style", "bottom", '788px']
         ],
         "${_man2stand}": [
            ["style", "display", 'block'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '1145px'],
            ["style", "bottom", '117px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5949.4989681261,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1046,
            "part1": 1789,
            "part2": 2438,
            "part3": 3158,
            "part4": 3942,
            "end": 5949
         },
         timeline: [
            { id: "eid23", tween: [ "style", "${_monkey22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_monkey22}", "display", 'block', { fromValue: 'none'}], position: 1090, duration: 0 },
            { id: "eid25", tween: [ "style", "${_monkey22}", "display", 'none', { fromValue: 'block'}], position: 1176, duration: 0 },
            { id: "eid20", tween: [ "style", "${_hero2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_hero2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid1", tween: [ "transform", "${_man2stand}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_hero2}", "bottom", '127px', { fromValue: '118px'}], position: 3219, duration: 29 },
            { id: "eid77", tween: [ "style", "${_hero2}", "bottom", '118px', { fromValue: '127px'}], position: 3248, duration: 31 },
            { id: "eid63", tween: [ "style", "${_man_go}", "left", '743px', { fromValue: '1137px'}], position: 4094, duration: 1721 },
            { id: "eid3", tween: [ "style", "${_man2stand}", "bottom", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_man2stand}", "bottom", '127px', { fromValue: '117px'}], position: 1828, duration: 47, easing: "easeInQuad" },
            { id: "eid47", tween: [ "style", "${_man2stand}", "bottom", '117px', { fromValue: '127px'}], position: 1875, duration: 38, easing: "easeInQuad" },
            { id: "eid24", tween: [ "style", "${_monkey1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_monkey1}", "display", 'none', { fromValue: 'block'}], position: 1090, duration: 0 },
            { id: "eid26", tween: [ "style", "${_monkey1}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_man_go}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_man_go}", "display", 'block', { fromValue: 'none'}], position: 4094, duration: 0 },
            { id: "eid64", tween: [ "style", "${_man_go}", "display", 'none', { fromValue: 'block'}], position: 5815, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Ellipse}", "bottom", '319px', { fromValue: '215px'}], position: 1176, duration: 360, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_Ellipse}", "bottom", '176px', { fromValue: '319px'}], position: 1536, duration: 214, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_Ellipse}", "bottom", '332px', { fromValue: '176px'}], position: 1828, duration: 289, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_Ellipse}", "bottom", '189px', { fromValue: '332px'}], position: 2117, duration: 271, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_Ellipse}", "bottom", '351px', { fromValue: '189px'}], position: 2500, duration: 323, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_Ellipse}", "bottom", '174px', { fromValue: '351px'}], position: 2823, duration: 298, easing: "easeInQuad" },
            { id: "eid49", tween: [ "style", "${_Ellipse}", "bottom", '398px', { fromValue: '174px'}], position: 3205, duration: 216, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_Ellipse}", "bottom", '214px', { fromValue: '398px'}], position: 3421, duration: 473, easing: "easeInQuad" },
            { id: "eid66", tween: [ "style", "${_Ellipse}", "bottom", '418px', { fromValue: '214px'}], position: 3970, duration: 333, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_Ellipse}", "bottom", '119px', { fromValue: '418px'}], position: 4303, duration: 309, easing: "easeInQuad" },
            { id: "eid69", tween: [ "style", "${_Ellipse}", "bottom", '149px', { fromValue: '119px'}], position: 4612, duration: 159, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "style", "${_Ellipse}", "bottom", '119px', { fromValue: '149px'}], position: 4771, duration: 158, easing: "easeInQuad" },
            { id: "eid40", tween: [ "style", "${_alien2}", "bottom", '124px', { fromValue: '118px'}], position: 2500, duration: 53, easing: "easeInQuad" },
            { id: "eid45", tween: [ "style", "${_alien2}", "bottom", '118px', { fromValue: '119px'}], position: 2612, duration: 0, easing: "easeInQuad" },
            { id: "eid27", tween: [ "style", "${_Ellipse}", "left", '1194px', { fromValue: '1829px'}], position: 1176, duration: 574 },
            { id: "eid30", tween: [ "style", "${_Ellipse}", "left", '1500px', { fromValue: '1194px'}], position: 1828, duration: 289 },
            { id: "eid32", tween: [ "style", "${_Ellipse}", "left", '1654px', { fromValue: '1500px'}], position: 2117, duration: 271 },
            { id: "eid34", tween: [ "style", "${_Ellipse}", "left", '1343px', { fromValue: '1654px'}], position: 2500, duration: 621 },
            { id: "eid48", tween: [ "style", "${_Ellipse}", "left", '1829px', { fromValue: '1343px'}], position: 3205, duration: 689 },
            { id: "eid65", tween: [ "style", "${_Ellipse}", "left", '1124px', { fromValue: '1829px'}], position: 3970, duration: 642 },
            { id: "eid68", tween: [ "style", "${_Ellipse}", "left", '1054px', { fromValue: '1124px'}], position: 4612, duration: 318 },
            { id: "eid71", tween: [ "style", "${_Ellipse}", "left", '1042px', { fromValue: '1054px'}], position: 4930, duration: 175, easing: "easeInQuad" },
            { id: "eid2", tween: [ "style", "${_man2stand}", "left", '1145px', { fromValue: '1145px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_man2stand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_man2stand}", "display", 'none', { fromValue: 'block'}], position: 4094, duration: 0 },
            { id: "eid5", tween: [ "style", "${_man-fly}", "bottom", '118px', { fromValue: '788px'}], position: 0, duration: 1000 }         ]
      }
   }
},
"BUG": {
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
      id: 'alien0',
      type: 'image',
      rect: ['6px','auto','95px','107px','auto','33px'],
      fill: ['rgba(0,0,0,0)','svg_floor2/alien0.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['-1']],
      type: 'image',
      id: 'alien',
      display: 'none',
      rect: ['0px','auto','95px','107px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor2/alien.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_alien}": [
            ["style", "display", 'none'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_alien0}": [
            ["style", "display", 'block'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '107px'],
            ["style", "width", '95px']
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
            { id: "eid11", tween: [ "style", "${_alien0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_alien0}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_alien0}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_alien}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_alien}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_alien}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }         ]
      }
   }
},
"man_go": {
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
      id: 'man2',
      type: 'image',
      rect: ['0px','auto','67px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor2/man.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','67px','90px','auto','0px'],
      id: 'man22',
      fill: ['rgba(0,0,0,0)','svg_floor2/man2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man2}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man22}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '67px']
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
            { id: "eid58", tween: [ "style", "${_man2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_man2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid62", tween: [ "style", "${_man2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_man22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_man22}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid61", tween: [ "style", "${_man22}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-21386820");
