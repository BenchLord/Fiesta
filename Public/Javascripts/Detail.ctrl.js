(function(){

	angular.module('Fiesta').controller('DetailCtrl', [
		'Event',
		'$scope',
		'$stateParams',
		'$state',
		function(Event, $scope, $stateParams, $state){
			this.sessionUser = $scope.sessionUser;
			var id = $stateParams._id;

			var ctrl = this;
			Event.get({event_id: id}, function(event){
				ctrl.event = event;

				ctrl.startDate = new Date(ctrl.event.startDate).toString().substring(0, 15);
				ctrl.startTime = new Date(ctrl.event.startDate).toString().substring(15, 21);
				if (Number(ctrl.startTime.substring(0, 3)) > 12){
					console.log('triggered')
					ctrl.startTime = (Number(ctrl.startTime) - 12).toString() + ' PM';
				} else {
					ctrl.startTime = ctrl.startTime + " AM"
				}

				ctrl.endDate = new Date(ctrl.event.endDate).toString().substring(0, 15);
				ctrl.endTime = new Date(ctrl.event.endDate).toString().substring(15, 21);
				if (Number(ctrl.endTime.substring(0, 3)) > 12){
					ctrl.endTime = (Number(ctrl.endTime.substring(0, 3)) - 12).toString() + ctrl.endTime.substring(3,6) + " PM";
				} else {
					ctrl.endTime = ctrl.endTime + " AM"
				}
			});

			this.deleteEvent = function(){
				if(confirm("Are you sure you want to delete " + ctrl.event.name)){
					Event.remove({event_id: id}, function(){
						$state.go('list');
					});
				}
			}
		}
	])
	
})();