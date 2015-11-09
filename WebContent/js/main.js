// create our clock...
var ractive = new BaseView({
  el: demo,
  data: {
    datetime: new Date()
  }
});

// ...then update it once a second
setInterval( function () {
  ractive.set( 'datetime', new Date() );
}, 1000 );