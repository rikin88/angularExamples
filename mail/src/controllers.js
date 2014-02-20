//creating module for core A-mail services

var aMailServices = angular.module('AMail', []);

//set up mappings between urls, templates and controllers
function emailRouteConfig($routeProvider) {
	$routeProvider.
	when('/', {
		controller: ListController,
		templateUrl: 'list.html'
	}).
	//notice for detail view - parameterized url compompent by placing a colon in front of id
	when('/view/:id', {
		controller: DetailController,
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
}

//setup route so AMail service can find it
aMailServices.config(emailRouteConfig);

//some fake emails
messages = [{
	id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
	date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
	message: 'Hey, we should get together for lunch sometime and catch up.'
	+'There are many things we should collaborate on this year.'
	}, {
	id: 1, sender: 'maria@somecompany.com',
	subject: 'Where did you leave my laptop?',
	date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
	message: 'I thought you were going to put it in my desk drawer.'
	+'But it does not seem to be there.'
	}, {
	id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
	date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
	message: "Nobody panic, but my pet python is missing from her cage.'
	+'She doesn't move too fast, so just call me if you see her."
	}, 
];

//Publish our messages for list templates
function ListController($scope) {
	$scope.messages = messages;
}

//Get message id from the route (parsed from the url) and use it to
// find the right message object

function DetailController($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}