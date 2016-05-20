// var app = angular.module("myApp", []);
routingDemoApp.controller("myCtrl",["$scope",function($scope){
  $scope.persons =[
  {id:1, fName:'Hege', lName:"Pege" },
  {id:2, fName:'Kim',  lName:"Pim" },
  {id:3, fName:'Sal',  lName:"Smith" },
  {id:4, fName:'Jack', lName:"Jones" },
  {id:5, fName:'John', lName:"Doe" },
  {id:6, fName:'Peter',lName:"Pan" }
  ];
  //删除单个记录
  $scope.delete = function(id){
    var len = $scope.persons.length;
    for(var i=id-1;i<len-1;i++){
      $scope.persons[i+1].id -= 1;
      $scope.persons[i] = $scope.persons[i+1];
    }
    $scope.persons.pop();
  };
}]);
