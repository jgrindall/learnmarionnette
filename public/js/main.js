
App.RootView = Mn.LayoutView.extend({
    el: "#content",
    regions: {
        search: new App.SearchRegion(),
        books: new App.BookListRegion()
    },
    onShow:function(){
        this.bookCollection = new App.Books();
        this.bookListView = new App.BookListView({'collection': this.bookCollection});
        this.searchView = new App.SearchView();
        this.getRegion('books').show(this.bookListView);
        this.getRegion('search').show(this.searchView);
    }
});

app.vent.on("search:term", function(searchTerm){
    Backbone.history.navigate("search/" + searchTerm);
});

app.reqres.setHandler("test", function(data){
    return data.num  * 7;
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



