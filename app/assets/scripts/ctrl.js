(function(){
	'use strict';

	angular
		.module('app.module')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', 'ValidateNumber'];

		function MainCtrl ($scope, ValidateNumber) {
			var vm = this;
			vm.numbers = [1,2,3];
			vm.next = 4;
			vm.getNextNumber = getNextNumber;

			function getNextNumber () {
				var startTime = Date.now();
				ValidateNumber(vm.next)
					.then(function(d) {
						vm.numbers.push(d);
						console.log("Last took: " + (Date.now() - startTime) + " ms")
					})
					.catch(function(e) {
						console.log(e);
					});
				vm.next++;
			}
		}
})();