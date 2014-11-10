
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();window.init7(sym);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2521,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4029,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6028,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8075,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9047,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ManWalk'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(0);});
//Edge binding end
})("ManWalk");
//Edge symbol end:'ManWalk'

//=========================================================

//Edge symbol: 'Furniture'
(function(symbolName){})("Furniture");
//Edge symbol end:'Furniture'

//=========================================================

//Edge symbol: 'Man1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){var rand=Math.random();if(rand>0.4){sym.play(0);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){var rand=Math.random();if(rand<0.2){sym.play('close');}});
//Edge binding end
})("Man1");
//Edge symbol end:'Man1'

//=========================================================

//Edge symbol: 'Man2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(0);});
//Edge binding end
})("Man2");
//Edge symbol end:'Man2'

//=========================================================

//Edge symbol: 'Man3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",903,function(sym,e){sym.play(0);});
//Edge binding end
})("Man3");
//Edge symbol end:'Man3'

//=========================================================

//Edge symbol: 'Star'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",215,function(sym,e){sym.play(0);});
//Edge binding end
})("Star");
//Edge symbol end:'Star'

//=========================================================

//Edge symbol: 'Mouth'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var rand=Math.random();if(rand<0.25){sym.play(0);}else if(rand<0.5){sym.play(500);}else if(rand<0.75){sym.play(1000);}else{sym.play(1500);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){var rand=Math.random();if(rand<0.25){sym.play(0);}else if(rand<0.5){sym.play(500);}else if(rand<0.75){sym.play(1000);}else{sym.play(1500);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){var rand=Math.random();if(rand<0.25){sym.play(0);}else if(rand<0.5){sym.play(500);}else if(rand<0.75){sym.play(1000);}else{sym.play(1500);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){var rand=Math.random();if(rand<0.25){sym.play(0);}else if(rand<0.5){sym.play(500);}else if(rand<0.75){sym.play(1000);}else{sym.play(1500);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){var rand=Math.random();if(rand<0.25){sym.play(0);}else if(rand<0.5){sym.play(500);}else if(rand<0.75){sym.play(1000);}else{sym.play(1500);}});
//Edge binding end
})("Mouth");
//Edge symbol end:'Mouth'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("monkey_shake_hand");
//Edge symbol end:'monkey_shake_hand'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("MonkeySit");
//Edge symbol end:'MonkeySit'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("Monkey_Stand");
//Edge symbol end:'Monkey_Stand'

//=========================================================

//Edge symbol: 'Monkey_visit'
(function(symbolName){})("Monkey_visit");
//Edge symbol end:'Monkey_visit'
})(jQuery,AdobeEdge,"EDGE-48847544");