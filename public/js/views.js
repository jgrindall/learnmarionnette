App.BookView = Backbone.Marionette.ItemView.extend({
    template: "#book-template"
});

App.BookListView = Backbone.Marionette.CompositeView.extend({
    template: "#book-list-template",
    id: "bookList",
    childView: App.BookView,
    childViewContainer: ".books"
});

App.SearchView = Backbone.Marionette.ItemView.extend({
    template: "#book-search-template",
    initialize:function(){
        console.log("init SearchView");
    },
	events: {
		'change #searchTerm': 'search'
	},
	search: function() {
        console.log("search...");
		var searchTerm = this.$('#searchTerm').val().trim();
  		app.vent.trigger("search:term", searchTerm);
        var test = app.reqres.request("test", {"num":11});
        console.log("test:", test);
	}
});
