App.RootView = Marionette.LayoutView.extend({
    el: "#content",
    regions: {
        search: "#searchBar",
        books: "#bookContainer"
    },
    show:function(){
        this.bookCollection = new App.Books();
        this.bookListView = new App.BookListView({'collection': this.bookCollection});
        this.searchView = new App.SearchView();
        this.books.show(this.bookListView);
        this.search.attachView(this.searchView);
    }
});

app.vent.on("search:term", function(searchTerm){
    Backbone.history.navigate("search/" + searchTerm);
});

app.search = function(term){
    console.log("search ", term);
    app.vent.trigger("search:term", term);
};

app.on("start", function(){
    app.rootView = new App.RootView();
    app.rootView.show();
    app.router = new App.Router({'controller': new App.Controller()});
    Backbone.history.start();
});



