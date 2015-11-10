App.Models = Backbone.Model.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/posts"
});
App.Views = {};

var PostFormView = Backbone.View.extend({
  template: _.template($('#blogTemplate').html()),
  events: {
    'click .submitBtn': 'handleSubmit'
  },
  render: function() {
    this.$el.html(this.template());
  },

  handleSubmit: function(event){
    var title = this.$('.title').val();
    var body = this.$('.body').val();
    console.log('lets do variables', title, body);

  }
});

var view = new PostFormView();
view.render();
$('main').html(view.el);
