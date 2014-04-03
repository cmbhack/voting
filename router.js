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
});