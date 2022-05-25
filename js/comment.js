var app = angular.module('CommentApp', []);
app.controller('PostController', function($scope) {				
    			$scope.comments = localStorage.getItem("comments");
				$scope.comments = (localStorage.getItem('comments')!==null) ? JSON.parse($scope.comments) : [];
				localStorage.setItem('comments', JSON.stringify($scope.comments));
				console.log("Before submit : "+$scope.comments);
			
				$scope.submit = function() {
					$scope.comments.push({
						name: "Ngọc Sơn",
						commentTxt: $scope.commentTxt
					});
					localStorage.setItem("comments", JSON.stringify($scope.comments));
					console.log("After submit : "+$scope.comments);
				};	
});