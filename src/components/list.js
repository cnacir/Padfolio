import React from "react";
import FolioCard from './card';
import ActionButton from  './button';

const List = ({title, cards, listID}) => {
	return(
		<div style={styles.listContainer}>
			<h4>{title}</h4>
			{ cards.map(card =>
				<FolioCard
					key={card.id}
					text={card.text}
				/>
			)}
			<ActionButton listID={listID}/>
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
