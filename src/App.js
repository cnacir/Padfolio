import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './components/list';
import ActionButton from './components/button';
import { connect } from 'react-redux';
import { DragDropContext} from 'react-beautiful-dnd';
import { sort } from "./actions";
import styled from 'styled-components';
import './App.css';

const AppListContainer = styled.div`
	display: flex
	flex-direction: row;
`;


class App extends Component {
	onDragEnd = (result) =>	{
		const { destination, source, draggableId } = result

		if (!destination) {
			return;
		}

		this.props.dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId
			)
		);
	};
	render() {
		const { lists } = this.props;

		return (
			<Router>
				<DragDropContext
					onDragEnd={this.onDragEnd}
				>
					<div className = "App" >
						<AppListContainer>
							{ lists.map( list =>
								<List
									listID = {list.id}
									key = {list.id}
									title = {list.title}
									cards = {list.cards}
								/>
							)}
							<ActionButton list / >
						</AppListContainer>
					</div>
				</DragDropContext>
			</Router>
		);
	};
};

const styles = {
	appListContainer: {

	}
}

const mapStateToProps = state => ( {
	lists: state.lists
} )
export default connect( mapStateToProps )( App );
