package com.weather.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Weather {
    @Id
    private String pincode;
    private Date for_date;
    private Float lat;
    private Float longitude;
}
