export const prepend = (id: string) => {
	return Number(id).toLocaleString('en-us', {
		minimumIntegerDigits: 3,
		useGrouping: false
	});
};
