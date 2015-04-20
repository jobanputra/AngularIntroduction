(function () {

	var mainController = function ($scope) {
		$scope.message = "Hello from controller";
	};


	angular.module("githubViewer")
			.controller("mainController", ["$scope", mainController]);
})();