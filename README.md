Meteor Password Access
================

Protect access to an app. Depends on ```iron:router```.

Installation
------------

``` sh
meteor add gwendall:password-access
```

Methods
-------

***Access.config (client)***   

``` javascript
Access.config({
  password: 'xxxx', // Password to enter
  title: 'My super app', // Title of the password form
  welcome: 'You shall get in. Congratulations.', // Message to display on enter
  ttl: 10000 // Delay before enter
});
```
