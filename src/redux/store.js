import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userProfileReducer from "./user-profile/user-profile.reducer";

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
