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
            rect:['0px','auto','3000px','1500px','auto','-28px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/bg.svg','0px','0px']
         },
         {
            id:'bg-top',
            type:'image',
            rect:['0px','0px','3016px','53px','auto','auto'],
            fill:["rgba(0,0,0,0)",'svg_floor4/bg-top.svg','0px','0px']
         },
         {
            id:'line',
            type:'image',
            rect:['1214px','auto','573px','19px','auto','74px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/line.svg','0px','0px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','689px'],
            fill:["rgba(0,0,0,0)",'svg_floor7/man-fly.svg','0px','0px']
         },
         {
            id:'hero',
            display:'none',
            type:'image',
            rect:['1475px','auto','69px','90px','auto','93px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/hero.svg','0px','0px']
         },
         {
            id:'moneys',
            display:'none',
            type:'image',
            rect:['1695px','auto','36px','54px','auto','656px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'palms',
            display:'none',
            type:'image',
            rect:['625px','auto','317px','344px','auto','659px'],
            clip:['rect(0px 317px 311px 0px)'],
            fill:["rgba(0,0,0,0)",'svg_floor4/palms.svg','0px','0px']
         },
         {
            id:'man-right_and_cooler',
            display:'none',
            type:'image',
            rect:['1894px','auto','207px','114px','auto','471px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/man-right_and_cooler.svg','0px','0px']
         },
         {
            id:'moneys2',
            display:'none',
            type:'image',
            rect:['1232px','auto','36px','54px','auto','483px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'moneys2Copy',
            display:'none',
            type:'image',
            rect:['1268px','auto','36px','54px','auto','573px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'moneys2Copy3',
            display:'none',
            type:'image',
            rect:['1304px','auto','36px','54px','auto','483px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'moneys2Copy2',
            display:'none',
            type:'image',
            rect:['1340px','auto','36px','54px','auto','573px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'moneys2Copy5',
            display:'none',
            type:'image',
            rect:['1376px','auto','36px','54px','auto','483px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'moneys2Copy4',
            display:'none',
            type:'image',
            rect:['1412px','auto','36px','54px','auto','573px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/moneys.svg','0px','0px']
         },
         {
            id:'car',
            display:'none',
            type:'image',
            rect:['827px','auto','252px','97px','auto','92px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/car.svg','0px','0px']
         },
         {
            id:'girl',
            display:'none',
            type:'image',
            rect:['784px','auto','56px','89px','auto','91px'],
            fill:["rgba(0,0,0,0)",'svg_floor4/girl.svg','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_moneys2Copy2}": [
            ["style", "display", 'none'],
            ["style", "bottom", '573px'],
            ["style", "left", '1340px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_girl}": [
            ["style", "display", 'none'],
            ["style", "left", '784px'],
            ["style", "bottom", '651px']
         ],
         "${_line}": [
            ["style", "-webkit-transform-origin", [51,108], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,108],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,108],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,108],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,108],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '74px'],
            ["style", "left", '1214px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_moneys2Copy}": [
            ["style", "display", 'none'],
            ["style", "bottom", '573px'],
            ["style", "left", '1268px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_palms}": [
            ["style", "display", 'none'],
            ["style", "left", '625px'],
            ["style", "clip", [0,317,311,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '659px']
         ],
         "${_hero}": [
            ["style", "display", 'none'],
            ["style", "left", '1475px'],
            ["style", "bottom", '93px']
         ],
         "${_man-fly}": [
            ["transform", "scaleY", '1'],
            ["style", "bottom", '689px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '1459px'],
            ["style", "display", 'block']
         ],
         "${_moneys2Copy4}": [
            ["style", "display", 'none'],
            ["style", "bottom", '573px'],
            ["style", "left", '1412px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_bg-top}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_bg}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '-28px']
         ],
         "${_man-right_and_cooler}": [
            ["style", "display", 'none'],
            ["style", "left", '1894px'],
            ["style", "bottom", '471px']
         ],
         "${_moneys}": [
            ["style", "display", 'none'],
            ["style", "bottom", '656px'],
            ["style", "left", '1695px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_car}": [
            ["style", "display", 'none'],
            ["style", "left", '827px'],
            ["style", "bottom", '622px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(66,0,65,1.00)'],
            ["style", "width", '3000px'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_moneys2Copy5}": [
            ["style", "display", 'none'],
            ["style", "bottom", '483px'],
            ["style", "left", '1376px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_moneys2Copy3}": [
            ["style", "display", 'none'],
            ["style", "bottom", '483px'],
            ["style", "left", '1304px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_moneys2}": [
            ["style", "display", 'none'],
            ["style", "bottom", '483px'],
            ["style", "left", '1232px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9750,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1548,
            "part1": 4039,
            "part2": 6196,
            "part3": 8167,
            "end": 9750
         },
         timeline: [
            { id: "eid125", tween: [ "style", "${_palms}", "bottom", '59px', { fromValue: '659px'}], position: 8214, duration: 1036, easing: "easeOutBounce" },
            { id: "eid106", tween: [ "transform", "${_man-fly}", "scaleY", '1', { fromValue: '1'}], position: 9124, duration: 0 },
            { id: "eid81", tween: [ "transform", "${_moneys2Copy4}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 8385, duration: 422 },
            { id: "eid88", tween: [ "transform", "${_moneys2Copy4}", "rotateZ", '-54deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid78", tween: [ "transform", "${_moneys2Copy5}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 8214, duration: 456 },
            { id: "eid91", tween: [ "transform", "${_moneys2Copy5}", "rotateZ", '-54deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid14", tween: [ "style", "${_moneys}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_moneys}", "display", 'block', { fromValue: 'none'}], position: 1613, duration: 0 },
            { id: "eid8", tween: [ "style", "${_moneys}", "bottom", '93px', { fromValue: '656px'}], position: 1613, duration: 525 },
            { id: "eid10", tween: [ "style", "${_moneys}", "bottom", '78px', { fromValue: '93px'}], position: 2138, duration: 362 },
            { id: "eid40", tween: [ "style", "${_moneys}", "bottom", '114px', { fromValue: '78px'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid55", tween: [ "style", "${_moneys}", "bottom", '133px', { fromValue: '114px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid85", tween: [ "style", "${_moneys}", "bottom", '264px', { fromValue: '133px'}], position: 8807, duration: 317 },
            { id: "eid122", tween: [ "style", "${_moneys}", "bottom", '-187px', { fromValue: '264px'}], position: 9124, duration: 626 },
            { id: "eid115", tween: [ "style", "${_man-fly}", "left", '1142px', { fromValue: '1459px'}], position: 9124, duration: 626 },
            { id: "eid18", tween: [ "style", "${_moneys2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid24", tween: [ "style", "${_moneys2}", "display", 'block', { fromValue: 'none'}], position: 4089, duration: 0, easing: "easeOutBounce" },
            { id: "eid27", tween: [ "transform", "${_moneys2}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 4089, duration: 564, easing: "easeInQuad" },
            { id: "eid37", tween: [ "transform", "${_moneys2}", "rotateZ", '-6deg', { fromValue: '4deg'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid59", tween: [ "transform", "${_moneys2}", "rotateZ", '-10deg', { fromValue: '-6deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid99", tween: [ "transform", "${_moneys2}", "rotateZ", '-54deg', { fromValue: '-10deg'}], position: 8807, duration: 317 },
            { id: "eid51", tween: [ "transform", "${_moneys2Copy2}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 6400, duration: 523, easing: "easeInSine" },
            { id: "eid66", tween: [ "transform", "${_moneys2Copy2}", "rotateZ", '-11deg', { fromValue: '-7deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid93", tween: [ "transform", "${_moneys2Copy2}", "rotateZ", '-54deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid82", tween: [ "style", "${_moneys2Copy4}", "left", '1402px', { fromValue: '1412px'}], position: 8385, duration: 422 },
            { id: "eid89", tween: [ "style", "${_moneys2Copy4}", "left", '1403px', { fromValue: '1402px'}], position: 8807, duration: 317 },
            { id: "eid113", tween: [ "style", "${_moneys2Copy4}", "left", '1061px', { fromValue: '1403px'}], position: 9124, duration: 626 },
            { id: "eid26", tween: [ "style", "${_moneys2}", "bottom", '110px', { fromValue: '483px'}], position: 4089, duration: 564, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_moneys2}", "bottom", '65px', { fromValue: '110px'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_moneys2}", "bottom", '42px', { fromValue: '65px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid98", tween: [ "style", "${_moneys2}", "bottom", '-210px', { fromValue: '42px'}], position: 8807, duration: 317 },
            { id: "eid118", tween: [ "style", "${_moneys2}", "bottom", '-391px', { fromValue: '-210px'}], position: 9124, duration: 626 },
            { id: "eid77", tween: [ "style", "${_moneys2Copy5}", "bottom", '69px', { fromValue: '483px'}], position: 8214, duration: 456 },
            { id: "eid90", tween: [ "style", "${_moneys2Copy5}", "bottom", '-39px', { fromValue: '69px'}], position: 8807, duration: 317 },
            { id: "eid112", tween: [ "style", "${_moneys2Copy5}", "bottom", '-468px', { fromValue: '-39px'}], position: 9124, duration: 626 },
            { id: "eid79", tween: [ "style", "${_moneys2Copy5}", "left", '1367px', { fromValue: '1376px'}], position: 8214, duration: 456 },
            { id: "eid111", tween: [ "style", "${_moneys2Copy5}", "left", '1030px', { fromValue: '1367px'}], position: 9124, duration: 626 },
            { id: "eid16", tween: [ "style", "${_man-right_and_cooler}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_man-right_and_cooler}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_moneys2Copy4}", "bottom", '76px', { fromValue: '573px'}], position: 8385, duration: 422 },
            { id: "eid87", tween: [ "style", "${_moneys2Copy4}", "bottom", '10px', { fromValue: '76px'}], position: 8807, duration: 317 },
            { id: "eid114", tween: [ "style", "${_moneys2Copy4}", "bottom", '-428px', { fromValue: '10px'}], position: 9124, duration: 626 },
            { id: "eid48", tween: [ "transform", "${_moneys2Copy3}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 6250, duration: 465, easing: "easeInSine" },
            { id: "eid63", tween: [ "transform", "${_moneys2Copy3}", "rotateZ", '-11deg', { fromValue: '-7deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid95", tween: [ "transform", "${_moneys2Copy3}", "rotateZ", '-54deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid33", tween: [ "style", "${_moneys2Copy}", "left", '1267px', { fromValue: '1268px'}], position: 4250, duration: 545, easing: "easeInQuad" },
            { id: "eid62", tween: [ "style", "${_moneys2Copy}", "left", '1266px', { fromValue: '1267px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid120", tween: [ "style", "${_moneys2Copy}", "left", '1125px', { fromValue: '1266px'}], position: 9124, duration: 626 },
            { id: "eid57", tween: [ "style", "${_moneys2}", "left", '1233px', { fromValue: '1232px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid119", tween: [ "style", "${_moneys2}", "left", '1092px', { fromValue: '1233px'}], position: 9124, duration: 626 },
            { id: "eid6", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'none'}], position: 9124, duration: 0 },
            { id: "eid47", tween: [ "style", "${_moneys2Copy3}", "bottom", '73px', { fromValue: '483px'}], position: 6250, duration: 465, easing: "easeInSine" },
            { id: "eid65", tween: [ "style", "${_moneys2Copy3}", "bottom", '55px', { fromValue: '73px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid94", tween: [ "style", "${_moneys2Copy3}", "bottom", '-126px', { fromValue: '55px'}], position: 8807, duration: 317 },
            { id: "eid108", tween: [ "style", "${_moneys2Copy3}", "bottom", '-547px', { fromValue: '-126px'}], position: 9124, duration: 626 },
            { id: "eid28", tween: [ "style", "${_moneys2Copy}", "bottom", '107px', { fromValue: '573px'}], position: 4250, duration: 545, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "${_moneys2Copy}", "bottom", '69px', { fromValue: '107px'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_moneys2Copy}", "bottom", '49px', { fromValue: '69px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid96", tween: [ "style", "${_moneys2Copy}", "bottom", '-171px', { fromValue: '49px'}], position: 8807, duration: 317 },
            { id: "eid117", tween: [ "style", "${_moneys2Copy}", "bottom", '-349px', { fromValue: '-171px'}], position: 9124, duration: 626 },
            { id: "eid11", tween: [ "transform", "${_moneys}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 2138, duration: 362 },
            { id: "eid39", tween: [ "transform", "${_moneys}", "rotateZ", '-5deg', { fromValue: '5deg'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid56", tween: [ "transform", "${_moneys}", "rotateZ", '-11deg', { fromValue: '-5deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid86", tween: [ "transform", "${_moneys}", "rotateZ", '-55deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid74", tween: [ "style", "${_girl}", "bottom", '91px', { fromValue: '651px'}], position: 7198, duration: 930, easing: "easeOutBounce" },
            { id: "eid21", tween: [ "style", "${_moneys2Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid45", tween: [ "style", "${_moneys2Copy3}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBounce" },
            { id: "eid29", tween: [ "transform", "${_moneys2Copy}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 4250, duration: 545, easing: "easeInQuad" },
            { id: "eid38", tween: [ "transform", "${_moneys2Copy}", "rotateZ", '-6deg', { fromValue: '4deg'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_moneys2Copy}", "rotateZ", '-11deg', { fromValue: '-6deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid97", tween: [ "transform", "${_moneys2Copy}", "rotateZ", '-54deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid20", tween: [ "style", "${_moneys2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid46", tween: [ "style", "${_moneys2Copy2}", "display", 'block', { fromValue: 'none'}], position: 6400, duration: 0, easing: "easeOutBounce" },
            { id: "eid49", tween: [ "style", "${_moneys2Copy3}", "left", '1302px', { fromValue: '1304px'}], position: 6250, duration: 465, easing: "easeInSine" },
            { id: "eid64", tween: [ "style", "${_moneys2Copy3}", "left", '1301px', { fromValue: '1302px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid107", tween: [ "style", "${_moneys2Copy3}", "left", '967px', { fromValue: '1301px'}], position: 9124, duration: 626 },
            { id: "eid22", tween: [ "style", "${_moneys2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid25", tween: [ "style", "${_moneys2Copy}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "easeOutBounce" },
            { id: "eid23", tween: [ "style", "${_moneys2Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid76", tween: [ "style", "${_moneys2Copy4}", "display", 'block', { fromValue: 'none'}], position: 8385, duration: 0 },
            { id: "eid124", tween: [ "style", "${_palms}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_palms}", "display", 'block', { fromValue: 'none'}], position: 8214, duration: 0 },
            { id: "eid44", tween: [ "style", "${_car}", "bottom", '92px', { fromValue: '622px'}], position: 5000, duration: 1148, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "style", "${_moneys}", "left", '1700px', { fromValue: '1695px'}], position: 2138, duration: 362 },
            { id: "eid54", tween: [ "style", "${_moneys}", "left", '1697px', { fromValue: '1700px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid84", tween: [ "style", "${_moneys}", "left", '1596px', { fromValue: '1697px'}], position: 8807, duration: 317 },
            { id: "eid121", tween: [ "style", "${_moneys}", "left", '1253px', { fromValue: '1596px'}], position: 9124, duration: 626 },
            { id: "eid17", tween: [ "style", "${_man-right_and_cooler}", "bottom", '91px', { fromValue: '471px'}], position: 2500, duration: 1500, easing: "easeOutBounce" },
            { id: "eid9", tween: [ "transform", "${_line}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 2138, duration: 362 },
            { id: "eid34", tween: [ "transform", "${_line}", "rotateZ", '-6deg', { fromValue: '4deg'}], position: 4795, duration: 509, easing: "easeInQuad" },
            { id: "eid53", tween: [ "transform", "${_line}", "rotateZ", '-11deg', { fromValue: '-6deg'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid83", tween: [ "transform", "${_line}", "rotateZ", '-53deg', { fromValue: '-11deg'}], position: 8807, duration: 317 },
            { id: "eid2", tween: [ "style", "${_man-fly}", "bottom", '94px', { fromValue: '689px'}], position: 0, duration: 1500 },
            { id: "eid116", tween: [ "style", "${_man-fly}", "bottom", '-307px', { fromValue: '94px'}], position: 9124, duration: 626 },
            { id: "eid50", tween: [ "style", "${_moneys2Copy2}", "bottom", '77px', { fromValue: '573px'}], position: 6400, duration: 523, easing: "easeInSine" },
            { id: "eid68", tween: [ "style", "${_moneys2Copy2}", "bottom", '62px', { fromValue: '77px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid92", tween: [ "style", "${_moneys2Copy2}", "bottom", '-82px', { fromValue: '62px'}], position: 8807, duration: 317 },
            { id: "eid110", tween: [ "style", "${_moneys2Copy2}", "bottom", '-508px', { fromValue: '-82px'}], position: 9124, duration: 626 },
            { id: "eid4", tween: [ "style", "${_hero}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_hero}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid7", tween: [ "style", "${_hero}", "display", 'block', { fromValue: 'block'}], position: 1613, duration: 0 },
            { id: "eid100", tween: [ "style", "${_hero}", "display", 'none', { fromValue: 'block'}], position: 9124, duration: 0 },
            { id: "eid52", tween: [ "style", "${_moneys2Copy2}", "left", '1337px', { fromValue: '1340px'}], position: 6400, duration: 523, easing: "easeInSine" },
            { id: "eid67", tween: [ "style", "${_moneys2Copy2}", "left", '1334px', { fromValue: '1337px'}], position: 6923, duration: 476, easing: "easeInSine" },
            { id: "eid109", tween: [ "style", "${_moneys2Copy2}", "left", '999px', { fromValue: '1334px'}], position: 9124, duration: 626 },
            { id: "eid70", tween: [ "style", "${_girl}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid69", tween: [ "style", "${_girl}", "display", 'block', { fromValue: 'none'}], position: 7198, duration: 0, easing: "easeInSine" },
            { id: "eid19", tween: [ "style", "${_moneys2Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid75", tween: [ "style", "${_moneys2Copy5}", "display", 'block', { fromValue: 'none'}], position: 8214, duration: 0 },
            { id: "eid42", tween: [ "style", "${_car}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid41", tween: [ "style", "${_car}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInQuad" },
            { id: "eid104", tween: [ "transform", "${_man-fly}", "scaleX", '-1', { fromValue: '-1'}], position: 9124, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-16070390");
