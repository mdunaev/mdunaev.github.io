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
            rect:['0px','auto','4750px','2000px','auto','0px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/bg.svg','0px','0px']
         },
         {
            id:'Group',
            display:'none',
            type:'group',
            rect:['1488px','auto','181','87','auto','227px'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','auto','181px','34px','auto','53px'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['0px','auto','181px','53px','auto','0px'],
               fill:["rgba(153,0,84,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'bridge_part',
            display:'none',
            type:'image',
            rect:['1487px','auto','181px','83px','auto','229px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/bridge_part.svg','0px','0px']
         },
         {
            id:'man-fly',
            type:'image',
            rect:['1459px','auto','82px','89px','auto','1137px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/man-fly.svg','0px','0px']
         },
         {
            id:'man_stand',
            display:'none',
            type:'image',
            rect:['1476px','auto','69px','90px','auto','312px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/man_walk.svg','0px','0px']
         },
         {
            id:'MAn_go',
            display:'none',
            type:'rect',
            rect:['1476','auto','auto','auto','auto','314px']
         },
         {
            id:'tchka',
            type:'image',
            rect:['1545px','auto','118px','34px','auto','1095px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/tchka.svg','0px','0px']
         },
         {
            id:'goldCopy6',
            display:'none',
            type:'image',
            rect:['1584px','auto','35px','11px','auto','365px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'goldCopy5',
            display:'none',
            type:'image',
            rect:['1567px','auto','35px','11px','auto','355px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'goldCopy4',
            display:'none',
            type:'image',
            rect:['1602px','auto','35px','11px','auto','355px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'gold',
            display:'none',
            type:'image',
            rect:['1550px','auto','35px','11px','auto','345px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'goldCopy',
            display:'none',
            type:'image',
            rect:['1585px','auto','35px','11px','auto','345px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'goldCopy2',
            display:'none',
            type:'image',
            rect:['1621px','auto','35px','11px','auto','345px'],
            fill:["rgba(0,0,0,0)",'svg_floor0/gold.svg','0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['1471px','auto','188px','19px','auto','0px'],
            fill:["rgba(255,219,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'MAn_go',
            symbolName:'MAn_go'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,219,0,1.00)'],
            ["style", "left", '1471px']
         ],
         "${_man_stand}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1476px'],
            ["style", "bottom", '312px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(153,0,84,1.00)'],
            ["style", "height", '53px'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_goldCopy}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1585px'],
            ["style", "bottom", '345px']
         ],
         "${_goldCopy6}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1584px'],
            ["style", "bottom", '365px']
         ],
         "${_man-fly}": [
            ["style", "display", 'block'],
            ["style", "left", '1459px'],
            ["style", "bottom", '1137px']
         ],
         "${_MAn_go}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '314px']
         ],
         "${_Group}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "left", '1488px'],
            ["style", "bottom", '227px']
         ],
         "${_Rectangle}": [
            ["style", "height", '34px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "bottom", '53px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_bridge_part}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1487px'],
            ["style", "bottom", '229px']
         ],
         "${_gold}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1550px'],
            ["style", "bottom", '345px']
         ],
         "${_goldCopy5}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1567px'],
            ["style", "bottom", '355px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ],
         "${_goldCopy4}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1602px'],
            ["style", "bottom", '355px']
         ],
         "${_goldCopy2}": [
            ["style", "display", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1621px'],
            ["style", "bottom", '345px']
         ],
         "${_tchka}": [
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '1545px'],
            ["style", "bottom", '1095px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6500,
         autoPlay: true,
         labels: {
            "start": 0,
            "part0": 1439,
            "part1": 2036,
            "part2": 2316,
            "part3": 2859,
            "part4": 3043,
            "part5": 3463,
            "part6": 3540,
            "part7": 6250
         },
         timeline: [
            { id: "eid98", tween: [ "style", "${_man_stand}", "left", '1469px', { fromValue: '1476px'}], position: 4574, duration: 517 },
            { id: "eid119", tween: [ "style", "${_man_stand}", "left", '1499px', { fromValue: '1469px'}], position: 5091, duration: 1159 },
            { id: "eid26", tween: [ "style", "${_goldCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_goldCopy4}", "display", 'block', { fromValue: 'none'}], position: 2895, duration: 0 },
            { id: "eid43", tween: [ "transform", "${_bridge_part}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid70", tween: [ "transform", "${_bridge_part}", "rotateZ", '-5deg', { fromValue: '5deg'}], position: 4333, duration: 167 },
            { id: "eid92", tween: [ "transform", "${_bridge_part}", "rotateZ", '-69deg', { fromValue: '-5deg'}], position: 4574, duration: 517 },
            { id: "eid27", tween: [ "style", "${_goldCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_goldCopy5}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid41", tween: [ "style", "${_bridge_part}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_bridge_part}", "display", 'block', { fromValue: 'none'}], position: 4100, duration: 0 },
            { id: "eid61", tween: [ "style", "${_goldCopy5}", "left", '1568px', { fromValue: '1567px'}], position: 4100, duration: 150 },
            { id: "eid88", tween: [ "style", "${_goldCopy5}", "left", '1567px', { fromValue: '1568px'}], position: 4333, duration: 167 },
            { id: "eid108", tween: [ "style", "${_goldCopy5}", "left", '1538px', { fromValue: '1567px'}], position: 4574, duration: 517 },
            { id: "eid60", tween: [ "style", "${_goldCopy4}", "left", '1603px', { fromValue: '1602px'}], position: 4100, duration: 150 },
            { id: "eid86", tween: [ "style", "${_goldCopy4}", "left", '1604px', { fromValue: '1603px'}], position: 4333, duration: 167 },
            { id: "eid106", tween: [ "style", "${_goldCopy4}", "left", '1607px', { fromValue: '1604px'}], position: 4574, duration: 517 },
            { id: "eid50", tween: [ "style", "${_tchka}", "left", '1546px', { fromValue: '1545px'}], position: 4100, duration: 150 },
            { id: "eid97", tween: [ "style", "${_tchka}", "left", '1545px', { fromValue: '1546px'}], position: 4574, duration: 517 },
            { id: "eid45", tween: [ "style", "${_bridge_part}", "bottom", '223px', { fromValue: '229px'}], position: 4100, duration: 150 },
            { id: "eid72", tween: [ "style", "${_bridge_part}", "bottom", '211px', { fromValue: '223px'}], position: 4333, duration: 167 },
            { id: "eid94", tween: [ "style", "${_bridge_part}", "bottom", '-281px', { fromValue: '211px'}], position: 4574, duration: 517 },
            { id: "eid23", tween: [ "style", "${_goldCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_goldCopy2}", "display", 'block', { fromValue: 'none'}], position: 2071, duration: 0 },
            { id: "eid14", tween: [ "style", "${_MAn_go}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid13", tween: [ "style", "${_MAn_go}", "display", 'block', { fromValue: 'none'}], position: 1561, duration: 0, easing: "easeOutBounce" },
            { id: "eid21", tween: [ "style", "${_MAn_go}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid122", tween: [ "style", "${_MAn_go}", "display", 'block', { fromValue: 'none'}], position: 2316, duration: 0 },
            { id: "eid123", tween: [ "style", "${_MAn_go}", "display", 'none', { fromValue: 'block'}], position: 2819, duration: 0 },
            { id: "eid125", tween: [ "style", "${_MAn_go}", "display", 'block', { fromValue: 'none'}], position: 3081, duration: 0 },
            { id: "eid127", tween: [ "style", "${_MAn_go}", "display", 'none', { fromValue: 'block'}], position: 3426, duration: 0 },
            { id: "eid130", tween: [ "style", "${_MAn_go}", "display", 'block', { fromValue: 'none'}], position: 3592, duration: 0 },
            { id: "eid131", tween: [ "style", "${_MAn_go}", "display", 'none', { fromValue: 'block'}], position: 4100, duration: 0 },
            { id: "eid68", tween: [ "style", "${_goldCopy4}", "bottom", '347px', { fromValue: '355px'}], position: 4100, duration: 150 },
            { id: "eid87", tween: [ "style", "${_goldCopy4}", "bottom", '343px', { fromValue: '347px'}], position: 4333, duration: 167 },
            { id: "eid107", tween: [ "style", "${_goldCopy4}", "bottom", '-75px', { fromValue: '343px'}], position: 4574, duration: 517 },
            { id: "eid4", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 1561, duration: 0 },
            { id: "eid20", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 2316, duration: 0 },
            { id: "eid124", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 2819, duration: 0 },
            { id: "eid126", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 3081, duration: 0 },
            { id: "eid128", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 3426, duration: 0 },
            { id: "eid129", tween: [ "style", "${_man_stand}", "display", 'none', { fromValue: 'block'}], position: 3592, duration: 0 },
            { id: "eid132", tween: [ "style", "${_man_stand}", "display", 'block', { fromValue: 'none'}], position: 4100, duration: 0 },
            { id: "eid57", tween: [ "transform", "${_gold}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid79", tween: [ "transform", "${_gold}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid117", tween: [ "transform", "${_gold}", "rotateZ", '-112deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid63", tween: [ "style", "${_gold}", "left", '1551px', { fromValue: '1550px'}], position: 4100, duration: 150 },
            { id: "eid82", tween: [ "style", "${_gold}", "left", '1546px', { fromValue: '1551px'}], position: 4333, duration: 167 },
            { id: "eid100", tween: [ "style", "${_gold}", "left", '1516px', { fromValue: '1546px'}], position: 4574, duration: 517 },
            { id: "eid22", tween: [ "style", "${_goldCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_goldCopy6}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid73", tween: [ "style", "${_man_stand}", "bottom", '290px', { fromValue: '312px'}], position: 4333, duration: 167 },
            { id: "eid99", tween: [ "style", "${_man_stand}", "bottom", '9px', { fromValue: '290px'}], position: 4574, duration: 517 },
            { id: "eid120", tween: [ "style", "${_man_stand}", "bottom", '-79px', { fromValue: '9px'}], position: 5091, duration: 1159 },
            { id: "eid44", tween: [ "style", "${_bridge_part}", "left", '1485px', { fromValue: '1487px'}], position: 4100, duration: 150 },
            { id: "eid71", tween: [ "style", "${_bridge_part}", "left", '1488px', { fromValue: '1485px'}], position: 4333, duration: 167 },
            { id: "eid93", tween: [ "style", "${_bridge_part}", "left", '1532px', { fromValue: '1488px'}], position: 4574, duration: 517 },
            { id: "eid25", tween: [ "style", "${_gold}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_gold}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_tchka}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid77", tween: [ "transform", "${_tchka}", "rotateZ", '-6deg', { fromValue: '5deg'}], position: 4333, duration: 167 },
            { id: "eid96", tween: [ "transform", "${_tchka}", "rotateZ", '-40deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid67", tween: [ "style", "${_goldCopy5}", "bottom", '351px', { fromValue: '355px'}], position: 4100, duration: 150 },
            { id: "eid89", tween: [ "style", "${_goldCopy5}", "bottom", '338px', { fromValue: '351px'}], position: 4333, duration: 167 },
            { id: "eid109", tween: [ "style", "${_goldCopy5}", "bottom", '-116px', { fromValue: '338px'}], position: 4574, duration: 517 },
            { id: "eid118", tween: [ "transform", "${_man_stand}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 5091, duration: 1159 },
            { id: "eid69", tween: [ "style", "${_goldCopy6}", "bottom", '361px', { fromValue: '365px'}], position: 4100, duration: 150 },
            { id: "eid91", tween: [ "style", "${_goldCopy6}", "bottom", '351px', { fromValue: '361px'}], position: 4333, duration: 167 },
            { id: "eid111", tween: [ "style", "${_goldCopy6}", "bottom", '-75px', { fromValue: '351px'}], position: 4574, duration: 517 },
            { id: "eid1", tween: [ "style", "${_man-fly}", "bottom", '313px', { fromValue: '1137px'}], position: 0, duration: 1000 },
            { id: "eid66", tween: [ "style", "${_goldCopy2}", "bottom", '333px', { fromValue: '345px'}], position: 4100, duration: 150 },
            { id: "eid105", tween: [ "style", "${_goldCopy2}", "bottom", '-123px', { fromValue: '333px'}], position: 4574, duration: 517 },
            { id: "eid65", tween: [ "style", "${_goldCopy}", "bottom", '337px', { fromValue: '345px'}], position: 4100, duration: 150 },
            { id: "eid85", tween: [ "style", "${_goldCopy}", "bottom", '330px', { fromValue: '337px'}], position: 4333, duration: 167 },
            { id: "eid103", tween: [ "style", "${_goldCopy}", "bottom", '-123px', { fromValue: '330px'}], position: 4574, duration: 517 },
            { id: "eid58", tween: [ "style", "${_goldCopy}", "left", '1586px', { fromValue: '1585px'}], position: 4100, duration: 150 },
            { id: "eid84", tween: [ "style", "${_goldCopy}", "left", '1585px', { fromValue: '1586px'}], position: 4333, duration: 167 },
            { id: "eid102", tween: [ "style", "${_goldCopy}", "left", '1579px', { fromValue: '1585px'}], position: 4574, duration: 517 },
            { id: "eid54", tween: [ "transform", "${_goldCopy4}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid78", tween: [ "transform", "${_goldCopy4}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid113", tween: [ "transform", "${_goldCopy4}", "rotateZ", '90deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid64", tween: [ "style", "${_gold}", "bottom", '340px', { fromValue: '345px'}], position: 4100, duration: 150 },
            { id: "eid83", tween: [ "style", "${_gold}", "bottom", '326px', { fromValue: '340px'}], position: 4333, duration: 167 },
            { id: "eid101", tween: [ "style", "${_gold}", "bottom", '-146px', { fromValue: '326px'}], position: 4574, duration: 517 },
            { id: "eid62", tween: [ "style", "${_goldCopy6}", "left", '1585px', { fromValue: '1584px'}], position: 4100, duration: 150 },
            { id: "eid90", tween: [ "style", "${_goldCopy6}", "left", '1584px', { fromValue: '1585px'}], position: 4333, duration: 167 },
            { id: "eid110", tween: [ "style", "${_goldCopy6}", "left", '1569px', { fromValue: '1584px'}], position: 4574, duration: 517 },
            { id: "eid55", tween: [ "transform", "${_goldCopy5}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid80", tween: [ "transform", "${_goldCopy5}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid114", tween: [ "transform", "${_goldCopy5}", "rotateZ", '-60deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid6", tween: [ "style", "${_tchka}", "bottom", '312px', { fromValue: '1095px'}], position: 500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid51", tween: [ "style", "${_tchka}", "bottom", '302px', { fromValue: '312px'}], position: 4100, duration: 150 },
            { id: "eid81", tween: [ "style", "${_tchka}", "bottom", '296px', { fromValue: '302px'}], position: 4333, duration: 167 },
            { id: "eid95", tween: [ "style", "${_tchka}", "bottom", '-185px', { fromValue: '296px'}], position: 4574, duration: 517 },
            { id: "eid52", tween: [ "transform", "${_goldCopy}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid74", tween: [ "transform", "${_goldCopy}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid115", tween: [ "transform", "${_goldCopy}", "rotateZ", '61deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid5", tween: [ "style", "${_man-fly}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_man-fly}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_bg}", "left", '-362px', { fromValue: '0px'}], position: 1561, duration: 439 },
            { id: "eid31", tween: [ "style", "${_bg}", "left", '-763px', { fromValue: '-362px'}], position: 2358, duration: 461 },
            { id: "eid34", tween: [ "style", "${_bg}", "left", '-1167px', { fromValue: '-763px'}], position: 3043, duration: 383 },
            { id: "eid36", tween: [ "style", "${_bg}", "left", '-1677px', { fromValue: '-1167px'}], position: 3592, duration: 508 },
            { id: "eid59", tween: [ "style", "${_goldCopy2}", "left", '1622px', { fromValue: '1621px'}], position: 4100, duration: 150 },
            { id: "eid104", tween: [ "style", "${_goldCopy2}", "left", '1642px', { fromValue: '1622px'}], position: 4574, duration: 517 },
            { id: "eid53", tween: [ "transform", "${_goldCopy2}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid75", tween: [ "transform", "${_goldCopy2}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid116", tween: [ "transform", "${_goldCopy2}", "rotateZ", '-167deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid24", tween: [ "style", "${_goldCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_goldCopy}", "display", 'block', { fromValue: 'none'}], position: 2158, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_goldCopy6}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4100, duration: 150 },
            { id: "eid76", tween: [ "transform", "${_goldCopy6}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 4333, duration: 167 },
            { id: "eid112", tween: [ "transform", "${_goldCopy6}", "rotateZ", '16deg', { fromValue: '-6deg'}], position: 4574, duration: 517 },
            { id: "eid42", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 4100, duration: 0 }         ]
      }
   }
},
"MAn_go": {
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
      id: 'man_walk1',
      type: 'image',
      rect: ['0px','auto','69px','87px','auto','0px'],
      fill: ['rgba(0,0,0,0)','svg_floor0/man_walk1.svg','0px','0px']
   },
   {
      rect: ['0px','auto','69px','90px','auto','0px'],
      id: 'man_walk2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','svg_floor0/man_walk.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man_walk1}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_man_walk2}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 318,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "style", "${_man_walk2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid9", tween: [ "style", "${_man_walk2}", "display", 'block', { fromValue: 'none'}], position: 171, duration: 0, easing: "easeOutBounce" },
            { id: "eid11", tween: [ "style", "${_man_walk2}", "display", 'none', { fromValue: 'block'}], position: 318, duration: 0, easing: "easeOutBounce" },
            { id: "eid7", tween: [ "style", "${_man_walk1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid10", tween: [ "style", "${_man_walk1}", "display", 'none', { fromValue: 'block'}], position: 171, duration: 0, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "style", "${_man_walk1}", "display", 'block', { fromValue: 'none'}], position: 318, duration: 0, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-13074187");
