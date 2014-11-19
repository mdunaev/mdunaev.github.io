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
            fill:["rgba(0,0,0,0)",'footer_svg/bg.svg','0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['1372px','auto','41px','39px','auto','93px'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['1444px','auto','41px','39px','auto','93px'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy2',
            type:'rect',
            rect:['1515px','auto','41px','39px','auto','94px'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy3',
            type:'rect',
            rect:['1588px','auto','41px','39px','auto','91px'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '93px'],
            ["style", "opacity", '0'],
            ["style", "left", '1372px'],
            ["style", "cursor", 'pointer']
         ],
         "${_monkey2}": [
            ["style", "left", '']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '91px'],
            ["style", "opacity", '0'],
            ["style", "left", '1588px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bg}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '93px'],
            ["style", "opacity", '0'],
            ["style", "left", '1444px'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '94px'],
            ["style", "opacity", '0'],
            ["style", "left", '1515px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 399,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 250
         },
         timeline: [
         ]
      }
   }
},
"red": {
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
      id: 'red',
      rect: ['0px','auto','28px','14px','auto','0px'],
      transform: [],
      fill: ['rgba(0,0,0,0)','header_svg/red.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_red}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '-1px'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '14px'],
            ["style", "width", '28px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         labels: {
            "start": 71
         },
         timeline: [
            { id: "eid10", tween: [ "style", "${_red}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_red}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid11", tween: [ "style", "${_red}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_red}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 71 },
            { id: "eid6", tween: [ "transform", "${_red}", "scaleX", '1', { fromValue: '0'}], position: 71, duration: 2929 },
            { id: "eid105", tween: [ "style", "${_red}", "bottom", '-8px', { fromValue: '-1px'}], position: 0, duration: 71 },
            { id: "eid104", tween: [ "style", "${_red}", "bottom", '0px', { fromValue: '-8px'}], position: 71, duration: 2929 },
            { id: "eid7", tween: [ "transform", "${_red}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 71 },
            { id: "eid8", tween: [ "transform", "${_red}", "scaleY", '1', { fromValue: '0'}], position: 71, duration: 2929 }         ]
      }
   }
},
"orange": {
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
      id: 'orange',
      rect: ['0px','0px','28px','14px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','header_svg/orange.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_orange}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '14px'],
            ["style", "width", '28px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9500,
         autoPlay: true,
         labels: {
            "start": 250
         },
         timeline: [
            { id: "eid47", tween: [ "transform", "${_orange}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid48", tween: [ "transform", "${_orange}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 3750 },
            { id: "eid50", tween: [ "transform", "${_orange}", "scaleY", '1', { fromValue: '1'}], position: 9500, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_orange}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid46", tween: [ "transform", "${_orange}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 3750 },
            { id: "eid49", tween: [ "transform", "${_orange}", "scaleX", '1', { fromValue: '1'}], position: 9500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_orange}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid101", tween: [ "style", "${_orange}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid100", tween: [ "style", "${_orange}", "top", '0px', { fromValue: '8px'}], position: 250, duration: 3750 }         ]
      }
   }
},
"yellow": {
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
      id: 'yellow_bubble',
      rect: ['0px','auto','28px','14px','auto','0px'],
      transform: [[0,0],[],[],[],['50%','59%']],
      fill: ['rgba(0,0,0,0)','header_svg/yellow_bubble.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '14px'],
            ["style", "width", '28px']
         ],
         "${_yellow_bubble}": [
            ["style", "-webkit-transform-origin", [50,59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '-6px'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         labels: {
            "start": 250
         },
         timeline: [
            { id: "eid69", tween: [ "transform", "${_yellow_bubble}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid70", tween: [ "transform", "${_yellow_bubble}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 4750 },
            { id: "eid87", tween: [ "style", "${_yellow_bubble}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_yellow_bubble}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_yellow_bubble}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid67", tween: [ "transform", "${_yellow_bubble}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
            { id: "eid68", tween: [ "transform", "${_yellow_bubble}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 4750 },
            { id: "eid107", tween: [ "style", "${_yellow_bubble}", "bottom", '0px', { fromValue: '-6px'}], position: 250, duration: 4750 }         ]
      }
   }
},
"monkey": {
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
      id: 'monkey',
      type: 'image',
      rect: ['0px','0px','104px','91px','auto','auto'],
      fill: ['rgba(0,0,0,0)','header_svg/monkey.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','104px','91px','auto','auto'],
      id: 'monkey22',
      fill: ['rgba(0,0,0,0)','header_svg/monkey2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_monkey22}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '91px'],
            ["style", "width", '104px']
         ],
         "${_monkey}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid92", tween: [ "style", "${_monkey}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "style", "${_monkey}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_monkey}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_monkey}", "display", 'block', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_monkey22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_monkey22}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid95", tween: [ "style", "${_monkey22}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_monkey22}", "display", 'none', { fromValue: 'none'}], position: 10000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-23395930");
