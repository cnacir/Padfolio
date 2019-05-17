import React from "react";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';


class ActionButton extends React.Component {

	state = {
		formIsOpen: false,
		text: ""
	};

	openForm = () => {
		this.setState({formIsOpen: true});
	};

	closeForm = () => {
		this.setState({formIsOpen: false});
	};

	inputChange = e => {
		this.setState({
			text: e.target.value
		});
	};

	addNewList = () => {
		const { dispatch } = this.props;
		const { text } = this.state;

		if (text) {
			this.setState({
				text: ""
			});
			dispatch(addList(text))
		};

		return
	};

	addNewCard = () => {
		const { dispatch, listID } = this.props;
		const { text } = this.state;

		if (text) {
			this.setState({
				text: ""
			});
			dispatch(addCard(listID, text))
		};

		return
	};

	renderForm = () => {
		const { list } = this.props;

		const placeholder = list ? "Enter list title" : "Enter card title"

		const buttonName = list ? "Add List" : "Add Card"

		return <div>
						<Card style={{
							minHeight: 80,
							padding: "6px 8px 2px",
							marginTop: 10,

						}}>
							<TextArea
								placeholder={placeholder}
								autoFocus
								onBlur={this.closeForm}
								value ={this.state.text}
								onChange={this.inputChange}
								style={{
									resize: "none",
									width: "100%",
									outline: "none",
									border: "none",
									overflow: "hidden",
									paddingBottom: 50
								}}>
							</TextArea>
						</Card>
						<div style={styles.formButtons}>
							<Button
							onMouseDown={list ? this.addNewList : this.addNewCard}
							variant="contained"
							style={{color: "white", backgroundColor: "#5aac44"}}>
							{buttonName}
							</Button>
							<Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
						</div>
					</div>
			};

	renderAddButton = () => {
		const { list } = this.props;

		const addText = list ? "Add another list" : "Add another card";
		const addOpacity = list ? 1 : 0.5;
		const addColor = list ? "white" : "inherit";
		const addBGColor = list ? "rgba(0,0,0,.12)" : "inherit";
		const addPadding = list ? 10 : 0

		return(
			<div
				onClick={this.openForm}
				style={{
					...styles.buttonFlex,
					opacity: addOpacity,
					color: addColor,
					backgroundColor: addBGColor,
					padding: addPadding
				}}>
					<Icon>add</Icon>
					<p>{addText}</p>
			</div>
		);
	};

	render() {
		return this.state.formIsOpen ? this.renderForm() : this.renderAddButton();
	};
};

const styles = {
	buttonFlex: {
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		height: 20,
		width: 275,
		margin: 5,
		marginTop: 10,
		borderRadius: 3
	},
	formButtons: {
		marginTop: 8,
		display: "flex",
		alignItems: "center",
	}
};
export default connect()(ActionButton);
