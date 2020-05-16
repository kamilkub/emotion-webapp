package pl.emotion.recognition.json_models;

public class FaceReckonResult {

    private float confidence;
    private String emotionName;

    public FaceReckonResult(float confidence, String emotionName) {
        this.confidence = (float) (Math.round(confidence * 100.0) / 100.0);
        this.emotionName = emotionName;
    }

    public FaceReckonResult() {
    }

    public float getConfidence() {
        return confidence;
    }

    public void setConfidence(float confidence) {
        this.confidence = confidence;
    }

    public String getEmotionName() {
        return emotionName;
    }

    public void setEmotionName(String emotionName) {
        this.emotionName = emotionName;
    }
}
