import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
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
        const countries = await Fetch.get("api/countries");
        return countries;
    }
);

export const footballCountryById = createAsyncThunk(
    "auth/footballCountryById",
    async ({
        id
    }) => {
        const foot = await Fetch.get(`api/countries/${id}`);
        return foot;
    }
);

export const footballSlice = createSlice({
    name: "football",
    initialState: {
        footballLeague: [],
        footballCountryes: [],
        country: {},
    },
    reducers: {},
    extraReducers: {
        [footballEvents.fulfilled]: (state, payload) => {
            state.footballLeague = [];
        },
        [footballCountry.fulfilled]: (state, payload) => {
            state.footballCountry = [];
        },
        [footballCountryById.fulfilled]: (state, payload) => {
            state.country = {};
        },
    },
});

export const footballReducers = footballSlice.actions;

export default footballSlice.reducer;