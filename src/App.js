import React, { Component } from 'react';
import List from './components/list';
import ActionButton from './components/button';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
	render() {

		const { lists } = this.props;
  	return (
    	<div className="App">
				<div style={styles.appListContainer}>
					{lists.map(list =>
						<List
							listID={list.id}
							key={list.id}
							title={list.title}
							cards={list.cards}
						/>
					)}
					<ActionButton list/>
				</div>
    	</div>
  	);
	};
};

const styles = {
	appListContainer: {
		display: "flex",
		flexDirection: "row",
	}
}

const mapStateToProps = state => ({
	lists: state.lists
})
export default connect(mapStateToProps)(App);
