export const addCounter = (text) => {
	return {
		type: 'INCREMENT',
		text
	}
};

export const reduceCounter = (text) => {
	return {
		type: 'DECREMENT',
		text
	}
}
