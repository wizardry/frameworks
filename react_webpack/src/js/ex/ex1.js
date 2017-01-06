var React = require('react');
var ReactDOM = require('react-dom');

module.exports = class MainWrapper extends React.Component {
    render(){
		console.log('hoge')
        return(<div className="exdom">hello world</div>);
    }
}