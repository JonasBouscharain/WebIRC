let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');

const Header = React.createClass({
  render : function() {
    return (
    	<div id='header'>
    		<AppBar title="Application de Chat !" iconClassNameRight="muidocs-icon-navigation-expand-more" />
		</div>
    );
  },
});

const Footer = React.createClass({
  render : function() {
    return (
    	<div id='footer'>
    		<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
		</div>
    );
  },
});

const LeftSide = React.createClass({
  render : function() {
    return (
    	<div id='leftSide'>
    		<List>
			  <ListItem primaryText="Inbox" />
			  <ListItem primaryText="Starred" />
			  <ListItem primaryText="Sent mail" />
			  <ListItem primaryText="Drafts" />
			  <ListItem primaryText="Inbox" />
			</List>
			<ListDivider />
			<List>
			  <ListItem primaryText="All mail" />
			  <ListItem primaryText="Trash" />
			  <ListItem primaryText="Spam" />
			  <ListItem primaryText="Follow up" />
			</List>
		</div>
    );
  },
});

const RightSide = React.createClass({
  render : function() {
    return (
    	<div id='rightSide'>
    		<List>
			  <ListItem primaryText="Inbox" />
			  <ListItem primaryText="Starred" />
			  <ListItem primaryText="Sent mail" />
			  <ListItem primaryText="Drafts" />
			  <ListItem primaryText="Inbox" />
			</List>
			<ListDivider />
			<List>
			  <ListItem primaryText="All mail" />
			  <ListItem primaryText="Trash" />
			  <ListItem primaryText="Spam" />
			  <ListItem primaryText="Follow up" />
			</List>
		</div>
    );
  },
});

const MainContent = React.createClass({
  render : function() {
    return (
    	<div id='mainContent'>
    		<p>Am i the content ?</p>
		</div>
    );
  },
});

const Content = React.createClass({
  render : function() {
    return (
    	<div id='main'>
    		<LeftSide />
    		<MainContent />
    		<RightSide />
		</div>
    );
  },
});

const MyPage = React.createClass({
  render : function() {
    return (
    	<div id='page'>
    		<Header />
    		<Content />
		</div>
    );
  },
});

ReactDOM.render(
  <MyPage />,
  document.getElementById('content')
);