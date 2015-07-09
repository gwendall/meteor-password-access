Router.configure({
  onBeforeAction: function() {
    var context = this;
    if (Access.isGranted()) {
      context.next();
    } else {
      setTimeout(function() {
        context.render("password_required");
      }, 1000);
    }
  }
});

Access = {
  _password: new ReactiveVar("xxx"),
  _welcome: "Password is correct. Welcome!",
  config: function(params) {
    params = params || {};
    if (params.password) Access._password.set(params.password);
    if (params.ttl) Access._ttl = params.ttl;
    if (params.title) Access._title = params.title;
    if (params.welcome) Access._welcome = params.welcome;
  },
  getPassword: function() {
    return Access._password.get();
  },
  setPassword: function(password) {
    Access._password.set(password);
  },
  isGranted: function() {
    return (LocalStore.get("password.access") === Access.getPassword());
  },
  shouldBeGranted: function(password) {
    return (password === Access.getPassword());
  }
};

Session.set("password.access.wrong", null);

Template.password_required.events({
  "submit form": function(e) {
    e.preventDefault();
    var pass = $(e.target).find("input[name='password']").val();
    LocalStore.set("password.access", pass);
    Session.set("password.access.wrong", null);
    if (Access.isGranted()) {
      Session.set("password.access.wrong", null);
      // alert(Access._welcome);
    } else {
      setTimeout(function() {
        Session.set("password.access.wrong", true);
      }, 100);
    }
  }
});

Template.password_required.helpers({
  accessGranted: function() {
    return Access.isGranted();
  },
  accessError: function() {
    return Session.get("password.access.wrong");
  },
  title: function() {
    return Access._title;
  }
});
