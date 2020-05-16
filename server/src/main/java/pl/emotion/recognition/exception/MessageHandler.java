package pl.emotion.recognition.exception;

import org.springframework.http.HttpStatus;

public class MessageHandler {

    private HttpStatus httpStatus;
    private String message;

    public MessageHandler() {
    }

    public MessageHandler(HttpStatus httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.message = message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
