import { createReducer } from "redux-starter-kit";
import * as Actions from "../actions";

const defaultValues = {
  loadVideos: false,
  searchText: ""
};
export const video = createReducer(defaultValues, {
  [Actions.WriteText]: updateText
});

const updateText = (state, { payload }) => {
  state.searchText = payload;
};
