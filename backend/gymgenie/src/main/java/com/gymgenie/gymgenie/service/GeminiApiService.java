package com.gymgenie.gymgenie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.preview.ChatSession;
import com.google.cloud.vertexai.generativeai.preview.ContentMaker;
import com.google.cloud.vertexai.generativeai.preview.GenerativeModel;
import com.google.cloud.vertexai.generativeai.preview.PartMaker;

@Service
public class GeminiApiService {

    @Autowired
    private RestTemplate restTemplate;

    // public String fetchDataFromExternalApi(int age, double height, double weight, String gender) {
    //     // Replace "https://api.example.com/data" with the actual URL of the external API
    //     String apiUrl = "https://swapi.dev/api/people/1/";
    //     return restTemplate.getForObject(apiUrl, String.class);
    // }
    public String fetchDataFromExternalApi(int age, double height, double weight, String gender) {
      // Replace "https://api.example.com/data" with the actual URL of the external API
      try (VertexAI vertexAI = new VertexAI(projectId, location)) {
        GenerateContentResponse response;

        GenerativeModel model = new GenerativeModel(modelName, vertexAI);
        ChatSession chatSession = new ChatSession(model);

        response = chatSession.sendMessage("Hello.");
        System.out.println(ResponseHandler.getText(response));

        response = chatSession.sendMessage("What are all the colors in a rainbow?");
        System.out.println(ResponseHandler.getText(response));

        response = chatSession.sendMessage("Why does it appear when it rains?");
        System.out.println(ResponseHandler.getText(response));
      }
        // return restTemplate.getForObject(apiUrl, String.class);
    }
}
