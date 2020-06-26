'use strict';

// Declare app level module which depends on views, and core components
var app=angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider) {

    $stateProvider
        // .state("main", {
        //     url: "",
        //     templateUrl: "main.html",
        //   //  controller: "listCtrl"
        //   //abstract:true
        // })
        .state("list", {
            url: "list",
            templateUrl: "/product-list/list.html",
            controller: "listCtrl"
        })
        .state("add", {
            url: "add",
            templateUrl: "/add-product/add-product.html",
            controller: "addProductCtrl"
        })
        .state("edit", { 
            url:"edit/:code",
            templateUrl: "/edit-product/edit-product.html",
            controller: "editProductCtrl"
        })
      
   

});
