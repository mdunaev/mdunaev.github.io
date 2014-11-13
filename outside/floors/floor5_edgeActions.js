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
         window.init5(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1809, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3037, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4375, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hero_print'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("hero_print");
   //Edge symbol end:'hero_print'

   //=========================================================
   
   //Edge symbol: 'Woman_Stand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         if(Math.random()>0.5){
         	sym.play(0);
         }

      });
      //Edge binding end

   })("Woman_Stand");
   //Edge symbol end:'Woman_Stand'

   //=========================================================
   
   //Edge symbol: 'Man_Left'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1964, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         var rnd = Math.random();
         if(rnd<0.3){
         sym.play();
         } else if(rnd<0.6){
         sym.play('three');
         } else {
         sym.play(0);
         }

      });
      //Edge binding end

   })("Man_Left");
   //Edge symbol end:'Man_Left'

   //=========================================================
   
   //Edge symbol: 'Hero_with_Phone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Hero_with_Phone");
   //Edge symbol end:'Hero_with_Phone'

   //=========================================================
   
   //Edge symbol: 'Right_man'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Right_man");
   //Edge symbol end:'Right_man'

   //=========================================================
   
   //Edge symbol: 'Hero_shiva'
   (function(symbolName) {   
   
   })("Hero_shiva");
   //Edge symbol end:'Hero_shiva'

   //=========================================================
   
   //Edge symbol: 'Man-4hands'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Man-4hands");
   //Edge symbol end:'Man-4hands'

   //=========================================================
   
   //Edge symbol: 'list1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("list1");
   //Edge symbol end:'list1'

   //=========================================================
   
   //Edge symbol: 'list2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("list2");
   //Edge symbol end:'list2'

   //=========================================================
   
   //Edge symbol: 'list3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("list3");
   //Edge symbol end:'list3'

   //=========================================================
   
   //Edge symbol: 'phone4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1677, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("phone4");
   //Edge symbol end:'phone4'

   //=========================================================
   
   //Edge symbol: 'comp_fly'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("comp_fly");
   //Edge symbol end:'comp_fly'

   //=========================================================
   
   //Edge symbol: 'woman_go'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("woman_go");
   //Edge symbol end:'woman_go'

   //=========================================================
   
   //Edge symbol: 'doom'
   (function(symbolName) {   
   
   })("doom");
   //Edge symbol end:'doom'

   //=========================================================
   
   //Edge symbol: 'Hand3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Hand3");
   //Edge symbol end:'Hand3'

})(jQuery, AdobeEdge, "EDGE-126001979");