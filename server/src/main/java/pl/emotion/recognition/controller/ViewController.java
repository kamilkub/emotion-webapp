package pl.emotion.recognition.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {


    @GetMapping(value = "/")
    public String welcomePage() {
        return "index";
    }

    @GetMapping(value = "/fun-recognition")
    public String functionalityPage () {
        return "process";
    }


}
