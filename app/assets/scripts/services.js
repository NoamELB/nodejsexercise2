(function(){
	'use strict';

	angular
		.module('app.module')
		.service('ValidateNumber', ValidateNumber);

		ValidateNumber.$inject = ['$resource', '$q'];

		function ValidateNumber ($resource, $q) {
			var url = $resource('data/:num', 
				{num: "@num"}
			);
			// closure function execute a GET request wraped in a Promise to localhost:5000/data/:num
			return function (num) {
				return new $q(function (resolve, reject) {
					url.get({num: num}, function (d) {
						if (!d || !d.data || d.error)
							reject("error");
						else resolve(d.data);
					})
				});
			}
		}
})();