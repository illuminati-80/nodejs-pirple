var server = require('./lib/server');
var workers = require('./lib/workers');
var exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');
var cli = require('./lib/cli');


var app = {};

app.init = function(){

  
  debugger;
  server.init();
  debugger;


  debugger;
  workers.init();
  debugger;

  // CLI start timeout
  debugger;
  setTimeout(function(){
    cli.init();
    debugger;
  },50);
  debugger;

  
  debugger;

  var foo = 1;
  console.log("Just assigned 1 to foo");
  debugger;

  foo++;
  console.log("Just incremented foo");
  debugger;

  foo = foo * foo;
  console.log("Just multipled foo by itself");
  debugger;

  foo = foo.toString();
  console.log("Just changed foo to a string");
  debugger;

  exampleDebuggingProblem.init();
  debugger;

};

app.init();
module.exports = app;
