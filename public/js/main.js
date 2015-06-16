App.addRegions({
    content: "#content"
});

console.log("added regions");

App.Layout = Backbone.Marionette.Layout.extend({
    template: "#library-layout",
    regions: {
        search: "#searchBar",
        books: "#bookContainer"
    },
    onShow:function(){
        this.bookCollection = new App.Books();
        this.bookListView = new App.BookListView({'collection': this.bookCollection});
        this.searchView = new App.SearchView();
        this.books.show(this.bookListView);
        this.search.attachView(this.searchView);
    }
});

console.log("added layout");

App.vent.on("search:term", function(searchTerm){
    Backbone.history.navigate("search/" + searchTerm);
});

console.log("added listener");

App.search = function(term){
    console.log("search ", term);
    App.vent.trigger("search:term", term);
};

console.log("added search");

App.on("start", function(){
    App.layout = new App.Layout();
    App.router = new App.Router({'controller': new App.Controller()});
    App.content.show(App.layout);
    Backbone.history.start();
});

console.log("added addInitializer");


