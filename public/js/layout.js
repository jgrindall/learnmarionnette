App.RootView = Mn.LayoutView.extend({
    el: "#content",
    regions: {
        search: "#searchBar",
        books: "#bookContainer",
        titles: "#titlesContainer"
    },
    onShow:function(){
        this.bookCollection = new App.Books();
        this.bookListView = new App.BookListView({'collection': this.bookCollection});
        this.titlesView = new App.TitlesView({'collection': this.bookCollection});
        this.searchView = new App.SearchView();
        this.getRegion('books').show(this.bookListView);
        this.getRegion('search').show(this.searchView);
        this.getRegion('titles').show(this.titlesView);
    }
});

App.TitlesView = Mn.LayoutView.extend({
    template:"#list-tpl",
    regions: {
        control: "#controls",
        list: "#list"
    },
    onShow:function(){
        this.listView = new App.TitlesListView({'collection':this.options.collection});
        this.controlsView = new App.ControlsView();
        this.getRegion('list').show(this.listView);
        this.getRegion('control').show(this.controlsView);
    }
});
