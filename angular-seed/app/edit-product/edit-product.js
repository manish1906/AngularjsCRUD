
app.controller('editProductCtrl',function($scope,$http,productDataService,$state,$stateParams)
{
console.log("Edit Produc data")
var api="https://localhost:44319/api/product";
$scope.code=$stateParams.code;
var data=productDataService.getProductData(api);
//debugger
data.then(function(response)
{
   $scope.result = response.data;
   for (var i = 0; i < $scope.result.length; i++) 
   {
      if ($scope.result[i].productCode == $scope.code)
       {
            var data=$scope.result[i];            
            console.log(data.productName);
              $scope.productName=data.productName ;
              $scope.productBrand=data.productBrand;
              $scope.productPrice=data.productPrice;
              $scope.productDescription=data.productDescription;
            //$scope.productStatus=3;
              $scope.productImage=data.productImage;

      }
    }
  })
 
 $scope.editProduct = function () {
     var editData = {
      productCode:parseInt($scope.code),
      productName: $scope.productName,
      productBrand: $scope.productBrand,
      productPrice:parseInt( $scope.productPrice),
      productDescription: $scope.productDescription,
      productStatus:parseInt ($scope.productStatus),
      productImage:$scope.productImage
      
    }    
   productDataService.editProduct(api, editData).then(function (response) {        
        console.log(response)
        $state.go("list")        
    })
}
});