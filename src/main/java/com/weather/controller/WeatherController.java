package com.weather.controller;

import com.weather.dto.WeatherDTO;
import com.weather.service.WeatherService;
import com.weather.utilities.WeatherExceptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WeatherController {
    @Autowired
    WeatherService weatherService;

    @GetMapping(value = "/getWeatherByZipcode", consumes = "application/json")
    public ResponseEntity<List> getWeatherByZipcode(@RequestBody WeatherDTO weatherDTO) throws Exception {
        List map = weatherService.getWeatherData(weatherDTO.getPincode(), weatherDTO.getFor_date()).toList();
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}