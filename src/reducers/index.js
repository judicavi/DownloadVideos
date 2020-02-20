import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import session, { defaultValues as defaultSession } from "./session.reducer";
import video, { defaultValues as defaultVideo } from "./video.reducer";

export const defaultState = {
  video: defaultVideo,
  session: defaultSession
};

createRootReducer = history => {
  return combineReducers({
    video,
    session,
    router: connectRouter(history)
  });
};

export default createRootReducer;
