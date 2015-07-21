(function(){

	angular.module('Fiesta').controller('NewCtrl', [
		'Event',
		'$rootScope',
		'$state',
		'$scope',
		function(Event, $rootScope, $state, $scope){
			this.sessionUser = $scope.sessionUser;
			this.newEvent = new Event();

			var ctrl = this;
			this.addEvent = function(){
				console.log(ctrl.newEvent);
				ctrl.newEvent.$save();
				$rootScope.$broadcast('Event Created', ctrl.newEvent);
				$state.go('list');
				ctrl.newEvent = new Event();
			}
		}
	]);

})();