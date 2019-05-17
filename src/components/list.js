import React from "react";
import FolioCard from './card';
import ActionButton from  './button';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
	background-color: #dfe1e6;
	border-radius: 3px;
	height: 100%;
	width: 300px;
	padding: 8px;
	margin: 10px;
`;

const List = ({title, cards, listID}) => {
	return (
		<Droppable droppableId={String(listID)}>
			{provided => (
					<ListContainer
						ref={provided.innerRef}
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
						)}
						{provided.placeholder}
						<ActionButton listID={listID}/>
					</ListContainer>
				)}
		</Droppable>
	);
};


export default List;
