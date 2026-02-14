import { combineReducers } from "redux";
import top10AnimeReducer from "./slices/top10Anime";
import watchListReducer from "./slices/watchList";

const rootReducer = combineReducers({
  top10Anime: top10AnimeReducer,
  watchList: watchListReducer,
});

export default rootReducer;
