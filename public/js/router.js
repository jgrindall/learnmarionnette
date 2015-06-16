App.Router = Mn.AppRouter.extend({
    appRoutes: {
        '':                         'defaultSearch',
        'search/:searchTerm':       'search',
        '*anythingElse':            'defaultSearch'
    }
});
