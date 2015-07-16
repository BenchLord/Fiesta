(function(){

	angular.module('Fiesta').controller('DetailCtrl', [
		'Event',
		'$scope',
		'$stateParams',
		function(Event, $scope, $stateParams){
			this.sessionUser = $scope.sessionUser;

			var id = $stateParams._id;
			var ctrl = this;
			Event.get({event_id: id}, function(event){
				console.log(event);
			});
		}
	])
	
})();