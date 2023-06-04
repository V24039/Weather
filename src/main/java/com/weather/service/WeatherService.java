package com.weather.service;

import com.weather.dto.WeatherDTO;
import com.weather.entity.Weather;
import com.weather.repo.WeatherRepo;
import com.weather.utilities.WeatherExceptions;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@Service
public class WeatherService {
    @Autowired
    RestTemplate template;
    @Autowired
    private WeatherRepo weatherRepo;

    static final String dateFormat = "dd-mm-yyyy";
    public JSONArray getWeatherData(String zipCode, Date date) throws Exception {
        Optional<Weather> optional = weatherRepo.findById(zipCode);
        String getDate;
        try{
            getDate = new SimpleDateFormat("yyyy-MM-dd").format(date);
        }
        catch (Exception e) {
            throw new Exception("Please pass the date in yyyy-MM-dd format");
        }
        Weather weather = optional.orElse(new WeatherDTO().DTOtoEntity(getLatLong(zipCode)));
        String request = template.getForObject(String.format("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/%f,%f/%s?key=C59KTCHEPH69JVX7N3LD3RC8F&include=days", weather.getLat(), weather.getLongitude(),getDate), String.class);
        weatherRepo.save(weather);
        return new JSONObject(request).getJSONArray("days");
    }

    public WeatherDTO getLatLong(String zipCode) {
        String request = template.getForObject(String.format("http://api.geonames.org/postalCodeLookupJSON?postalcode=%s&maxRows=1&username=venu", zipCode), String.class);

        JSONArray jsonResponse = new JSONObject(request).getJSONArray("postalcodes");
        Float lat = jsonResponse.getJSONObject(0).getBigDecimal("lat").floatValue();
        Float lng = jsonResponse.getJSONObject(0).getBigDecimal("lng").floatValue();

        WeatherDTO weatherDTO = new WeatherDTO();
        weatherDTO.setLongitude(lng);
        weatherDTO.setLat(lat);
        weatherDTO.setPincode(zipCode);
        return weatherDTO;
    }
}
