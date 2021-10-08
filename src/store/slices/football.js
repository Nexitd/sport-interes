import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetch from "../../api/fetch";

export const footballEvents = createAsyncThunk(
  "auth/footballEvents",
  async () => {
    const foot = await Fetch.get("api/football_events");
    return foot;
  }
);

export const footballCountry = createAsyncThunk(
  "auth/footballCountry",
  async () => {
    const countries = await Fetch.get("api/county");
    
    return countries;
  }
);

export const footballTeams = createAsyncThunk(
  "auth/footballCountry",
  async () => {
    const countries = await Fetch.get("football/football_teams?page=1&itemsPerPage=10");
    
    return countries;
  }
);

export const footballCountryById = createAsyncThunk(
  "auth/footballCountryById",
  async ({ id }) => {
    const foot = await Fetch.get(`api/countries/${id}`);
    return foot;
  }
);

export const getFootballGames = createAsyncThunk("football/footballGames", async () => {
  const foot = await Fetch.get("football/football_games?page=1&itemsPerPage=5");

  return foot;
});

export const footballSlice = createSlice({
  name: "football",
  initialState: {
    footballLeague: [],
    footballCountryes: [],
    footballTeam: [],
    footballGames: [],
    country: {},
  },
  reducers: {},
  extraReducers: {
    [footballEvents.fulfilled]: (state, payload) => {
      state.footballLeague = [];
    },
    [footballCountry.fulfilled]: (state, action) => {
      state.footballCountryes = action.payload;
    },
    [footballCountryById.fulfilled]: (state, payload) => {
      state.country = {};
    },
    [footballTeams.fulfilled]: (state, action) => {
      state.footballTeam = action.payload;
    },
    [getFootballGames.fulfilled]: (state, action) => {
      state.footballGames = action.payload;
    },
  },
});

export const footballReducers = footballSlice.actions;

export default footballSlice.reducer;
