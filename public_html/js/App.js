var app = angular.module('article', ['ngRoute']);

app.controller('main', function ($scope) {
    $scope.menu = [{
            titel: "hoofd",
            sub: [{
                    subtitel: "pagina 1",
                    link: "#/page1"
                }, {
                    subtitel: "pagina 2",
                    link: "#/page2"
                }
            ],
            display: false

        }, {
            titel: "extra",
            sub: [{
                    subtitel: "pagina 3",
                    link: "#/page3"
                }],
            display: false
        }];


});

app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'page1.html', controller: 'page1Controller'})
    .when('/page2', {templateUrl: 'page2.html', controller: 'page2Controller'})
    .when('/page3', {templateUrl: 'page3.html'})
    .otherwise({redirectTo: '/'});
});

app.controller('page1Controller', function($scope){
    
});

app.controller('page2Controller', function($scope){
    
});

app.controller('page3Controller', function($scope){
    
});