package pl.emotion.recognition.helper;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Component
public class ConverterHelper {

    public String convertMultipartToBase64 (MultipartFile file) throws IOException {
        return "data:" + file.getContentType() + ";base64," +
                StringUtils.newStringUtf8(Base64.encodeBase64(file.getBytes(), false));
    }
}
