App.BookView = Backbone.Marionette.ItemView.extend({
    template: "#book-template"
});

App.BookListView = Backbone.Marionette.CompositeView.extend({
    template: "#book-list-template",
    id: "bookList",
    itemView: App.BookView,
    appendHtml: function(collectionView, itemView){
        collectionView.$(".books").append(itemView.el);
    }
});

App.SearchView = Backbone.View.extend({
	el: "#searchBar",
	events: {
		'change #searchTerm': 'search'
	},
	search: function() {
		var searchTerm = this.$('#searchTerm').val().trim();
  		App.vent.trigger("search:term", searchTerm);
	}
});

console.log("App.BookView", App.BookView);
console.log("App.BookListView", App.BookListView);
console.log("App.SearchView", App.SearchView);
