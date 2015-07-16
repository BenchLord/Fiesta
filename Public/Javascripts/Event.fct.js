(function(){

	angular.module('Fiesta').factory('Event', [
		'$resource',
		function($resource){
			return $resource('/api/:event_id.json', null, {'update': { method: 'PUT'}});
		}
	]);

})();