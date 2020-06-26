app.service("productDataService",  function ($http)
    {
   
   
        this.getProductData = function (api)
        {
                    //debugger
                return $http.get(api)
        }
        this.deleteProduct = function (api)
        {
            //debugger
        return $http.delete(api)
        }
        this.addProduct = function (api,data)
        {
            //debugger
        return $http.post(api,data)
        }
        this.editProduct = function (api,data)
        {
            //debugger
        return $http.put(api,data)
        }
    }

);