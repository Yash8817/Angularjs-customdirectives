
var app = angular.module('myapp',[]);

app.controller("cdirdemo", ["$scope",function($scope){           
    var msgCollection = ["Do your best", "Do you love your job?", "Smile, it cost nothing"];
    var random_num = Math.floor(Math.random() * 3);   
    $scope.randomMessage = msgCollection[random_num];
}]);


app.directive('parentElement', function(){   
    return {
        restrict : 'E',
        transclude: true,
        link : function(scope){
            scope.countryname = scope.country;   
            scope.msg = scope.message;         
        },
        scope : {
            country : "@",
            message : "@",
        },
        templateUrl : "parentelement.html"
    }
});

app.directive('childElement',function(){
    return {
        restrict : 'E',
        link : function(scope){
            scope.statename = scope.state;
        },
        scope : {
            state : "@"
        },
        templateUrl : 'childelement.html'
    }
});
