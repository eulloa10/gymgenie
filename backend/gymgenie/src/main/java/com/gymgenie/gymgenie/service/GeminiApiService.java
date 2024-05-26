package com.gymgenie.gymgenie.service;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.preview.ChatSession;
import com.google.cloud.vertexai.generativeai.preview.ContentMaker;
import com.google.cloud.vertexai.generativeai.preview.GenerativeModel;
import com.google.cloud.vertexai.generativeai.preview.PartMaker;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import java.io.IOException;

@Service
public class GeminiApiService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private Dotenv dotenv;

    // public String fetchDataFromExternalApi() {
    //     // Replace "https://api.example.com/data" with the actual URL of the external API
    //     String apiUrl = "https://swapi.dev/api/people/1/";
    //     return restTemplate.getForObject(apiUrl, String.class);
    // }
    public String fetchDataFromExternalApi(int age, double height, double weight, String gender) {
      String projectId = dotenv.get("PROJECT_ID");
      String location = dotenv.get("LOCATION");
      String modelName = dotenv.get("MODEL_NAME");
      String textPrompt =
        "What's a good name for a flower shop that specializes in selling bouquets of"
            + " dried flowers?";

      try (VertexAI vertexAI = new VertexAI(projectId, location)) {
        GenerativeModel model = new GenerativeModel(modelName, vertexAI);

        GenerateContentResponse response = model.generateContent(textPrompt);
        String output = ResponseHandler.getText(response);
        return output;
      }
    }
}
