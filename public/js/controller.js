
App.Controller = Mn.Controller.extend({});

App.Controller.prototype.search = function(term){
    app.vent.trigger("search:term", term);
};

App.Controller.prototype.defaultSearch = function(term){
    this.search("Neuromarketing");
};
