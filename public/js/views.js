App.BookView = Backbone.Marionette.ItemView.extend({
    template: "#book-template"
});

App.BookListView = Backbone.Marionette.CompositeView.extend({
    template: "#book-list-template",
    id: "bookList",
    childView: App.BookView,
    childViewContainer: ".books"
});

App.SearchView = Backbone.View.extend({
	events: {
		'change #searchTerm': 'search'
	},
	search: function() {
		var searchTerm = this.$('#searchTerm').val().trim();
  		app.vent.trigger("search:term", searchTerm);
	}
});
