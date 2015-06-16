App.Book = Backbone.Model.extend({});

App.Books = Backbone.Collection.extend({
    model: App.Book,
    initialize: function(){
        var self = this;
        this.maxResults = 40;
        this.page = 0;
        this.loading = false;
        this.totalItems = null;
        App.vent.on("search:term", function(term){
            self.search(term);
        });
    },
    search: function(searchTerm){
        this.page = 0;
        var self = this;
        this.fetchBooks(searchTerm, function(books){
            self.reset(books);
        });
    },
    fetchBooks: function(searchTerm, callback){
        if(this.loading){
            return true;
        }
        this.loading = true;
        var self = this;
        var query = encodeURIComponent(searchTerm)+'&maxResults='+this.maxResults+'&startIndex='+(this.page * this.maxResults)+'&fields=totalItems,items(id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks)';
        $.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes',
            dataType: 'jsonp',
            data: 'q='+query,
            success: function (res) {
                if(res.totalItems == 0){
                    callback([]);
                    return [];
                }
                if(res.items){
                    self.page++;
                    self.totalItems = res.totalItems;
                    var searchResults = [];
                    _.each(res.items, function(item){
                        var thumbnail = null;
                        if(item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail){
                            thumbnail = item.volumeInfo.imageLinks.thumbnail;
                        }
                        searchResults[searchResults.length] = new App.Book({
                            thumbnail: thumbnail,
                            title: item.volumeInfo.title,
                            subtitle: item.volumeInfo.subtitle,
                            description: item.volumeInfo.description,
                            googleId: item.id
                        });
                    });
                    callback(searchResults);
                    self.loading = false;
                    return searchResults;
                }
                else if (res.error) {
                    self.loading = false;
                }
            }
        });
    }
});



console.log("App.Book", App.Book);
console.log("App.Books", App.Books);

