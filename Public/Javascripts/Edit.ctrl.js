(function(){

	angular.module('Fiesta').controller('EditCtrl', [
		'Event',
		'$state',
		'$stateParams',
		function(Event, $state, $stateParams){
			var id = $stateParams._id

			var ctrl = this;
			Event.get({event_id: id}, function(event){
				ctrl.event = event;
				console.log(ctrl.event.organizer)
				ctrl.event.startDate = new Date(ctrl.event.startDate)
				ctrl.event.endDate = new Date(ctrl.event.endDate)
			})

			this.update = function(){
				Event.update({ event_id: id }, ctrl.event, function(event){
					$state.go('detail', event)
				});
			}
		}
	])

})();