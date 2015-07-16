(function(){

	angular.module('Fiesta').controller('DetailCtrl', [
		'$stateParams',
		'$state',
		'Event',
		function($stateParams, $state, Event){
			var id = $stateParams._id;
			this.event = Event.get({event_id: id});

		}
	])

})();