// var app = angular.module("myApp", []);
routingDemoApp.controller("mytestCtrl",["$scope","$location","$http",function($scope,$location,$http){
  //$location
  $scope.name = $location.absUrl();
  //$http
  $http.get("http://127.0.0.1:82/AngularJs/html/Customers_MySQL.php")
  .success(function (response) {$scope.person = response.records;});
}]);
//登录控制器
routingDemoApp.controller("loginCtrl",["$scope","$location","$http",function($scope,$location,$http){
  // $scope.getperson = function(){
  //   return {name:$scope.name,password:$scope.password};
  // };
  $scope.loginSubmit = function(){

  };
  // $http.get("http://127.0.0.1:82/AngularJs/html/Customers_MySQL.php")
  // .success(function (response) {$scope.person = response.records;});
}]);
//登录控制器
routingDemoApp.controller("loginsuccessCtrl",["$scope","$location","$http",function($scope,$location,$http){
  $scope.getperson = function(){
    return {name:$scope.name,password:$scope.password};
  };
  // $scope
  // $http.get("http://127.0.0.1:82/AngularJs/html/Customers_MySQL.php")
  // .success(function (response) {$scope.person = response.records;});
}]);
