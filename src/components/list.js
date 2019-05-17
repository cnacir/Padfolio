import React from "react";
import FolioCard from './card';
import ActionButton from  './button';
import { Droppable } from 'react-beautiful-dnd';

const List = ({title, cards, listID}) => {
	return (
		<Droppable droppableId={String(listID)}>
			{provided => (
					<div
						ref={provided.innerRef}
						style={styles.listContainer}
						{...provided.droppableProps}
					>
						<h4>{title}</h4>
						{cards.map((card, idx) =>
							<FolioCard
								key={card.id}
								text={card.text}
								id={card.id}
								index={idx}
							/>
						)};
						<ActionButton listID={listID}/>
						{provided.placeholder}
					</div>
				)}
		</Droppable>
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
