(function(){

	angular.module('Fiesta').controller('EventCtrl', [
		'Event',
		'$scope',
		'$state',
		function(Event, $scope, $state){
			this.events = Event.query();
			this.sessionUser = $scope.sessionUser;

			var ctrl = this
			$scope.$on('Event Created', function(event, event){
				ctrl.events.push(event);
			})
		}
	]);

})();