tareasListApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('agregarTarea', {
      url: "/",
      templateUrl: "partials/agregar_tarea.html"
    })
    .state('editarTarea', {
      url: "/tarea/:id",
      templateUrl: "partials/editar_tarea.html"
    });

    $urlRouterProvider.otherwise("/");

});
