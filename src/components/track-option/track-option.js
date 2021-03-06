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


angular.module('concentrate')
.directive('trackOption', function() {
    return {
        restrict: 'E',
        scope: {
            track: '<'
        },
        controller: 'TrackOptionController',
        templateUrl: 'src/components/track-option/track-option.template.html',
        link: scope => {

            // Trigger band collection update
            scope.$watch('track.active', (newValue, oldValue) => {

                if (newValue === oldValue) {
                    return;
                }

                if (!newValue) {
                    scope.$emit('updateFocusThenBands');
                } else {
                    scope.$emit('updateBands');
                }
            });
        }
    }
});