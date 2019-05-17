import { CONSTANTS } from '../actions';

let listID = 3;
let cardID = 3;

const initialState = [
	{
		id: 0,
		title: "Placeholder Title",
		cards: [
			{
				id: 0,
				text: "Placeholders are fun because they can take up as much space as I need."
			},
			{
				id: 1,
				text: "Wow even MORE pleaceholder text. This is a placeholder-palooza!!"
			},
			{
				id: 2,
				text: "HAH! This time there's an EXTRA placeholder. What will you do now?!"
			}

		]
	},
	{
		id: 1,
		title: "Placeholder Title #2",
		cards: [
			{
				id: 0,
				text: "Placeholders are fun because they can take up as much space as I need."
			},
			{
				id: 1,
				text: "Wow even MORE pleaceholder text. This is a placeholder-palooza!!"
			},
			{
				id: 2,
				text: "HAH! This time there's an EXTRA placeholder. What will you do now?!"
			}
		]
	}
]


const listReducer = (state = initialState, action) => {
	switch(action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: listID
			};
			listID++;
			return [...state, newList];

		case CONSTANTS.ADD_CARD:
			const newCard = {
				text: action.payload.text,
				id: cardID
			};

			cardID++;

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
			return newState

	default:
		return state;
	}
};

export default listReducer;
