/**
 * Noam validator
 * ~~~~~~~~~~~~~~
 * In order to validate a value one must validate on validate1 & validate2 and then to make sure the outcome is equal.
 *
 * Example of use:
 *
 * 		var noam = new Noam();
 *		noam.validate1(num, function(result1) {
 *			noam.validate2(num, function(result2) {
 *				if (result1 === result2) {
 *					return result1;
 *				} else {
 *					return {error: true};
 *				}
 *			});
 * 		});
 */

module.exports = Noam;

function Noam () {
	var maxRange = 300, 
		minRange = 1;
	this.rand = Math.floor((Math.random() * maxRange) + minRange)
}

Noam.prototype.validate1 = function validate (num, func) {
	setTimeout(function () {
		func(num)
	}, this.rand);
}

Noam.prototype.validate2 = function validate (num, func) {
	setTimeout(function () {
		func(num)
	}, this.rand * 2);	
}