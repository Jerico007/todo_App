import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actions";

export const add_task = (data) => {
  return {
    type: ADD_TASK,
    payLoad: data,
  };
};

export const edit_task = (data) => {
  return {
    type: EDIT_TASK,
    payLoad: data,
  };
};

export const delete_task = (data) => {
  return {
    type: DELETE_TASK,
    payLoad: data,
  };
};
