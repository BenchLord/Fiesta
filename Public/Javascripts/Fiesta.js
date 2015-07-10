(function(){

	angular.module('Fiesta', ['ui.router']).config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('homepage', {
				url: '/',
				templateUrl: 'public/templates/ng.html'
			}).state('otherpage', {
				url: '/otherpage',
				templateUrl: 'public/templates/other.html'
			})
		}
	])

})();