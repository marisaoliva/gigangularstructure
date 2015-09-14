(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.core', 'app.home'
    ])

        .run(function($rootScope, $templateCache, TEMPLATE_CACHE) {
            $rootScope.title = 'Angular Example Project';

            if (!TEMPLATE_CACHE) {
                $templateCache.removeAll();
            }

        })



})();
