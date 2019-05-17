import { CONSTANTS } from '../actions';

let listID = 3;
let cardID = 6;

const initialState = [
	{
		id: 'list-0',
		title: "Placeholder Title",
		cards: [
			{
				id: 'card-0',
				text: "Placeholders are fun because they can take up as much space as I need."
			},
			{
				id: 'card-1',
				text: "Wow even MORE pleaceholder text. This is a placeholder-palooza!!"
			},
			{
				id: 'card-2',
				text: "HAH! This time there's an EXTRA placeholder. What will you do now?!"
			}

		]
	},
	{
		id: 'list-1',
		title: "Placeholder Title #2",
		cards: [
			{
				id: 'card-3',
				text: "Placeholders are fun because they can take up as much space as I need."
			},
			{
				id: 'card-4',
				text: "Wow even MORE pleaceholder text. This is a placeholder-palooza!!"
			},
			{
				id: 'card-5',
				text: "HAH! This time there's an EXTRA placeholder. What will you do now?!"
			}
		]
	}
]


const listReducer = (state = initialState, action) => {
	switch(action.type) {
		//Add a list to the board
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: `list-${listID}`
			};
			listID++;
			return [...state, newList];

		//Add a card to the list
		case CONSTANTS.ADD_CARD: {
			const newCard = {
				text: action.payload.text,
				id: `card-${cardID}`
			};

			cardID++;

			//Working with a copy of original list to prevent mutation
			const newState = state.map(list => {
				if(list.id === action.payload.listID) {
					return {
						...list,
						cards: [...list.cards, newCard]
				}
				} else {
					return list
				};
			});
			return newState;
		}

		//Make drags persist through refresh
		case CONSTANTS.DRAG_HAPPENED: {
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				draggableId
			} = action.payload;

			//Check if item is being dragged within the same list
			const newState = [...state];

			if (droppableIdStart === droppableIdEnd) {
				const list = state.find(list => droppableIdStart === list.id)
				const card = list.cards.splice(droppableIndexStart, 1)
				list.cards.splice(droppableIndexEnd, 0, ...card)
			}

			if (droppableIdStart !== droppableIdEnd) {
				const listStart = state.find(list => droppableIdStart === list.id)

				const card = listStart.cards.splice(droppableIndexStart, 1)
				
				const listEnd = state.find(list => droppableIdEnd === list.id)

				listEnd.cards.splice(droppableIndexEnd, 0, ...card)
			}
			return newState
		}

	default:
		return state;
	}
};

export default listReducer;
