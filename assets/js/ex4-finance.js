angular.module('finance', [])
.factory('currencyConverter', ['$http'], function ($http) {
	var YAHOO_FIANCE_URL_PATTERN =
	'//query.yahooapis.com/v1/public/yql?+select * from' +
	'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' +
	'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';

	var currencies = ['USD', 'EUR', 'CNY'];
	var usdToFereignRates = {};

	var convert = function (amount, inCurr, outCurr) {
		return amount * usdToFereignRates[outCurr] / usdToFereignRates[inCurr];
	};

	var refrsh = function () {
		var url = YAHOO_FIANCE_URL_PATTERN.
				  replace('PAIRS', 'USD', currencies.join('","USD'));
		return $http.jsonp(url).then(function (response) {
			var newUsdToForeignRates = {};
			angular.forEach(response.data.query.results.rate, function (rate) { });
		});
	};
});