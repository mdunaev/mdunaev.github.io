/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         window.init0(sym);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 399, function(sym, e) {
         sym.stop('part0');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_RoundRectCopy2}", "click", function(sym, e) {
         window.open('http://twitter.com/intent/tweet?text=Неопытные бизнесмены часто совершают одни и те же ошибки. Наш начинающий предприниматель прошел все «круги ада».http://hellobusiness.ru');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRectCopy}", "click", function(sym, e) {
         window.open('https://facebook.com/sharer/sharer.php?u=hellobusiness.ru');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         window.open('http://vk.com/share.php?url=http://hellobusiness.ru');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         window.open('http://www.psbank.ru/Business');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'red'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var rnd = Math.random();
         sym.play( rnd * 8000 + 500 );

      });
      //Edge binding end

   })("red");
   //Edge symbol end:'red'

   //=========================================================
   
   //Edge symbol: 'orange'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(Math.random()*8000+500);

      });
      //Edge binding end

   })("orange");
   //Edge symbol end:'orange'

   //=========================================================
   
   //Edge symbol: 'yellow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(Math.random()*8000+500 );

      });
      //Edge binding end

   })("yellow");
   //Edge symbol end:'yellow'

   //=========================================================
   
   //Edge symbol: 'monkey'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("monkey");
   //Edge symbol end:'monkey'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'SUN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("SUN");
   //Edge symbol end:'SUN'

   //=========================================================
   
   //Edge symbol: 'Baloon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Baloon");
   //Edge symbol end:'Baloon'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(Math.random()*1000000);

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 240000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(Math.random()*300000);

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(Math.random()*300000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 180000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('start');

      });
      //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

})(jQuery, AdobeEdge, "EDGE-23395930");