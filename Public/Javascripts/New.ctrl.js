(function(){

	angular.module('Fiesta').controller('NewCtrl', [
		'Event',
		'$rootScope',
		'$state',
		'$scope',
		function(Event, $rootScope, $state, $scope){
			this.newEvent = new Event();
			this.sessionUser = $scope.sessionUser;

			this.addEvent = function(){
				this.newEvent.$save();
				$rootScope.$broadcast('Event Created', this.newEvent);
				$state.go('detail', this.newEvent);
				this.newEvent = new Event();
			}
		}
	]);

})();