;if(!window.console){
	console = {
		log : function(msg){},
		debug : function(msg){},
		info : function(msg){},
		warn : function(msg){},
		error : function(msg){}
	};
}

;(function($, win, doc, undefined){
  "use strict";
  var app = angular.module('store',[]),
      gem = [{name:'memory',price:3.33, description:"16 G",reviews:[{stars:5,body:"awesome",author:"Kevin"},{stars:4,body:"fantastic",author:"Jim"}],canPurchase:true},
             {name:'cpu',price:3.34, description:"8 cores",reviews:[{stars:5,body:"awesome",author:"Kevin"},{stars:4,body:"fantastic",author:"Jim"}],canPurchase:true},
             {name:'keyborad',price:3.34, description:"black",reviews:[{stars:5,body:"awesome",author:"Kevin"},{stars:4,body:"fantastic",author:"Jim"}],canPurchase:true},
             {name:'monitor',price:3.34, description:"26 inch",reviews:[{stars:5,body:"awesome",author:"Kevin"},{stars:4,body:"fantastic",author:"Jim"}],canPurchase:true}
      ];
      
      app.controller('StoreController',function(){
      	this.productsList = gem;
      });

      app.controller('PanelController',function(){
        this.tab =1;
        this.selectTab = function(setTab){
        	this.tab = setTab;
        };
        this.iselected = function(SelectTab){
        	return SelectTab === this.tab;
        };
      });
 
 $(function(){  //initialize 
 console.info("initialized");
});	

})(jQuery, window, document);
