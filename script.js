$(document).ready(function() {

var NewToDo = Backbone.Model.extend({
	defaults: {
		title:'',
		completed: false
	},

	toggle: function(){
		var currentStatus = this.get('completed');
		this.set({completed: !currentStatus});
	}
});

var ToDoView = Backbone.View.extend({
  // el: '.todos-list',
   initialize: function() {
   	this.listenTo(this.model, 'change', this.render);
   	$("ul.todos-list").append(this.el);
   },

	tagName: 'li',
	template: _.template($('#todo-template').html()),
	render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
  	'click .toggle':function(){this.model.toggle();}
  }

});


$('input#new-todo').on('keydown',function(e){
    if (e.which == 13) {
        e.preventDefault();
		var todoItem = new ToDoView(
			{
				model: new NewToDo({
				title: $('input#new-todo').val()
			})
		});

		todoItem.render();
    }
});

});