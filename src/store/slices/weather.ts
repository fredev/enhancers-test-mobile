import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface City {
  id: number;
  name: string;
  weather: CityWeather;
}

interface CityWeather {
  now: Weather;
  hourly: Weather[];
  daily: Weather[];
}

interface Weather {
  id: number;
  temp: number;
  datetime: number;
}

interface CitiesInitialState {
  cities: City[];
  selected: number;
}

const hourly = [
  {id: 1, temp: 18, datetime: 1601269200},
  {id: 3, temp: 18, datetime: 1601272800},
  {id: 2, temp: 18, datetime: 1601276400},
  {id: 3, temp: 18, datetime: 1601280000},
  {id: 1, temp: 18, datetime: 1601283600},
  {id: 3, temp: 18, datetime: 1601287200},
  {id: 2, temp: 18, datetime: 1601290800},
  {id: 1, temp: 18, datetime: 1601294400},
  {id: 1, temp: 18, datetime: 1601298000},
  {id: 3, temp: 18, datetime: 1601301600},
  {id: 2, temp: 18, datetime: 1601305200},
  {id: 3, temp: 18, datetime: 1601308800},
  {id: 1, temp: 18, datetime: 1601312400},
  {id: 3, temp: 18, datetime: 1601316000},
  {id: 2, temp: 18, datetime: 1601319600},
  {id: 1, temp: 18, datetime: 1601323200},
  {id: 1, temp: 18, datetime: 1601326800},
  {id: 3, temp: 18, datetime: 1601330400},
  {id: 2, temp: 18, datetime: 1601334000},
  {id: 3, temp: 18, datetime: 1601337600},
  {id: 1, temp: 18, datetime: 1601341200},
  {id: 3, temp: 18, datetime: 1601344800},
  {id: 2, temp: 18, datetime: 1601348400},
  {id: 1, temp: 18, datetime: 1601352000},
  {id: 1, temp: 18, datetime: 1601355600},
  {id: 3, temp: 18, datetime: 1601359200},
  {id: 2, temp: 18, datetime: 1601362800},
  {id: 3, temp: 18, datetime: 1601366400},
  {id: 1, temp: 18, datetime: 1601370000},
  {id: 3, temp: 18, datetime: 1601373600},
  {id: 2, temp: 18, datetime: 1601377200},
  {id: 1, temp: 18, datetime: 1601380800},
  {id: 1, temp: 18, datetime: 1601384400},
  {id: 3, temp: 18, datetime: 1601388000},
  {id: 2, temp: 18, datetime: 1601391600},
  {id: 3, temp: 18, datetime: 1601395200},
  {id: 1, temp: 18, datetime: 1601398800},
  {id: 3, temp: 18, datetime: 1601402400},
  {id: 2, temp: 18, datetime: 1601406000},
  {id: 1, temp: 18, datetime: 1601409600},
  {id: 1, temp: 18, datetime: 1601413200},
  {id: 3, temp: 18, datetime: 1601416800},
  {id: 2, temp: 18, datetime: 1601420400},
  {id: 3, temp: 18, datetime: 1601424000},
  {id: 1, temp: 18, datetime: 1601427600},
  {id: 3, temp: 18, datetime: 1601431200},
  {id: 2, temp: 18, datetime: 1601434800},
  {id: 1, temp: 18, datetime: 1601438400},
]

const initialState: CitiesInitialState = {
  cities: [
    {
      id: 1,
      name: 'Naples',
      weather: {
        now: {
          id: 1,
          temp: 18,
          datetime: 1601265399,
        },
        hourly,
        daily: [
          {id: 1, temp: 18, datetime: 1601312400},
          {id: 4, temp: 18, datetime: 1601398800},
          {id: 3, temp: 18, datetime: 1601485200},
          {id: 2, temp: 18, datetime: 1601571600},
          {id: 1, temp: 18, datetime: 1601658000},
          {id: 3, temp: 18, datetime: 1601744400},
          {id: 2, temp: 18, datetime: 1601830800},
          {id: 1, temp: 18, datetime: 1601917200},
        ],
      },
    },
    {
      id: 2,
      name: 'Turin',
      weather: {
        now: {
          id: 2,
          temp: 22,
          datetime: 1601265399,
        },
        hourly,
        daily: [
          {id: 2, temp: 22, datetime: 1601312400},
          {id: 3, temp: 22, datetime: 1601398800},
          {id: 1, temp: 22, datetime: 1601485200},
          {id: 2, temp: 22, datetime: 1601571600},
          {id: 3, temp: 22, datetime: 1601658000},
          {id: 1, temp: 22, datetime: 1601744400},
          {id: 2, temp: 22, datetime: 1601830800},
          {id: 3, temp: 22, datetime: 1601917200},
        ],
      },
    },
    {
      id: 3,
      name: 'Rome',
      weather: {
        now: {
          id: 3,
          temp: 20,
          datetime: 1601265399,
        },
        hourly,
        daily: [
          {id: 3, temp: 20, datetime: 1601312400},
          {id: 1, temp: 20, datetime: 1601398800},
          {id: 2, temp: 20, datetime: 1601485200},
          {id: 3, temp: 20, datetime: 1601571600},
          {id: 3, temp: 20, datetime: 1601658000},
          {id: 1, temp: 20, datetime: 1601744400},
          {id: 2, temp: 20, datetime: 1601830800},
          {id: 1, temp: 20, datetime: 1601917200},
        ],
      },
    },
  ],
  selected: 0,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCities(state, action: PayloadAction<City[]>) {
      state.cities = action.payload;
    },
    selectCity(state, action: PayloadAction<number>) {
      state.selected = action.payload;
    },
  },
});

export const {setCities, selectCity} = weatherSlice.actions;

export default weatherSlice.reducer;
