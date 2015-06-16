App.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        '':                         'defaultSearch',
        'search/:searchTerm':       'search',
        '*anythingElse':            'defaultSearch'
    }
});

console.log("Router", App.Router);

