var React  = require('react');
var ReactDOM  = require('react-dom');
var $ = require('jquery');

let Models = require('./ex/ex2');
let models = new Models();
console.log(models) ;

let ReactView = require('./ex/ex1');

var domready = require('domready')
domready(function(){
    ReactDOM.render(
        <ReactView />,
        document.getElementById('masterView')
    )
});