
var app = angular.module('myapp',[]);

app.controller("cdirdemo", ["$scope",function($scope){           
    var msgCollection = ["Do your best", "Do you love your job?", "Smile, it cost nothing"];
    var random_num = Math.floor(Math.random() * 3);   
    $scope.randomMessage = msgCollection[random_num];
}]);


app.directive('msgWelcomeUser', function(){   
    return {
        restrict : 'EA',
        templateUrl : "msg-welcome-user.html"
    }
});
