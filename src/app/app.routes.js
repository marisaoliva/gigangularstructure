(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $locationProvider, $compileProvider, $urlRouterProvider) {

            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'app/core/views/main.layout.view.html',
                    resolve: {
                        translations: function(TranslationsService) {
                            return TranslationsService.get()
                        }
                    }
                })

            // Allow javascript in ng-href
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

            // Activate Mode HTML5
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix = '!';

            /// Default Route
            $urlRouterProvider.otherwise('/');


        })

})();
