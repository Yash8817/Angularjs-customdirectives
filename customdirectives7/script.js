
var app = angular.module('myapp',[]);

app.controller("cdirdemo", ["$scope","$http",function($scope,$http){           
    $scope.varPriceLow="priceLow";
    $scope.varPriceHigh="priceHigh";

    $scope.getAllProducts = function(){
        $http({
            url : 'http://localhost/AngularJSTraining/php/getallproducts.php',
            method : 'GET',            
        })
        .then(function(response){
            $scope.products = response.data; //data is builtin variable that contains all the data received from api
        },function(response){
            alert("Error in AJAX Call");
        });
    };
    $scope.getAllProducts();

}]);


app.directive('stockitem', function(){      
    return {        
        link : function(scope){
            scope.product = scope.item;
            scope.promo = scope.offer;
        },
        scope : {
            item : "=",
            offer : "@"
        },
        templateUrl : "stockitem.html",
        controller : ["$scope", "$http", function($scope, $http){

            $scope.clickme = function(pid){

                alert("Call another api here for " + pid);               

                $http({
                    url : 'http://localhost/AngularJSTraining/php/getproduct.php',
                    method : 'POST',            
                    data : {
                        'prodid' : pid
                    }
                })

                .then(function(response){
                    $scope.product = response.data; //data is builtin variable that contains all the data received from api
                    console.log(response.data);
                    alert($scope.product[0].display_name);
                },function(response){
                    alert("Error in AJAX Call");
                });
            
            
            }

        }]
    }
});


