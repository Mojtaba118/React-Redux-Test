const mathReducer = (
  state = {
    result: 1,
    oldValues: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        result: state.result + action.payload,
        oldValues: [...state.oldValues, action.payload]
      };
      break;
    case "SUB":
      state = {
        result: state.result - action.payload,
        oldValues: [...state.oldValues, action.payload]
      };
      break;
  }
  return state;
};

export default mathReducer;
