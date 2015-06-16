
App.BookView = Mn.ItemView.extend({
    template: "#book-template",
    className:"book",
    onClickDelete:function(){
        this.trigger("child:del:click");
    },
    events:function(){
        return {
            "click button":this.onClickDelete
        }
    }
});

App.TitleView = Mn.ItemView.extend({
    template: "#book-title",
    className:"titleview",
    "tagName":"li"
});

App.BookListView = Mn.CompositeView.extend({
    template: "#book-list-template",
    id: "bookList",
    childView: App.BookView,
    childViewContainer: ".books",
    onChildRendered:function(child){
        console.log("child rendered", child);
    },
    onChildDel:function(child){
        console.log("child del", child);
    },
    childEvents:function(){
        return {
            "render":this.onChildRendered,
            "child:del:click":this.onChildDel
        };
    }
});

App.TitlesListView = Mn.CompositeView.extend({
    template: "#book-list-titles",
    childView: App.TitleView,
    childViewContainer:"ul"
});

App.ControlsView = Mn.ItemView.extend({
    template: "#book-controls"
});

App.SearchView = Mn.ItemView.extend({
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
