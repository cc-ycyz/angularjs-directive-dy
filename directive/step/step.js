/**
 * Created by rily on 2017/11/20.
 */
angular.module('directive.step', []).directive('dyStep', function () {
    return {
        restrict: 'E',
        scope: {
            stepList: '=',
            step: '@'
        },
        template: "<ul class=\"dy-step\"><li ng-repeat=\"item in stepList track by $index\" ng-class=\"{active: isActive($index)}\"><span ng-bind=\"item\"></span></li></ul>",
                // `
                // <ul class="dy-step">
                //     <li ng-repeat="item in stepList track by $index" ng-class="{active: isActive($index)}"><span ng-bind="item"></span></li>
                // </ul>
                // `,
        controller: function ($scope) {
            $scope.isActive = function ($index) {
                if (!$scope.step) {
                    $scope.step = '0'
                }
                return parseInt($scope.step) >= $index;
            }
        }
    }
})