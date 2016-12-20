// Code goes here
(function() {

  var GithubViewer = angular.module("GithubViewer", []);

  GithubViewer.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.userName = "Kullu03";
    $scope.header = "Github Viewer AngularJS App"
    $scope.search = function(userName) {
      console.log("clicked");
      $http.get("https://api.github.com/users/" + userName).then(onUserComplete, onError);
    };

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repo_url).then(populateRepos,onError);
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch user details";
    };

  var populateRepos = function (response){
    $scope.repos = response.data;
  };

  }]);

}());