var toggleWatch = {};

toggleWatch.Status = (id) => {
	return {
		type: 'TOGGLE_WATCH',
		id: parseInt(id)
	};
}

export default toggleWatch;