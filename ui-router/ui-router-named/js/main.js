'use strict';

var app = angular.module('demo', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url: '/',
		views: {
			'header': {
				templateUrl: 'templates/partials/header.html',
				controller: 'HeaderController'
			},
			'content': {
				templateUrl: 'templates/partials/content.html',
				controller: 'ContentController'	
			},
			'footer': {
				templateUrl: 'templates/partials/footer.html',
				controller: 'FooterController'
			}
		}
	})

	.state('dashboard', {
		url: '/dashboard',
		views: {
			'header': {
				templateUrl: 'templates/partials/header.html'
			},
			'content': {
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardController'
			}
		}
		
	})
	
	.state('campaigns', {
		url: '/campaigns',
		views: {
			'content': {
				templateUrl: 'templates/campaigns.html',
				controller: 'CampaignController'
			},
			'footer': {
				templateUrl: 'templates/partials/footer.html'
			}
		}
		
	})
});

app.controller('DashboardController', function($scope) {
    
});

app.controller('CampaignController', function($scope) {
    
});

app.controller('HeaderController', function($scope) {
    
});

app.controller('ContentController', function($scope) {
    
});

app.controller('FooterController', function($scope) {
    
});



