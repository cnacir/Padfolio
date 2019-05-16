import React, { Component } from 'react';
import List from './components/list';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
	render() {

		const { lists } = this.props;
  	return (
    	<div className="App">
				<div style={styles.appListContainer}>
					{lists.map(list => <List title={list.title} cards={list.cards}/>)}
				</div>
    	</div>
  	);
	};
};

const styles = {
	appListContainer: {
		display: "flex",
		flexDirection: "row"
	}
}

const mapStateToProps = state => ({
	lists: state.lists
})
export default connect(mapStateToProps)(App);
