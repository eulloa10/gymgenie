package com.gymgenie.gymgenie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeminiApiService {

    @Autowired
    private RestTemplate restTemplate;

    public String fetchDataFromExternalApi() {
        // Replace "https://api.example.com/data" with the actual URL of the external API
        String apiUrl = "https://swapi.dev/api/people/1/";
        return restTemplate.getForObject(apiUrl, String.class);
    }
}
