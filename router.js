Router.configure({
  waitOn: function() {
    return [
      Meteor.subscribe('ideas'),
      Meteor.subscribe('hackers')
    ];
  } 
});

Router.map(function() {
  this.route('/', {
    template: "vote"
  });

  this.route('results', {
    template: "results"
  });

  this.route('addusers', {
    template: "addUsers"
  });

  this.route('addideas', {
    template: "addIdeas"
  });
});