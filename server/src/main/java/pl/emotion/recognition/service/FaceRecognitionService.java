package pl.emotion.recognition.service;

import com.algorithmia.AlgorithmException;
import com.algorithmia.Algorithmia;
import com.algorithmia.AlgorithmiaClient;
import com.algorithmia.algo.*;
import com.google.gson.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pl.emotion.recognition.helper.ConverterHelper;
import pl.emotion.recognition.json_models.FaceReckonResult;

import java.io.IOException;
import java.util.*;

@Service
public class FaceRecognitionService {

    @Value("${ALGO_API_KEY}")
    private String API_KEY;

    private ConverterHelper converterHelper;

    @Autowired
    public FaceRecognitionService(ConverterHelper converterHelper) {
        this.converterHelper = converterHelper;
    }

    public ResponseEntity<List<FaceReckonResult>> recognizeEmotionFromImage(MultipartFile file) throws IOException, AlgorithmException {
        /* Algo Client */
        AlgorithmiaClient client = getAlgorithmiaClient();
        Algorithm emotionReckon = client.algo("deeplearning/EmotionRecognitionCNNMBP/0.1.2");


        /* JSONObject send as request to Algo */
        JsonObject object = new JsonObject();
        object.addProperty("image", converterHelper.convertMultipartToBase64(file));
        object.addProperty("numResults", 7);

        /* Request send and Response handle implementation  */
        AlgoResponse pipe = emotionReckon.pipe(object);

        JsonObject response = (JsonObject) JsonParser.parseString(pipe.asJsonString());
        JsonArray results = response.getAsJsonArray("results");

        /* ArrayList containing all emotions */
        List<FaceReckonResult> faceReckonResults = new ArrayList<>();

        results.forEach((emotion) -> {
            faceReckonResults.add(new FaceReckonResult(emotion.getAsJsonArray().get(0).getAsFloat(), emotion.getAsJsonArray().get(1).getAsString()));
        });

        return new ResponseEntity<>(faceReckonResults, HttpStatus.OK);

    }


    private AlgorithmiaClient getAlgorithmiaClient() {
        return Algorithmia.client(API_KEY);
    }


}
