// Code goes here
(function() {
  var GithubViewer = angular.module("GithubViewer", ["ngRoute"]);
   GithubViewer.config(function($routeProvider){
          $routeProvider
          .when("/main",
          {
            templateUrl : "main.html",
            controller : "MainController"
          })
          .otherwise(redirectTo: "/main");
   });
}());