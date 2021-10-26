import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetch from "../../api/fetch";

export const getFootballEventsByCountryName = createAsyncThunk(
  "football/getFootballEventsByCountryName",
  async (countryName) => {
    const event = await Fetch.get(
      `football/football_events?page=1&itemsPerPage=30&country.name=${countryName}`
    );
    return event;
  }
);

export const getFootballEventsByIdTourir = createAsyncThunk(
  "football/getFootballEventsByIdTourir",
  async (id) => {
    const event = await Fetch.get(`football/football_events/${id}`);
    return event;
  }
);

export const footballSlice = createSlice({
  name: "football",
  initialState: {
    loading: false,
    eventsByCountry: [],
    selectEvent: {},
  },
  reducers: {
    pushFilteredLeagues: (state, action) => {
      state.filteredLeagues.push(action.payload);
    },
  },
  extraReducers: {
    [getFootballEventsByCountryName.fulfilled]: (state, action) => {
      state.eventsByCountry = action.payload;
      state.loading = false;
    },
    [getFootballEventsByCountryName.pending]: (state) => {
      state.loading = true;
    },
    [getFootballEventsByIdTourir.fulfilled]: (state, action) => {
      state.selectEvent = action.payload;
    },
  },
});

export const { pushFilteredLeagues } = footballSlice.actions;

export default footballSlice.reducer;
