import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./../actions";

export const defaultValues = {
  videos: [],
  searchText: ""
};

const updateText = (state, { payload }) => {
  state.searchText = payload;
};

const video = createReducer(defaultValues, {
  [Actions.WriteText]: updateText
});

export default video;
