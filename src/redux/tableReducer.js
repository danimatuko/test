const initialState = {
	ids: ["1", "2", "3", "4", "5"]
};

const tableReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "DRAG":
			return { ...state, ids: payload };
		default:
			return state;
	}
};

export default tableReducer;
