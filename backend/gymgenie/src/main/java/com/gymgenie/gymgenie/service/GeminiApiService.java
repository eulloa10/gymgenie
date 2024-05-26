package com.gymgenie.gymgenie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
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
        byte[] imageBytes = Base64.getDecoder().decode(dataImageBase64);

        GenerativeModel model = new GenerativeModel("gemini-pro-vision", vertexAI);
        GenerateContentResponse response = model.generateContent(
            ContentMaker.fromMultiModalData(
                "What is this image about?",
                PartMaker.fromMimeTypeAndData("image/jpg", imageBytes)
            ));

        System.out.println(ResponseHandler.getText(response));
        // return restTemplate.getForObject(apiUrl, String.class);
      }
  }
}
