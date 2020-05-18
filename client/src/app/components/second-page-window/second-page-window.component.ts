import { Component, OnInit } from '@angular/core';
import { EmotionReckonService } from '../../service/emotion-reckon.service';
import { UploadHandler } from '../../directives/upload-handler.directive';
import { EmotionPhoto } from '../../directives/upload-handler.directive';
import { FaceReckonResult } from '../../model/face-reckon-result';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-second-page-window',
  templateUrl: './second-page-window.component.html',
  styleUrls: ['./second-page-window.component.css'],
})
export class SecondPageWindowComponent implements OnInit {

  private isDownloadFinished: boolean = true;
  private uploadPhotoPreview: SafeUrl;
  private result: FaceReckonResult[];
  private selectedPhNumber: number = 0;


  constructor(private emotionService: EmotionReckonService) {}

  ngOnInit() {
  }

  uploadFaceImage(emotionPhoto: EmotionPhoto) {
    console.log(emotionPhoto);
    this.uploadPhotoPreview = emotionPhoto.previewUrl;
    this.changeUploadBox();
    this.emotionService.getEmotions(emotionPhoto).subscribe(data => {
         this.result = data;
         this.isDownloadFinished = true;
    });
  }

  changeUploadBox() {
      this.selectedPhNumber++;
      this.isDownloadFinished = false;
  }


}
