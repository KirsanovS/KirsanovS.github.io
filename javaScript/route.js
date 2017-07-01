regApp.config(function($routeProvider){
	$routeProvider.when('/main',
	{
		templateUrl:'tamplates/main.html',
		controller:'main'
	});

	$routeProvider.when("/moreInfo/:idDinamic", 
	{
		templateUrl: "tamplates/onePage.html",
		controller:'main'
	});
	$routeProvider.when("/advantage", 
	{
		templateUrl: "tamplates/advantage.html",
		controller:'main'
	});
	$routeProvider.when("/share", 
	{
		templateUrl: "tamplates/share.html",
		controller:'main'
	});
	$routeProvider.when("/admin", 
	{
		templateUrl: "tamplates/admin.html",
		controller:'main'
	});
	$routeProvider.otherwise( 
	{
		redirectTo: '/main'
	});
}) ; 