import React from "react";
import FolioCard from './card';
import ListButton from  './button';

const List = ({title, cards}) => {
	return(
		<div style={styles.listContainer}>
			<h4>{title}</h4>
			{ cards.map(card => <FolioCard card={card.id} text={card.text}/>)}
			<ListButton/>
		</div>
	);
};

const styles = {
	listContainer: {
		backgroundColor: "#dfe1e6",
		borderRadius: 3,
		height: "100%",
		width: 300,
		padding: 8,
		margin: 10
	}
};

export default List;
