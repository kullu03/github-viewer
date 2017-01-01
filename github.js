

// do not create global variable.
(function(){

// Get the githubViewer App module
var GithubViewer = angular.module("GithubViewer");

var github = function($http){

// Get the github User detials
var getUser = function(username){
		return $http.get("https://api.github.com/users/" + username).then(function(response){
				return response.data;
			});
    };

var getRepos = function(user) {
      return $http.get(user.repos_url).then(function(response){
      	return response.data;
      });
    };


// Expose the functionality to the outside world.

return {
	getUser : getUser,
	getRepos : getRepos
};

};

// Register the github service to angulat module to let angular know that there is github service

GithubViewer.factory("github",github);

()});
