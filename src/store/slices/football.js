import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetch from "../../api/fetch";

export const footballEvents = createAsyncThunk(
  "auth/footballEvents",
  async () => {
    const foot = await Fetch.get("football/football_events");
    return foot;
  }
);

export const footballCountry = createAsyncThunk(
  "auth/footballCountry",
  async () => {
    const countries = await Fetch.get("api/countries?page=1&itemsPerPage=30");
    return countries;
  }
);

export const footballTeams = createAsyncThunk(
  "auth/footballCountry",
  async () => {
    const countries = await Fetch.get(
      "football/football_teams?page=1&itemsPerPage=10"
    );
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

export const getFootballGames = createAsyncThunk(
  "football/footballGames",
  async () => {
    const foot = await Fetch.get(
      "football/football_games?page=1&itemsPerPage=5"
    );
    return foot;
  }
);

export const getFootballEventsByCountryName = createAsyncThunk("football/getFootballEventsByCountryName", async (countryName) => {
  const event = await Fetch.get(`football/football_events?page=1&itemsPerPage=30&country.name=${countryName}`);
  console.log(event);
  return event;
});

export const footballSlice = createSlice({
  name: "football",
  initialState: {
    footballLeague: [],
    footballCountryes: [],
    footballTeam: [],
    footballGames: [],
    country: {},
    filteredLeagues: [],
    eventsByCountry: [],
  },
  reducers: {
    pushFilteredLeagues: (state, action) => {
      state.filteredLeagues.push(action.payload);
    },
  },
  extraReducers: {
    [footballEvents.fulfilled]: (state, action) => {
      state.footballLeague = action.payload;
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
    [getFootballEventsByCountryName.fulfilled]: (state, action) => {
      state.eventsByCountry = action.payload;
    }
  },
});

export const { pushFilteredLeagues } = footballSlice.actions;

export default footballSlice.reducer;
