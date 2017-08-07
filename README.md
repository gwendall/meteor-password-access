```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor Password Access
================

Protects access to an app by hiding all templates before the password is correct. Depends on ```iron:router```.

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
