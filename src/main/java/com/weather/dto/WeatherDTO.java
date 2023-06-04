package com.weather.dto;

import com.weather.entity.Weather;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class WeatherDTO {
    private String pincode;
    private Date for_date;
    private Float lat;
    private Float longitude;

    public WeatherDTO entityToDto(Weather weather) {

        WeatherDTO weatherDTO = new WeatherDTO();
        weatherDTO.setPincode(weather.getPincode());
        weatherDTO.setLat(weatherDTO.getLat());
        weatherDTO.setLongitude(weatherDTO.getLongitude());
        return weatherDTO;
    }

    public Weather DTOtoEntity(WeatherDTO weatherDTO) {

        Weather weather = new Weather();
        weather.setPincode(weatherDTO.getPincode());
        weather.setLat(weatherDTO.getLat());
        weather.setLongitude(weatherDTO.getLongitude());
        return weather;
    }
}

