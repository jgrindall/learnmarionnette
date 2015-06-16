
App.Controller = function(){

};

App.Controller.prototype.search = function(term){
    App.vent.trigger("search:term", term);
};

App.Controller.prototype.defaultSearch = function(term){
    this.search("Neuromarketing");
};

console.log("Controller", App.Controller);