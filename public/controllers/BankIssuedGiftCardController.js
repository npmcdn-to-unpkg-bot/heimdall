app.controller('BankIssuedGiftCardController', function($scope, $location,$http) {
    $scope.message = 'Routing pages with ngRoute is damn awesome!';
    $scope.submessage = "BANK ISSUED GIFT CARD PAGE";

    console.log($location.path())
    $scope.runJmeterTest = function(){
        console.log("OKOKK!!")

        $http.get("/api/run");
    };


});
