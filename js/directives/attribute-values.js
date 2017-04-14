angular.module('ghop-ui')
.directive('attributeValues', ($compile, $sce) => {

    return {
        restrict: 'E',
        scope: {
            attribute: '=',
            values: '='
        },
        template: '<div compile ng-bind-html="template"></div>',
        link: (scope, element) => {

            scope.$watch('attribute', () => {

                scope.values = [];
                scope.value = undefined;

                let html;
                switch (scope.attribute.type) {
                    case 'FLOAT':
                    case 'INTEGER':
                        html = '<input class="form-control" type="number" ng-model="value" />';
                        break;

                    case 'BOOLEAN':
                        html = '<label><input type="checkbox" ng-model="value" checked /> Target bands <i>should have</i> this attribute set to <code>true</code></label>';
                        scope.value = true;
                        scope.values = [scope.value];
                        break;

                    case 'SET':
                        html = '<select compile class="form-control" ng-model="value" multiple ng-options="it for it in attribute.range.values"></select>'
                        break;

                    case 'STRING':
                    default:
                        html = '<input class="form-control" type="text" ng-model="value" />';
                }

                scope.template = $sce.trustAsHtml(html);
                $compile(element.contents())(scope);
            });

            scope.$watch('value', () => {

                if (scope.value instanceof Array) {
                    scope.values = scope.value;
                } else {
                    scope.values = [scope.value];
                }
            });
        }
    }
});