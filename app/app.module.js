angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'isteven-multi-select',
  'auth',
  'profile',
  'posts',
  'resources',
  'attributes'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/views/home.html'
    })
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });
});
