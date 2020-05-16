package pl.emotion.recognition;

import com.algorithmia.AlgorithmException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import pl.emotion.recognition.json_models.FaceReckonResult;
import pl.emotion.recognition.service.FaceRecognitionService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;



@SpringBootTest
class FaceRecognitionApplicationTests {


	private @Autowired FaceRecognitionService faceRecognitionService;

	@Test
	void firstApiCallTest() throws IOException, AlgorithmException {
		String name = "zigolo.jpg";
		String originalFileName = "zigolo.jpg";
		String contentType = "image/jpg";
		Path path = Paths.get("C:\\Users\\dell\\Desktop\\" + name);

		byte[] content = null;
		try { content = Files.readAllBytes(path); } catch (Exception ignored) { }

		MultipartFile result = new MockMultipartFile(name,
				originalFileName, contentType, content);

		ResponseEntity<List<FaceReckonResult>> listResponseEntity = faceRecognitionService.recognizeEmotionFromImage(result);

		Assertions.assertTrue(listResponseEntity.getStatusCode().is2xxSuccessful());


	}

}
