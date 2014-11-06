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
            rect:['1450px','auto','100px','658px','auto','0px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/bg.svg','0px','0px'],
            transform:[[],[],[],['30']]
         },
         {
            id:'Furniture',
            type:'rect',
            rect:['1019','auto','auto','auto','auto','105px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','1013px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         },
         {
            id:'man_stand',
            display:'none',
            type:'image',
            rect:['1473px','auto','53px','90px','auto','118px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man_stand.svg','0px','0px']
         },
         {
            id:'ManWalk',
            display:'none',
            type:'rect',
            rect:['1473','auto','auto','auto','auto','119px']
         }],
         symbolInstances: [
         {
            id:'ManWalk',
            symbolName:'ManWalk'
         },
         {
            id:'Furniture',
            symbolName:'Furniture'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bg}": [
            ["transform", "scaleX", '30'],
            ["style", "top", 'auto'],
            ["style", "left", '1450px'],
            ["style", "bottom", '0px']
         ],
         "${_ManWalk}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '119px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,230,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
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
         "${_man_stand}": [
            ["style", "display", 'none'],
            ["style", "left", '1473px'],
            ["style", "bottom", '118px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         labels: {
            "Label 1": 512,
            "Label 2": 2521,
            "Label 3": 4029
         },
         timeline: [
            { id: "eid4", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 523, duration: 0 },
            { id: "eid43", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid45", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 2547, duration: 0 },
            { id: "eid57", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_ManWalk}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0, easing: "swing" },
            { id: "eid62", tween: [ "style", "${_ManWalk}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "swing" },
            { id: "eid42", tween: [ "style", "${_Furniture}", "left", '469px', { fromValue: '1019px'}], position: 512, duration: 1988, easing: "swing" },
            { id: "eid56", tween: [ "style", "${_Furniture}", "left", '129px', { fromValue: '469px'}], position: 2547, duration: 1453, easing: "swing" },
            { id: "eid65", tween: [ "style", "${_Furniture}", "left", '-321px', { fromValue: '129px'}], position: 4064, duration: 1936, easing: "swing" },
            { id: "eid7", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid6", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 523, duration: 0 },
            { id: "eid44", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 2547, duration: 0 },
            { id: "eid58", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 4064, duration: 0, easing: "swing" },
            { id: "eid63", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "swing" },
            { id: "eid2", tween: [ "style", "${_man-fly}", "bottom", '120px', { fromValue: '1013px'}], position: 0, duration: 500 },
            { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ManWalk}', [0] ], ""], position: 523 }         ]
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
      rect: ['793','2309','auto','auto','auto','auto']
   },
   {
      id: 'Man2',
      type: 'rect',
      rect: ['1132','2308','auto','auto','auto','auto']
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
      rect: ['1462','2308','auto','auto','auto','auto']
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
         "${_monkey1}": [
            ["style", "left", '1889px'],
            ["style", "bottom", '14px']
         ],
         "${_Star}": [
            ["style", "top", '2315px'],
            ["style", "left", '1891px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2407px'],
            ["style", "width", '2332px']
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
      rect: ['0px','auto','134px','84px','auto','0px'],
      id: 'man1-2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor7/man1-2.svg','0px','0px']
   },
   {
      rect: ['0px','auto','134px','84px','auto','0px'],
      id: 'man1-32',
      type: 'image',
      display: 'none',
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
         "${_man1-1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man1-2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '134px']
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
