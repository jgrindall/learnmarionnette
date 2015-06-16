
app.vent.on("search:term", function(searchTerm){
    Backbone.history.navigate("search/" + searchTerm);
});

app.search = function(term){
    app.vent.trigger("search:term", term);
};

app.on("start", function(){
    app.root = new App.RootView();
    app.root.onShow();
    app.router = new App.Router({'controller': new App.Controller()});
    Backbone.history.start();
});

var globalChannel = Backbone.Wreqr.radio.channel('global');

var userChannel = Backbone.Wreqr.radio.channel('user');

userChannel.commands.setHandler("commandname", function(data){
    console.log("user command");
});

userChannel.reqres.setHandler("requestname", function(data){
    console.log("user requestname");
});

globalChannel.vent.on('trigger1', function(){
    console.log("global channel trigger1");
});

globalChannel.commands.execute('commandname' );
globalChannel.reqres.request('requestname' );
globalChannel.vent.trigger('trigger1');
userChannel.commands.execute('commandname');
userChannel.reqres.request('requestname');
userChannel.vent.trigger('trigger2');

