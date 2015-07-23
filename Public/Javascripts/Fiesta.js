(function(){

	angular.module('Fiesta', ['ui.router', 'ngResource', 'initialValue']).config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('list', {
				url: '/',
				controller: 'EventCtrl',
				controllerAs: 'eventCtrl',
				templateUrl: 'templates/list.html'
			}).state('new', {
				url: '/new',
				controller: 'NewCtrl',
				controllerAs: 'newCtrl',
				templateUrl: 'templates/new.html'
			}).state('detail', {
				url: '/detail/:_id',
				controller: 'DetailCtrl',
				controllerAs: 'detailCtrl',
				templateUrl: 'templates/detail.html'
			}).state('edit', {
				url: '/edit/:_id',
				controller: 'EditCtrl',
				controllerAs: 'editCtrl',
				templateUrl: 'templates/edit.html'
			})
		}
	])

})();