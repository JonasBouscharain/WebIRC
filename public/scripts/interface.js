let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');

const MyPage = React.createClass({
  render : function() {
    return (
    	<div id='header'>
    		<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
		</div>
    );
  },
});

ReactDOM.render(
  <MyPage />,
  document.getElementById('example')
);