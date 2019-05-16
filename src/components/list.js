import React from "react";
import FolioCard from './card';

const List = ({title, cards}) => {
	return(
		<div style={styles.listContainer}>
			<h4>{title}</h4>
			{ cards.map(card => <FolioCard text={card.text}/>)}
		</div>
	);
};

const styles = {
	listContainer: {
		backgroundColor: "#dfe1e6",
		borderRadius: 3,
		width: 300,
		padding: 8,
		margin: 10
	}
};

export default List;
