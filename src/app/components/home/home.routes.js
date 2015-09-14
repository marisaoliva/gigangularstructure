(function() {
    'use strict';

    var Routing = function($stateProvider) {

        $stateProvider
            .state('main.home', {
                url: '/',
                views: {
                    'content' : {
                        template: 'app/components/home/views/home.view.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })

    }

    angular.module('app.home')
        .config(Routing);

})();
