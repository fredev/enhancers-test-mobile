import {combineReducers} from '@reduxjs/toolkit';
import weather from './slices/weather';

const rootReducer = combineReducers({
  weather,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
