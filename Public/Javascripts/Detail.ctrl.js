(function(){

	angular.module('Fiesta').controller('DetailCtrl', [
		'Event',
		'$scope',
		'$stateParams',
		function(Event, $scope, $stateParams){
			this.sessionUser = $scope.sessionUser;

			var id = $stateParams._id;
			var ctrl = this;
			this.event = Event.get({event_id: id}).$promise.then(function(event){
				console.log(this.event);
			})
		}
	])
	
})();