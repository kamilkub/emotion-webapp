import { Injectable } from '@angular/core';
import { FaceReckonResult } from '../model/face-reckon-result';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmotionPhoto } from '../directives/upload-handler.directive';


@Injectable({
  providedIn: 'root'
})
export class EmotionReckonService {

  private emotionApiUrl = 'http://localhost:8080/recognize-emotion';

  constructor(private httpClient: HttpClient) { }

  getEmotions(emotionFile: EmotionPhoto): Observable<FaceReckonResult[]>{
     const formData = new FormData();
     formData.append("recImage", emotionFile.file, emotionFile.file.name);

     return this.httpClient
            .post<FaceReckonResult[]>(this.emotionApiUrl, formData);

  }

}
