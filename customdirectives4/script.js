
var app = angular.module('myapp',[]);

app.controller("cdirdemo", ["$scope",function($scope){           
    var msgCollection = ["Do your best", "Do you love your job?", "Smile, it cost nothing"];
    var random_num = Math.floor(Math.random() * 3);   
    $scope.randomMessage = msgCollection[random_num];
}]);


app.directive('msgWelcomeUser', function(){   
    return {
        restrict : 'E',
        link: function (scope) {
            scope.unm = scope.username;       
            scope.msg = scope.message;     
        },       
        scope : {
            username: "@",            
            message: "@"
        },
        templateUrl : "msg-welcome-user.html"
    }
});


app.directive('cricket',function(){
    return{
        restrict : 'E',
        link: function(scope){
            scope.teamname = scope.team;
            scope.teamcaptain = scope.captain;
        },
        scope : {
            team : "@",
            captain : "@"
        },
        templateUrl : 'cricketmatch.html'
    }
});

