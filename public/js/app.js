define(['angular'], function(angular) {
    angular.module('jiwei', [])
        .controller('jiweiControl', ['$scope', function ($scope) {
            $scope.name = 'Change the name';
        }]);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['jiwei']);
    });
});

