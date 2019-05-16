const startingState = [
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


const listReducer = (state = startingState, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

export default listReducer;
