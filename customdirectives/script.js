
var app = angular.module('myapp',[]);

app.controller("cdirdemo", ["$scope",function($scope){        
   
}]);


app.directive('msgWelcomeUser', function(){
    
    var msgCollection = ["Do your best", "Do you love your job?", "Smile, it cost nothing"];

    var random_num = Math.floor(Math.random() * 3);  // 0-2 
    
    return {
        template : "<span>" + msgCollection[random_num] + "</span>"
    }
});
