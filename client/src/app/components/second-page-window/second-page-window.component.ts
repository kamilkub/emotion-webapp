import { Component, OnInit } from '@angular/core';
import { EmotionReckonService } from '../../service/emotion-reckon.service';
import { UploadHandler } from '../../directives/upload-handler.directive';

@Component({
  selector: 'app-second-page-window',
  templateUrl: './second-page-window.component.html',
  styleUrls: ['./second-page-window.component.css']
})
export class SecondPageWindowComponent implements OnInit {


  constructor(private emotionService: EmotionReckonService) {

  }

  ngOnInit() {
  }


}
