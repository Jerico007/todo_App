import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../Action/actions";

const initial = {
  data: [],
};

const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, data: [...state.data, action.payLoad] };
    case EDIT_TASK:
      const { id, text } = action.payLoad;

      const newData = [...state.data];

      //Editing array
      for (let i = 0; i < newData.length; i++) {
        if (Number(newData[i].id) === Number(id)) {
          newData[i].text = text;
          break;
        }
      }
      return { ...state, data: newData};
    case DELETE_TASK:
      const newArr = state.data.filter(
        (val) => Number(val.id) !== Number(action.payLoad)
      );
      return {...state , data : newArr};
    default:
      return state;
  }
};

export default todoReducer;
