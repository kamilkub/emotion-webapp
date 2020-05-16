package pl.emotion.recognition.controller;

import com.algorithmia.AlgorithmException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import pl.emotion.recognition.service.FaceRecognitionService;

import java.io.IOException;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FaceRecognitionController {

    private FaceRecognitionService faceRecognitionService;

    @Autowired
    public FaceRecognitionController(FaceRecognitionService faceRecognitionService) {
        this.faceRecognitionService = faceRecognitionService;
    }


    @PostMapping("/recognize-emotion")
    public ResponseEntity recognizeEmotionsEndPoint(@RequestParam("recImage") MultipartFile file) throws IOException, AlgorithmException {
        if(file == null || file.isEmpty()) {
            return new ResponseEntity<>("I think you should choose an image", HttpStatus.BAD_REQUEST);
        }
        if(Objects.requireNonNull(file.getContentType()).startsWith("image/"))
                return faceRecognitionService.recognizeEmotionFromImage(file);
        else
                return new ResponseEntity<>("Wrong file format", HttpStatus.BAD_REQUEST);
    }

}
