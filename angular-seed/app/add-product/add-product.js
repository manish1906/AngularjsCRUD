     

app.controller('addProductCtrl',function($scope,$http,productDataService,$state)
{
console.log("Add Produc data")
var api="https://localhost:44319/api/product"
  $scope.addProduct = function () {
    var addData = {

      productName: $scope.productName,
      productBrand: $scope.productBrand,
      productPrice:parseInt( $scope.productPrice),
      productDescription: $scope.productDescription,
      productStatus:parseInt ($scope.productStatus),
      productImage:$scope.productImage
     
      
     
      
    };
    
    productDataService.addProduct(api, addData).then(function (response) {
        
        console.log(response)
        $state.go("list")
        
    })
}




});