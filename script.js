$(document).ready(function() {

var NewToDo = Backbone.Model.extend({
	defaults: {
		title:'',
		completed: false
	}
});

var ToDoView = Backbone.View.extend({
  // el: '.todos-list',
	tagName: 'li',
	className: '.todos-list',
	template: _.template($('#todo-template').html()),
	render: function() {
    this.$el.append(this.template(this.model.toJSON()));
  }
});


$('input#new-todo').on('keydown',function(e){
    if (e.which == 13) {
        e.preventDefault();
        alert(todoItem);
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