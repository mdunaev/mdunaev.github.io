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
            fill:["rgba(0,0,0,0)",'svg_floor3/bg.svg','0px','0px']
         },
         {
            id:'Rectangle1',
            display:'none',
            type:'rect',
            rect:['1802px','auto','83px','249px','auto','681px'],
            clip:['rect(0px 83pxpx 249pxpx 0px)'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle2',
            display:'none',
            type:'rect',
            rect:['1292px','auto','510px','57px','auto','681px'],
            clip:['rect(0px 510pxpx 57pxpx 0px)'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle4',
            display:'none',
            type:'rect',
            rect:['1299px','auto','58px','229px','auto','424px'],
            clip:['rect(0px 58pxpx 229pxpx 0px)'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle5',
            display:'none',
            type:'rect',
            rect:['1385px','auto','151px','57px','auto','429px'],
            clip:['rect(0px 151pxpx 57pxpx 0px)'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle6',
            display:'none',
            type:'rect',
            rect:['1469px','auto','69px','267px','auto','146px'],
            clip:['rect(0px 69pxpx 267pxpx 0px)'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'man',
            display:'none',
            type:'rect',
            rect:['1811','auto','auto','auto','auto','159px'],
            clip:['rect(0px 69pxpx 90pxpx 0px)']
         },
         {
            id:'hero-0',
            display:'none',
            type:'image',
            rect:['1811px','auto','69px','90px','auto','923px'],
            clip:['rect(0px 69pxpx 90pxpx 0px)'],
            fill:["rgba(0,0,0,0)",'svg_floor3/hero-0.svg','0px','0px']
         },
         {
            id:'eat1',
            display:'none',
            type:'image',
            rect:['1450px','auto','124px','109px','auto','132px'],
            fill:["rgba(0,0,0,0)",'svg_floor3/eat1.svg','0px','0px']
         },
         {
            id:'eat2',
            display:'none',
            type:'image',
            rect:['1449px','auto','91px','111px','auto','130px'],
            fill:["rgba(0,0,0,0)",'svg_floor3/eat2.svg','0px','0px']
         },
         {
            id:'eat3',
            display:'none',
            type:'image',
            rect:['1449px','auto','91px','115px','auto','132px'],
            fill:["rgba(0,0,0,0)",'svg_floor3/eat3.svg','0px','0px']
         },
         {
            id:'eat4',
            display:'none',
            type:'image',
            rect:['1450px','auto','95px','97px','auto','130px'],
            fill:["rgba(0,0,0,0)",'svg_floor3/eat4.svg','0px','0px']
         },
         {
            id:'Alien',
            type:'rect',
            rect:['1105','auto','auto','auto','auto','260px']
         },
         {
            id:'alien02',
            display:'none',
            type:'image',
            rect:['1449px','auto','95px','107px','auto','130px'],
            fill:["rgba(0,0,0,0)",'svg_floor3/alien0.svg','0px','0px']
         },
         {
            id:'Text',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"0<br>",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"1<br>",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy3',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"2",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy2',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"3",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy7',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"4",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Alien2',
            type:'rect',
            rect:['2422','auto','auto','auto','auto','922px']
         },
         {
            id:'Alien3',
            type:'rect',
            rect:['524','auto','auto','auto','auto','131px']
         },
         {
            id:'TextCopy18',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"5",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy6',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"6",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy5',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"7",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy4',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"8",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy15',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"9",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy14',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"10",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy13',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"11",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy12',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"12",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy11',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"13",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy10',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"14",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy9',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"15",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy8',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"16",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy17',
            display:'none',
            type:'text',
            tag:'p',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"17",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'TextCopy16',
            display:'none',
            type:'text',
            rect:['1519px','auto','auto','auto','auto','792px'],
            text:"1<br>",
            userClass:"scores",
            font:['Courier, Courier New, monospace',91,"rgba(255,255,255,1.00)","normal","none",""]
         }],
         symbolInstances: [
         {
            id:'Alien3',
            symbolName:'Alien'
         },
         {
            id:'Alien2',
            symbolName:'Alien'
         },
         {
            id:'man',
            symbolName:'man'
         },
         {
            id:'Alien',
            symbolName:'Alien'
         }
         ]
      },
   states: {
      "Base State": {
         "${_TextCopy14}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_Rectangle2}": [
            ["style", "display", 'none'],
            ["style", "clip", [0,510,57,510], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_eat2}": [
            ["style", "display", 'none'],
            ["style", "left", '1449px'],
            ["style", "bottom", '130px']
         ],
         "${_eat3}": [
            ["style", "display", 'none'],
            ["style", "left", '1449px'],
            ["style", "bottom", '132px']
         ],
         "${_Alien2}": [
            ["transform", "scaleX", '-1'],
            ["style", "top", 'auto'],
            ["style", "left", '2393px'],
            ["style", "bottom", '136px']
         ],
         "${_Alien}": [
            ["style", "top", 'auto'],
            ["style", "display", 'block'],
            ["style", "left", '666px'],
            ["style", "bottom", '925px']
         ],
         "${_Rectangle4}": [
            ["style", "display", 'none'],
            ["style", "clip", [0,58,-31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_TextCopy16}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy4}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy15}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy5}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy12}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy17}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy8}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy13}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_Rectangle1}": [
            ["style", "display", 'none'],
            ["style", "clip", [0,83,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_man}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '923px'],
            ["style", "display", 'none'],
            ["style", "left", '1811px'],
            ["style", "clip", [-1,69,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '-1']
         ],
         "${_Alien3}": [
            ["transform", "scaleX", '1'],
            ["style", "top", 'auto'],
            ["style", "left", '500px'],
            ["style", "bottom", '136px']
         ],
         "${_TextCopy2}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_eat1}": [
            ["style", "display", 'none'],
            ["style", "left", '1450px'],
            ["style", "bottom", '132px']
         ],
         "${_TextCopy3}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_alien02}": [
            ["style", "display", 'none'],
            ["style", "left", '1449px'],
            ["style", "bottom", '130px']
         ],
         "${_TextCopy7}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_eat4}": [
            ["style", "display", 'none'],
            ["style", "left", '1450px'],
            ["style", "bottom", '130px']
         ],
         "${_Rectangle5}": [
            ["style", "display", 'none'],
            ["style", "clip", [0,-64,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_TextCopy11}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_Rectangle6}": [
            ["style", "display", 'none'],
            ["style", "clip", [0,69,-38,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_bg}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_TextCopy9}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_Text}": [
            ["style", "display", 'block'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy18}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ],
         "${_hero-0}": [
            ["style", "bottom", '919px'],
            ["style", "display", 'none'],
            ["style", "clip", [0,69,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '1811px'],
            ["transform", "scaleX", '-1']
         ],
         "${_TextCopy6}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ],
         "${_TextCopy10}": [
            ["style", "display", 'none'],
            ["style", "bottom", '792px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '1519px'],
            ["style", "font-size", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9850,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1800,
            "part1": 2750,
            "part2": 4000,
            "part3": 5000,
            "part4": 6000,
            "end": 9850
         },
         timeline: [
            { id: "eid64", tween: [ "style", "${_Alien}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Alien}", "display", 'none', { fromValue: 'block'}], position: 8042, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid150", tween: [ "style", "${_TextCopy14}", "left", '1519px', { fromValue: '1519px'}], position: 4338, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Rectangle6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle6}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid210", tween: [ "transform", "${_man}", "scaleX", '-1', { fromValue: '-1'}], position: 1800, duration: 0 },
            { id: "eid211", tween: [ "transform", "${_man}", "scaleX", '1', { fromValue: '-1'}], position: 4000, duration: 0 },
            { id: "eid247", tween: [ "style", "${_eat1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid246", tween: [ "style", "${_eat1}", "display", 'block', { fromValue: 'none'}], position: 8042, duration: 0 },
            { id: "eid251", tween: [ "style", "${_eat1}", "display", 'none', { fromValue: 'block'}], position: 8364, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid119", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'none'}], position: 3597, duration: 0 },
            { id: "eid139", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'block'}], position: 3808, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle2}", "clip", [0,510,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,510,57,510]}], position: 2750, duration: 1346 },
            { id: "eid218", tween: [ "transform", "${_bg}", "scaleX", '1', { fromValue: '1'}], position: 1800, duration: 0 },
            { id: "eid195", tween: [ "style", "${_Alien2}", "bottom", '136px', { fromValue: '136px'}], position: 1800, duration: 0 },
            { id: "eid196", tween: [ "style", "${_Alien2}", "bottom", '415px', { fromValue: '136px'}], position: 2750, duration: 1250 },
            { id: "eid197", tween: [ "style", "${_Alien2}", "bottom", '665px', { fromValue: '415px'}], position: 5000, duration: 1000 },
            { id: "eid198", tween: [ "style", "${_Alien2}", "bottom", '922px', { fromValue: '665px'}], position: 7000, duration: 1500 },
            { id: "eid311", tween: [ "style", "${_hero-0}", "clip", [65,69,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,69,90,0]}], position: 7750, duration: 250 },
            { id: "eid223", tween: [ "style", "${_hero-0}", "bottom", '919px', { fromValue: '919px'}], position: 1800, duration: 0 },
            { id: "eid229", tween: [ "style", "${_hero-0}", "bottom", '679px', { fromValue: '919px'}], position: 2750, duration: 0 },
            { id: "eid231", tween: [ "style", "${_hero-0}", "bottom", '674px', { fromValue: '679px'}], position: 4000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_hero-0}", "bottom", '419px', { fromValue: '674px'}], position: 5000, duration: 0 },
            { id: "eid244", tween: [ "style", "${_hero-0}", "bottom", '135px', { fromValue: '419px'}], position: 7000, duration: 0 },
            { id: "eid171", tween: [ "transform", "${_Alien2}", "scaleX", '-1', { fromValue: '-1'}], position: 1800, duration: 0 },
            { id: "eid94", tween: [ "style", "${_Rectangle1}", "clip", [0,83,249,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,83,0,0]}], position: 1800, duration: 897 },
            { id: "eid100", tween: [ "style", "${_Rectangle4}", "clip", [0,58,229,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,58,-31,0]}], position: 4000, duration: 1108 },
            { id: "eid220", tween: [ "style", "${_bg}", "bottom", '0px', { fromValue: '0px'}], position: 1800, duration: 0 },
            { id: "eid27", tween: [ "style", "${_man}", "left", '1292px', { fromValue: '1811px'}], position: 2750, duration: 1250 },
            { id: "eid29", tween: [ "style", "${_man}", "left", '1462px', { fromValue: '1292px'}], position: 5000, duration: 1000 },
            { id: "eid106", tween: [ "style", "${_Rectangle6}", "clip", [0,69,267,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,69,-38,0]}], position: 6000, duration: 1000 },
            { id: "eid108", tween: [ "style", "${_TextCopy16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_man}", "clip", [56,69,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-1,69,90,0]}], position: 8042, duration: 458 },
            { id: "eid113", tween: [ "style", "${_TextCopy11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_TextCopy11}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid155", tween: [ "style", "${_TextCopy11}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid120", tween: [ "style", "${_TextCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_TextCopy6}", "display", 'none', { fromValue: 'none'}], position: 3188, duration: 0 },
            { id: "eid136", tween: [ "style", "${_TextCopy6}", "display", 'block', { fromValue: 'none'}], position: 3419, duration: 0 },
            { id: "eid137", tween: [ "style", "${_TextCopy6}", "display", 'none', { fromValue: 'block'}], position: 3597, duration: 0 },
            { id: "eid107", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2063, duration: 0 },
            { id: "eid7", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid205", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 50, duration: 0 },
            { id: "eid8", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 104, duration: 0 },
            { id: "eid9", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 203, duration: 0 },
            { id: "eid10", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 305, duration: 0 },
            { id: "eid11", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 403, duration: 0 },
            { id: "eid12", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 606, duration: 0 },
            { id: "eid14", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 707, duration: 0 },
            { id: "eid15", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 810, duration: 0 },
            { id: "eid16", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 909, duration: 0 },
            { id: "eid17", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 1103, duration: 0 },
            { id: "eid19", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 1207, duration: 0 },
            { id: "eid20", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 1304, duration: 0 },
            { id: "eid21", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 1404, duration: 0 },
            { id: "eid22", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 1602, duration: 0 },
            { id: "eid24", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 1700, duration: 0 },
            { id: "eid25", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 1811, duration: 0 },
            { id: "eid217", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid225", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 2759, duration: 0 },
            { id: "eid226", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid233", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid235", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid240", tween: [ "style", "${_man}", "display", 'block', { fromValue: 'none'}], position: 5034, duration: 0 },
            { id: "eid242", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Rectangle1}", "display", 'block', { fromValue: 'none'}], position: 1800, duration: 0 },
            { id: "eid215", tween: [ "transform", "${_hero-0}", "scaleX", '-1', { fromValue: '-1'}], position: 1800, duration: 0 },
            { id: "eid238", tween: [ "transform", "${_hero-0}", "scaleX", '1', { fromValue: '-1'}], position: 5000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 2063, duration: 0 },
            { id: "eid127", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 2402, duration: 0 },
            { id: "eid249", tween: [ "style", "${_eat3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_eat3}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
            { id: "eid256", tween: [ "style", "${_eat3}", "display", 'none', { fromValue: 'block'}], position: 9113, duration: 0 },
            { id: "eid117", tween: [ "style", "${_TextCopy15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_TextCopy15}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid143", tween: [ "style", "${_TextCopy15}", "display", 'none', { fromValue: 'block'}], position: 4338, duration: 0 },
            { id: "eid173", tween: [ "style", "${_Alien3}", "left", '850px', { fromValue: '500px'}], position: 1800, duration: 950 },
            { id: "eid178", tween: [ "style", "${_Alien3}", "left", '674px', { fromValue: '850px'}], position: 4000, duration: 1000 },
            { id: "eid186", tween: [ "style", "${_Alien3}", "left", '856px', { fromValue: '674px'}], position: 5000, duration: 1000 },
            { id: "eid192", tween: [ "style", "${_Alien3}", "left", '1192px', { fromValue: '856px'}], position: 7000, duration: 1500 },
            { id: "eid213", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid212", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'none'}], position: 1791, duration: 0 },
            { id: "eid214", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 1811, duration: 0 },
            { id: "eid216", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid224", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 2759, duration: 0 },
            { id: "eid227", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid234", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid239", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 5034, duration: 0 },
            { id: "eid241", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid245", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 8042, duration: 0 },
            { id: "eid116", tween: [ "style", "${_TextCopy14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_TextCopy14}", "display", 'block', { fromValue: 'none'}], position: 4338, duration: 0 },
            { id: "eid148", tween: [ "style", "${_TextCopy14}", "display", 'none', { fromValue: 'block'}], position: 4674, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Alien}", "left", '1113px', { fromValue: '666px'}], position: 1800, duration: 950 },
            { id: "eid46", tween: [ "style", "${_Alien}", "left", '1283px', { fromValue: '1113px'}], position: 4000, duration: 1000 },
            { id: "eid49", tween: [ "style", "${_Alien}", "left", '1351px', { fromValue: '1283px'}], position: 6000, duration: 500 },
            { id: "eid50", tween: [ "style", "${_Alien}", "left", '1451px', { fromValue: '1351px'}], position: 6500, duration: 500 },
            { id: "eid122", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0 },
            { id: "eid131", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid123", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 2402, duration: 0 },
            { id: "eid129", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'block'}], position: 2663, duration: 0 },
            { id: "eid222", tween: [ "style", "${_hero-0}", "left", '1811px', { fromValue: '1811px'}], position: 1800, duration: 0 },
            { id: "eid228", tween: [ "style", "${_hero-0}", "left", '1811px', { fromValue: '1811px'}], position: 2750, duration: 0 },
            { id: "eid230", tween: [ "style", "${_hero-0}", "left", '1289px', { fromValue: '1811px'}], position: 4000, duration: 0 },
            { id: "eid236", tween: [ "style", "${_hero-0}", "left", '1289px', { fromValue: '1289px'}], position: 5000, duration: 0 },
            { id: "eid243", tween: [ "style", "${_hero-0}", "left", '1462px', { fromValue: '1289px'}], position: 7000, duration: 0 },
            { id: "eid109", tween: [ "style", "${_TextCopy17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "style", "${_TextCopy17}", "display", 'block', { fromValue: 'none'}], position: 6949, duration: 0 },
            { id: "eid206", tween: [ "style", "${_TextCopy18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_TextCopy18}", "display", 'block', { fromValue: 'none'}], position: 3188, duration: 0 },
            { id: "eid166", tween: [ "style", "${_TextCopy18}", "display", 'none', { fromValue: 'block'}], position: 3419, duration: 0 },
            { id: "eid172", tween: [ "style", "${_Alien2}", "left", '2053px', { fromValue: '2393px'}], position: 1800, duration: 950 },
            { id: "eid181", tween: [ "style", "${_Alien2}", "left", '1639px', { fromValue: '2053px'}], position: 4000, duration: 1000 },
            { id: "eid189", tween: [ "style", "${_Alien2}", "left", '1109px', { fromValue: '1639px'}], position: 6000, duration: 1000 },
            { id: "eid115", tween: [ "style", "${_TextCopy13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_TextCopy13}", "display", 'block', { fromValue: 'none'}], position: 4674, duration: 0 },
            { id: "eid151", tween: [ "style", "${_TextCopy13}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_eat2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid252", tween: [ "style", "${_eat2}", "display", 'block', { fromValue: 'none'}], position: 8364, duration: 0 },
            { id: "eid254", tween: [ "style", "${_eat2}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "eid111", tween: [ "style", "${_TextCopy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "style", "${_TextCopy9}", "display", 'block', { fromValue: 'none'}], position: 6428, duration: 0 },
            { id: "eid159", tween: [ "style", "${_TextCopy9}", "display", 'none', { fromValue: 'block'}], position: 6712, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle5}", "clip", [0,151,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-64,57,0]}], position: 5000, duration: 1198 },
            { id: "eid118", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 3808, duration: 0 },
            { id: "eid141", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid177", tween: [ "transform", "${_Alien3}", "scaleX", '1', { fromValue: '1'}], position: 1800, duration: 0 },
            { id: "eid176", tween: [ "transform", "${_Alien3}", "scaleX", '-1', { fromValue: '1'}], position: 4000, duration: 0 },
            { id: "eid180", tween: [ "transform", "${_Alien3}", "scaleX", '1', { fromValue: '-1'}], position: 5000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_TextCopy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_TextCopy10}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid157", tween: [ "style", "${_TextCopy10}", "display", 'none', { fromValue: 'block'}], position: 6428, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Alien}", "bottom", '930px', { fromValue: '925px'}], position: 1800, duration: 950 },
            { id: "eid53", tween: [ "style", "${_Alien}", "bottom", '665px', { fromValue: '930px'}], position: 2750, duration: 1250 },
            { id: "eid54", tween: [ "style", "${_Alien}", "bottom", '528px', { fromValue: '665px'}], position: 5000, duration: 500 },
            { id: "eid55", tween: [ "style", "${_Alien}", "bottom", '413px', { fromValue: '528px'}], position: 5500, duration: 500 },
            { id: "eid56", tween: [ "style", "${_Alien}", "bottom", '140px', { fromValue: '413px'}], position: 7000, duration: 1042 },
            { id: "eid199", tween: [ "style", "${_Alien3}", "bottom", '136px', { fromValue: '136px'}], position: 1800, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Alien3}", "bottom", '416px', { fromValue: '136px'}], position: 2750, duration: 1250 },
            { id: "eid201", tween: [ "style", "${_Alien3}", "bottom", '415px', { fromValue: '416px'}], position: 4000, duration: 1000 },
            { id: "eid202", tween: [ "style", "${_Alien3}", "bottom", '413px', { fromValue: '415px'}], position: 5000, duration: 1000 },
            { id: "eid203", tween: [ "style", "${_Alien3}", "bottom", '135px', { fromValue: '413px'}], position: 6000, duration: 1000 },
            { id: "eid204", tween: [ "style", "${_Alien3}", "bottom", '131px', { fromValue: '135px'}], position: 7000, duration: 1500 },
            { id: "eid71", tween: [ "style", "${_alien02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_alien02}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
            { id: "eid110", tween: [ "style", "${_TextCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_TextCopy8}", "display", 'block', { fromValue: 'none'}], position: 6712, duration: 0 },
            { id: "eid161", tween: [ "style", "${_TextCopy8}", "display", 'none', { fromValue: 'block'}], position: 6949, duration: 0 },
            { id: "eid60", tween: [ "style", "${_man}", "bottom", '675px', { fromValue: '923px'}], position: 1800, duration: 950 },
            { id: "eid61", tween: [ "style", "${_man}", "bottom", '419px', { fromValue: '675px'}], position: 4000, duration: 1000 },
            { id: "eid62", tween: [ "style", "${_man}", "bottom", '159px', { fromValue: '419px'}], position: 6000, duration: 1000 },
            { id: "eid221", tween: [ "style", "${_bg}", "left", '0px', { fromValue: '0px'}], position: 1800, duration: 0 },
            { id: "eid121", tween: [ "style", "${_TextCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_TextCopy7}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid133", tween: [ "style", "${_TextCopy7}", "display", 'none', { fromValue: 'block'}], position: 3188, duration: 0 },
            { id: "eid219", tween: [ "style", "${_bg}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1800, duration: 0 },
            { id: "eid312", tween: [ "style", "${_bg}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1800, duration: 0 },
            { id: "eid313", tween: [ "style", "${_bg}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1800, duration: 0 },
            { id: "eid314", tween: [ "style", "${_bg}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1800, duration: 0 },
            { id: "eid315", tween: [ "style", "${_bg}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1800, duration: 0 },
            { id: "eid114", tween: [ "style", "${_TextCopy12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_TextCopy12}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid153", tween: [ "style", "${_TextCopy12}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid248", tween: [ "style", "${_eat4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_eat4}", "display", 'block', { fromValue: 'none'}], position: 9113, duration: 0 },
            { id: "eid258", tween: [ "style", "${_eat4}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 }         ]
      }
   }
},
"man": {
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
      id: 'hero-0',
      type: 'image',
      rect: ['0px','auto','69px','90px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor3/hero-0.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','69px','87px','auto','3px'],
      id: 'man_walk1',
      fill: ['rgba(0,0,0,0)','svg_floor0/man_walk1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man_walk1}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '3px']
         ],
         "${_hero-0}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '69px']
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
            { id: "eid1", tween: [ "style", "${_hero-0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid6", tween: [ "style", "${_hero-0}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid208", tween: [ "style", "${_man_walk1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid207", tween: [ "style", "${_man_walk1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid209", tween: [ "style", "${_man_walk1}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Alien": {
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
      id: 'alien',
      type: 'image',
      rect: ['0px','auto','95px','107px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor3/alien.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','95px','107px','auto','0px'],
      id: 'alien0',
      fill: ['rgba(0,0,0,0)','svg_floor3/alien0.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_alien0}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_alien}": [
            ["style", "display", 'block'],
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
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "style", "${_alien0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_alien0}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_alien0}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_alien}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_alien}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid39", tween: [ "style", "${_alien}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-19051089");
