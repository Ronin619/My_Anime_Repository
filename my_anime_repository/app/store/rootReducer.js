import { combineReducers } from "redux";
import top10AnimeReducer from "./slices/top10Anime";

const rootReducer = combineReducers({
  top10Anime: top10AnimeReducer,
});

export default rootReducer;
