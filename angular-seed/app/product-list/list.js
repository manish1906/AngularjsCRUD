app.controller('listCtrl',["$scope","$http","productDataService","$state", function($scope,$http,productDataService,$state) {
  var api="https://localhost:44319/api/product"
  var data=productDataService.getProductData(api);

  //debugger
  data.then(function(response)
  {
     $scope.result = response.data;
     console.log(response)
  })
  //   $http.get('https://localhost:44319/api/product').then(function (response) {
//   $scope.result = response.data;
//   console.log(response)

 

    
//   })
  $scope.delete=function(code){
   // console.log(id)
   productDataService.deleteProduct(api+"/"+code).then(function (response) {        
    console.log(response)  

      // window.location.reload();
    })
  }



  
  }]);
