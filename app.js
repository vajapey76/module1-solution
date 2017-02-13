(function () {
  'use strict';
  // Defining the angular module
  angular.module('lunchChecker', [])

  // Defining the angular controller.
  .controller('LunchCheckerController', LunchCheckerController);

  // Injecting the scope variable through injector to make it minification issue-free
  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController ($scope) {
    var allowedSize = 3; // variable to store the allowed size of menu items.
    $scope.lstLunchItm = ""; // variable to hold list of the lunch items.
    $scope.validationMsg = ""; // validation message.

    $scope.validateItems = function () {
      $scope.validationMsg = checkItems($scope.lstLunchItm, allowedSize);
    }

    // Function that returns a message based on the allowed size of the items.
    function checkItems (string, allowedSize) {
      var stringContents = string.split(",");
      var stringContentSize = stringContents.length;
      var msg = "";

      if (stringContentSize == 0 || string == "") {
        msg = "Please enter data first.";
      } else if(stringContentSize > allowedSize) {
        msg = "Too Much!";
      } else {
        msg = "Enjoy!";
      }

      return msg;
    }

  };
})();
