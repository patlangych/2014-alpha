"use strict";
	 
console.time("Executed in:");
console.group("Practice - 5 - Taxi");
(function( $ ) { //redefine noConflict
	$(function() { //doc ready
		(function () {
			//Step 2 
			console.log('Step 2');
		})();
	});
})(jQuery);
console.groupEnd();
console.timeEnd("Executed in:");