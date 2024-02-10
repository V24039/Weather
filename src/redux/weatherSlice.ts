import { createAction, createReducer } from "@reduxjs/toolkit";

const WEATHER_DETAILS_REQUEST = "WEATHER_DETAILS_REQUEST";
const WEATHER_DETAILS_SUCCESS = "WEATHER_DETAILS_SUCCESS";
const WEATHER_DETAILS_ERROR = "WEATHER_DETAILS_ERROR";

const getWeatherDetailsRequest = createAction(WEATHER_DETAILS_REQUEST);
const getWeatherDetailsSuccess = createAction(WEATHER_DETAILS_SUCCESS);
const getWeatherDetailsError = createAction(WEATHER_DETAILS_ERROR);

const initialState = {
  weatherDetails: {},
  wetherAPIMeta: {
    pending: false,
    success: false,
    error: false,
  },
};

export const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getWeatherDetailsRequest, (state, action) => {
      state.wetherAPIMeta = {
        pending: true,
        success: false,
        error: false,
      };
    })
    .addCase(getWeatherDetailsSuccess,(state, action)=>{
      state.wetherAPIMeta = {
        pending: false,
        success: true,
        error: false,
      };
    })
    .addCase(getWeatherDetailsError,(state, action)=>{
      state.wetherAPIMeta = {
        pending: false,
        success: false,
        error: true,
      };
    });
});


