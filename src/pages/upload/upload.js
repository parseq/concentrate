/*******************************************************************************
 *     Copyright 2016-2017 the original author or authors.
 *     
 *     This file is part of CONC.
 *     
 *     CONC. is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *     
 *     CONC. is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *     GNU Affero General Public License for more details.
 *     
 *     You should have received a copy of the GNU Affero General Public License
 *******************************************************************************/


/**
 * Can't use fat arrow syntax in controller definition due to:
 * https://github.com/angular/angular.js/issues/14814
 */
angular.module('concentrate')
.controller('UploadPageController', ['$log', '$scope', '$state', '$rootScope', 'DataSourceTypeService', 'TrackService',
        function($log, $scope, $state, $rootScope, DataSourceTypeService, TrackService) {

    $log.debug('Upload page view activated');

    DataSourceTypeService.discoverTypes();

    $scope.upload = () => {
        TrackService.createFromFile($scope.name, $scope.type, $scope.file);
        $state.go('browser');
    };

    $scope.ready = () => $scope.name && $scope.type && $scope.file;
    $scope.goBack = () => $state.go('browser');

    $scope.$watch('availableDataSourceTypes', () => $scope.types = $rootScope.availableDataSourceTypes);
}]);