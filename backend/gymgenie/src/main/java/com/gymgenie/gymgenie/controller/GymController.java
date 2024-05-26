package com.gymgenie.gymgenie.controller;

import com.gymgenie.gymgenie.service.GeminiApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GymController {

    @Autowired
    private GeminiApiService externalApiService;

    @GetMapping("/fetch-data")
    // public String fetchData() {
    //     return externalApiService.fetchDataFromExternalApi();
    // }

    public String fetchData(@RequestParam int age,
                        @RequestParam double height,
                        @RequestParam double weight,
                        @RequestParam String gender) {
    return externalApiService.fetchDataFromExternalApi(age, height, weight, gender);
    }
}
