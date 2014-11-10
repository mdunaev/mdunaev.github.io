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
            id:'static_bg',
            type:'group',
            rect:['0px','auto','4212','787','auto','80px'],
            c:[
            {
               id:'man-fly',
               type:'image',
               rect:['905','auto','1.9%','89px','auto','391px'],
               fill:["rgba(0,0,0,0)",'svgs/l1-svg/man-fly.svg','0px','0px']
            },
            {
               id:'bg-highlight',
               type:'image',
               rect:['0px','auto','44.8%','299px','auto','202px'],
               fill:["rgba(0,0,0,0)",im+"bg-highlight.svg",'0px','0px']
            },
            {
               id:'bg-highlightCopy',
               type:'image',
               rect:['1885px','auto','44.8%','299px','auto','202px'],
               fill:["rgba(0,0,0,0)",im+"bg-highlight.svg",'0px','0px']
            },
            {
               id:'rain2',
               type:'rect',
               rect:['-1274','auto','auto','auto','auto','203px']
            },
            {
               id:'rain2Copy2',
               type:'rect',
               rect:['-1268px','auto','auto','auto','auto','1153px']
            },
            {
               id:'rain2Copy3',
               type:'rect',
               rect:['-1276px','auto','auto','auto','auto','2102px']
            },
            {
               id:'city',
               type:'image',
               rect:['415px','auto','50.1%','206px','auto','203px'],
               fill:["rgba(0,0,0,0)",im+"city.svg",'0px','0px']
            },
            {
               id:'cityCopy2',
               type:'image',
               rect:['-1675px','auto','50.1%','206px','auto','203px'],
               fill:["rgba(0,0,0,0)",im+"city.svg",'0px','0px']
            },
            {
               id:'cityCopy',
               type:'image',
               rect:['2518px','auto','50.1%','206px','auto','203px'],
               fill:["rgba(0,0,0,0)",im+"city.svg",'0px','0px']
            },
            {
               id:'clocks',
               type:'image',
               rect:['750px','auto','35.6%','582px','auto','205px'],
               fill:["rgba(0,0,0,0)",im+"clocks.svg",'0px','0px']
            }]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['1356px','auto','279px','2213px','auto','867px'],
            fill:["rgba(102,102,204,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'LightRay',
            type:'group',
            rect:['1396px','auto','200','2213','auto','3002px'],
            transform:[],
            c:[
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['0px','auto','200px','2213px','auto','0px'],
               opacity:0.14260864257812,
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy2',
               type:'rect',
               rect:['25px','auto','150px','2213px','auto','0px'],
               opacity:0.14260864257812,
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy3',
               type:'rect',
               rect:['50px','auto','100px','2213px','auto','0px'],
               opacity:0.14260864257812,
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'sand-bottom',
            type:'image',
            rect:['1448px','auto','100px','50px','auto','241px'],
            clip:['rect(0px 242.99998474121094px 120.99999237060547px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sand-bottom.svg",'0px','0px']
         },
         {
            id:'sand_center',
            type:'rect',
            rect:['1493px','auto','9px','226px','auto','288px'],
            fill:["rgba(204,153,51,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'man-fly2',
            display:'none',
            type:'image',
            rect:['1448px','auto','82px','89px','auto','2889px'],
            fill:["rgba(0,0,0,0)",im+"man-fly.svg",'0px','0px']
         },
         {
            id:'man-stand',
            display:'none',
            type:'image',
            rect:['1468px','auto','53px','90px','auto','566px'],
            clip:['rect(0px 53px 70px 0px)'],
            fill:["rgba(0,0,0,0)",im+"man-stand.svg",'0px','0px']
         },
         {
            id:'man-legs-stand',
            display:'none',
            type:'image',
            rect:['1487px','auto','24px','2.7%','auto','489px'],
            fill:["rgba(0,0,0,0)",im+"man-legs-stand.svg",'0px','0px']
         },
         {
            id:'clocks_top_mask',
            type:'image',
            rect:['750px','auto','1500px','582px','auto','285px'],
            clip:['rect(0px 904px 38px 580px)'],
            fill:["rgba(0,0,0,0)",im+"clocks.svg",'0px','0px']
         },
         {
            id:'Legs',
            display:'none',
            type:'rect',
            rect:['1469','auto','auto','auto','auto','538px']
         },
         {
            id:'man-stand2',
            display:'none',
            type:'image',
            rect:['1468px','auto','53px','90px','auto','322px'],
            fill:["rgba(0,0,0,0)",im+"man-stand.svg",'0px','0px']
         },
         {
            id:'sand-top',
            type:'image',
            rect:['1386px','auto','222px','110px','auto','482px'],
            fill:["rgba(0,0,0,0)",im+"sand-top.svg",'0px','0px'],
            transform:[]
         },
         {
            id:'sand_mask',
            display:'none',
            type:'rect',
            rect:['1468px','auto','54px','26px','auto','322px'],
            fill:["rgba(204,153,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'clocks3',
            type:'image',
            rect:['750px','auto','1500px','582px','auto','285px'],
            clip:['rect(546px 1500px 582px 0px)'],
            fill:["rgba(0,0,0,0)",im+"clocks.svg",'0px','0px']
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['1176px','auto','auto','auto','auto','425px']
         },
         {
            id:'Symbol_1Copy',
            type:'rect',
            rect:['830px','auto','auto','auto','auto','285px']
         },
         {
            id:'Symbol_1Copy2',
            type:'rect',
            rect:['1813px','auto','auto','auto','auto','425px']
         },
         {
            id:'brics2',
            type:'image',
            rect:['0px','auto','3000px','287px','auto','-2px'],
            fill:["rgba(0,0,0,0)",im+"brics.svg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'Symbol_1Copy2',
            symbolName:'Symbol_1'
         },
         {
            id:'rain2Copy2',
            symbolName:'rain'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Legs',
            symbolName:'Legs'
         },
         {
            id:'rain2',
            symbolName:'rain'
         },
         {
            id:'Symbol_1Copy',
            symbolName:'Symbol_1'
         },
         {
            id:'rain2Copy3',
            symbolName:'rain'
         }
         ]
      },
   states: {
      "Base State": {
         "${_sand_mask}": [
            ["color", "background-color", 'rgba(204,153,0,1.00)'],
            ["style", "bottom", '322px'],
            ["style", "display", 'none'],
            ["style", "height", '26px'],
            ["style", "left", '1468px'],
            ["style", "width", '54px']
         ],
         "${_clocks}": [
            ["style", "bottom", '205px'],
            ["style", "left", '750px'],
            ["style", "width", '35.61%']
         ],
         "${_rain2Copy3}": [
            ["style", "top", 'auto'],
            ["style", "left", '-1276px'],
            ["style", "bottom", '2102px']
         ],
         "${_Symbol_1Copy2}": [
            ["style", "top", 'auto'],
            ["style", "left", '1813px'],
            ["style", "bottom", '425px']
         ],
         "${_cityCopy}": [
            ["style", "bottom", '203px'],
            ["style", "left", '2518px'],
            ["style", "width", '50.07%']
         ],
         "${_man-stand2}": [
            ["style", "display", 'none'],
            ["style", "left", '1468px'],
            ["style", "bottom", '322px']
         ],
         "${_sand-top}": [
            ["transform", "scaleY", '1'],
            ["style", "bottom", '562px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '1386px'],
            ["style", "display", 'block']
         ],
         "${_man-fly}": [
            ["style", "width", '1.92%']
         ],
         "${_LightRay}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '3002px'],
            ["transform", "scaleX", '0.05'],
            ["style", "width", '200px']
         ],
         "${_rain2Copy2}": [
            ["style", "top", 'auto'],
            ["style", "left", '-1268px'],
            ["style", "bottom", '1153px']
         ],
         "${_brics2}": [
            ["style", "width", '3000px'],
            ["style", "left", '0px'],
            ["style", "bottom", '-2px']
         ],
         "${_city}": [
            ["style", "bottom", '203px'],
            ["style", "left", '415px'],
            ["style", "width", '50.07%']
         ],
         "${_Legs}": [
            ["style", "display", 'none'],
            ["style", "top", 'auto'],
            ["style", "bottom", '538px']
         ],
         "${_cityCopy2}": [
            ["style", "width", '50.07%'],
            ["style", "left", '-1675px'],
            ["style", "bottom", '203px']
         ],
         "${_clocks_top_mask}": [
            ["style", "clip", [0,904,38,580], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '750px'],
            ["style", "bottom", '285px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '0px'],
            ["style", "height", '2213px'],
            ["style", "opacity", '0.14260864257812'],
            ["style", "left", '0px'],
            ["style", "width", '200px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "bottom", '0px'],
            ["style", "height", '2213px'],
            ["style", "opacity", '0.142608642578125'],
            ["style", "left", '25px'],
            ["style", "width", '150px']
         ],
         "${_Symbol_1Copy}": [
            ["style", "top", 'auto'],
            ["style", "left", '830px'],
            ["style", "bottom", '285px']
         ],
         "${_RectangleCopy3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "bottom", '0px'],
            ["style", "height", '2213px'],
            ["style", "opacity", '0.142608642578125'],
            ["style", "left", '50px'],
            ["style", "width", '100px']
         ],
         "${_static_bg}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '80px']
         ],
         "${_Rectangle}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '867px'],
            ["style", "height", '2213px'],
            ["color", "background-color", 'rgba(102,102,204,1.00)'],
            ["style", "left", '1356px'],
            ["style", "width", '279px']
         ],
         "${_sand-bottom}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '321px'],
            ["style", "height", '50px'],
            ["style", "left", '1448px'],
            ["style", "clip", [0,242.9999857935836,120.9999928967918,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '100px']
         ],
         "${_rain2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '203px']
         ],
         "${_man-legs-stand}": [
            ["style", "display", 'none'],
            ["style", "left", '1487px'],
            ["style", "bottom", '569px']
         ],
         "${_Symbol_1}": [
            ["style", "top", 'auto'],
            ["style", "left", '1176px'],
            ["style", "bottom", '425px']
         ],
         "${_man-stand}": [
            ["style", "display", 'none'],
            ["style", "left", '1468px'],
            ["style", "clip", [0,53,64,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '646px']
         ],
         "${_bg-highlight}": [
            ["style", "bottom", '202px'],
            ["style", "left", '0px'],
            ["style", "width", '44.8%']
         ],
         "${_man-fly2}": [
            ["style", "display", 'none'],
            ["style", "left", '1448px'],
            ["style", "bottom", '2889px']
         ],
         "${_sand_center}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '367px'],
            ["style", "height", '226px'],
            ["style", "left", '1493px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(102,102,204,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '3000px']
         ],
         "${_clocks3}": [
            ["style", "clip", [546,1500,582,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '750px'],
            ["style", "bottom", '285px']
         ],
         "${_bg-highlightCopy}": [
            ["style", "bottom", '202px'],
            ["style", "left", '1885px'],
            ["style", "width", '44.8%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3724,
         autoPlay: true,
         labels: {
            "part0": 0,
            "part1": 1769,
            "part2": 2652,
            "part3": 2960,
            "part4": 3214,
            "part5": 3723
         },
         timeline: [
            { id: "eid30", tween: [ "style", "${_man-stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_man-stand}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid105", tween: [ "style", "${_man-stand}", "display", 'none', { fromValue: 'block'}], position: 2318, duration: 0 },
            { id: "eid170", tween: [ "style", "${_sand_center}", "bottom", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_sand_center}", "bottom", '367px', { fromValue: '367px'}], position: 2495, duration: 0 },
            { id: "eid147", tween: [ "style", "${_sand_center}", "bottom", '567px', { fromValue: '287px'}], position: 2652, duration: 0 },
            { id: "eid143", tween: [ "style", "${_sand_center}", "bottom", '368px', { fromValue: '567px'}], position: 2750, duration: 88 },
            { id: "eid133", tween: [ "style", "${_sand_center}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_sand_center}", "display", 'none', { fromValue: 'block'}], position: 2652, duration: 0 },
            { id: "eid132", tween: [ "style", "${_sand_center}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid17", tween: [ "transform", "${_LightRay}", "scaleX", '0.05', { fromValue: '0.05'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid16", tween: [ "transform", "${_LightRay}", "scaleX", '1', { fromValue: '0.05'}], position: 712, duration: 288, easing: "easeInQuad" },
            { id: "eid32", tween: [ "style", "${_man-stand}", "bottom", '559px', { fromValue: '646px'}], position: 1750, duration: 568 },
            { id: "eid44", tween: [ "style", "${_sand-top}", "bottom", '557px', { fromValue: '562px'}], position: 1750, duration: 546 },
            { id: "eid160", tween: [ "style", "${_sand-top}", "bottom", '556px', { fromValue: '557px'}], position: 2296, duration: 154 },
            { id: "eid98", tween: [ "style", "${_sand-top}", "bottom", '522px', { fromValue: '556px'}], position: 2952, duration: 682 },
            { id: "eid168", tween: [ "style", "${_sand-top}", "bottom", '427px', { fromValue: '522px'}], position: 3634, duration: 90 },
            { id: "eid101", tween: [ "style", "${_sand_mask}", "height", '90px', { fromValue: '26px'}], position: 2952, duration: 772 },
            { id: "eid114", tween: [ "style", "${_sand-bottom}", "left", '1436px', { fromValue: '1448px'}], position: 1750, duration: 745 },
            { id: "eid120", tween: [ "style", "${_sand-bottom}", "left", '1376px', { fromValue: '1436px'}], position: 2952, duration: 772, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_man-legs-stand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_man-legs-stand}", "display", 'block', { fromValue: 'none'}], position: 2318, duration: 0, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_man-legs-stand}", "display", 'none', { fromValue: 'block'}], position: 2495, duration: 0 },
            { id: "eid171", tween: [ "style", "${_sand_center}", "height", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_sand_center}", "height", '0px', { fromValue: '226px'}], position: 2495, duration: 157 },
            { id: "eid127", tween: [ "style", "${_sand_center}", "height", '226px', { fromValue: '0px'}], position: 2652, duration: 43 },
            { id: "eid139", tween: [ "style", "${_sand_center}", "height", '226px', { fromValue: '9px'}], position: 2750, duration: 88 },
            { id: "eid128", tween: [ "style", "${_sand_center}", "height", '196px', { fromValue: '226px'}], position: 3427, duration: 227 },
            { id: "eid129", tween: [ "style", "${_sand_center}", "height", '54px', { fromValue: '196px'}], position: 3654, duration: 69, easing: "easeInQuad" },
            { id: "eid42", tween: [ "transform", "${_sand-top}", "scaleY", '0.9', { fromValue: '1'}], position: 1750, duration: 700 },
            { id: "eid97", tween: [ "transform", "${_sand-top}", "scaleY", '0.03', { fromValue: '0.9'}], position: 2952, duration: 772 },
            { id: "eid99", tween: [ "style", "${_sand_mask}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_sand_mask}", "display", 'block', { fromValue: 'none'}], position: 2952, duration: 0 },
            { id: "eid110", tween: [ "style", "${_sand-bottom}", "width", '123px', { fromValue: '100px'}], position: 1750, duration: 745 },
            { id: "eid118", tween: [ "style", "${_sand-bottom}", "width", '243px', { fromValue: '123px'}], position: 2952, duration: 772, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "transform", "${_sand-top}", "scaleX", '0.9', { fromValue: '1'}], position: 1750, duration: 700 },
            { id: "eid96", tween: [ "transform", "${_sand-top}", "scaleX", '0.03', { fromValue: '0.9'}], position: 2952, duration: 772 },
            { id: "eid36", tween: [ "style", "${_man-legs-stand}", "bottom", '558px', { fromValue: '569px'}], position: 2318, duration: 158 },
            { id: "eid169", tween: [ "style", "${_man-legs-stand}", "bottom", '467px', { fromValue: '558px'}], position: 2476, duration: 19 },
            { id: "eid106", tween: [ "style", "${_sand-top}", "display", 'none', { fromValue: 'block'}], position: 3661, duration: 0 },
            { id: "eid109", tween: [ "style", "${_sand-bottom}", "height", '61px', { fromValue: '50px'}], position: 1750, duration: 745 },
            { id: "eid117", tween: [ "style", "${_sand-bottom}", "height", '121px', { fromValue: '61px'}], position: 2952, duration: 772, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_sand-bottom}", "bottom", '321px', { fromValue: '321px'}], position: 1750, duration: 0 },
            { id: "eid113", tween: [ "style", "${_sand-bottom}", "bottom", '321px', { fromValue: '321px'}], position: 2495, duration: 0 },
            { id: "eid90", tween: [ "style", "${_sand-bottom}", "bottom", '320px', { fromValue: '321px'}], position: 2952, duration: 772, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "style", "${_man-fly2}", "bottom", '820px', { fromValue: '2889px'}], position: 712, duration: 755, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_man-fly2}", "bottom", '648px', { fromValue: '820px'}], position: 1467, duration: 283, easing: "easeOutQuad" },
            { id: "eid176", tween: [ "style", "${_man-fly2}", "bottom", '325px', { fromValue: '543px'}], position: 2695, duration: 257, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_Legs}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_Legs}", "display", 'block', { fromValue: 'none'}], position: 2495, duration: 0 },
            { id: "eid56", tween: [ "style", "${_Legs}", "display", 'none', { fromValue: 'block'}], position: 2695, duration: 0 },
            { id: "eid24", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid23", tween: [ "style", "${_man-fly2}", "display", 'block', { fromValue: 'none'}], position: 712, duration: 0, easing: "easeInQuad" },
            { id: "eid28", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "style", "${_man-fly2}", "display", 'block', { fromValue: 'none'}], position: 2695, duration: 0, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_man-fly2}", "display", 'none', { fromValue: 'block'}], position: 2952, duration: 0 },
            { id: "eid21", tween: [ "style", "${_LightRay}", "bottom", '867px', { fromValue: '3002px'}], position: 0, duration: 712, easing: "easeInQuad" },
            { id: "eid22", tween: [ "style", "${_LightRay}", "bottom", '867px', { fromValue: '867px'}], position: 1000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_man-stand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_man-stand2}", "display", 'block', { fromValue: 'none'}], position: 2952, duration: 0 }         ]
      }
   }
},
"rain": {
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
      id: 'Group3',
      clip: ['rect(0px 5567.1166992188pxpx 968pxpx 0px)'],
      rect: ['0','0','5567','968','auto','auto'],
      c: [
      {
         id: 'rain',
         type: 'image',
         rect: ['0px','auto','50.2%','968px','auto','0px'],
         fill: ['rgba(0,0,0,0)','images/rain.svg','0px','0px']
      },
      {
         id: 'rainCopy',
         type: 'image',
         rect: ['2774px','auto','50.2%','968px','auto','0px'],
         fill: ['rgba(0,0,0,0)','images/rain.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rainCopy}": [
            ["style", "bottom", '0px'],
            ["style", "left", '2774px'],
            ["style", "width", '50.17%']
         ],
         "${_Group3}": [
            ["style", "clip", [0,5567.1166992188,968,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_rain}": [
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '50.17%']
         ],
         "${symbolSelector}": [
            ["style", "height", '968px'],
            ["style", "width", '5564px']
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
            { id: "eid1", tween: [ "style", "${_Group3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Group3}", "left", '60px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Group3}", "left", '-30px', { fromValue: '60px'}], position: 1000, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Group3}", "left", '-190px', { fromValue: '-30px'}], position: 1500, duration: 0 }         ]
      }
   }
},
"Legs": {
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
      id: 'man-legs',
      type: 'image',
      rect: ['0px','auto','60px','100%','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/man-legs.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['18px','auto','24px','77.1%','auto','8px'],
      id: 'man-legs-stand2',
      fill: ['rgba(0,0,0,0)','images/man-legs-stand.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man-legs-stand2}": [
            ["style", "display", 'none'],
            ["style", "left", '18px'],
            ["style", "bottom", '8px']
         ],
         "${_man-legs}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '60px']
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
            { id: "eid47", tween: [ "style", "${_man-legs}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_man-legs}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid51", tween: [ "style", "${_man-legs-stand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_man-legs-stand2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_man-legs-stand2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
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
      id: 'pigeon-right',
      type: 'image',
      rect: ['0px','auto','24px','50px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/pigeon-right.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','auto','24px','50px','auto','0px'],
      id: 'pigeon-left',
      fill: ['rgba(0,0,0,0)','images/pigeon-left.svg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-26px','auto','75px','50px','auto','0px'],
      id: 'pigeon-open',
      fill: ['rgba(0,0,0,0)','images/pigeon-open.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '24px']
         ],
         "${_pigeon-open}": [
            ["style", "display", 'none'],
            ["style", "left", '-26px'],
            ["style", "bottom", '0px']
         ],
         "${_pigeon-left}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_pigeon-right}": [
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
         duration: 1750,
         autoPlay: true,
         labels: {
            "right": 750,
            "open": 1250
         },
         timeline: [
            { id: "eid151", tween: [ "style", "${_pigeon-right}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_pigeon-right}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid153", tween: [ "style", "${_pigeon-right}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid156", tween: [ "style", "${_pigeon-left}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_pigeon-left}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid155", tween: [ "style", "${_pigeon-left}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid159", tween: [ "style", "${_pigeon-open}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_pigeon-open}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid158", tween: [ "style", "${_pigeon-open}", "display", 'block', { fromValue: 'block'}], position: 1750, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-14388321");
