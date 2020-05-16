import { Injectable } from '@angular/core';
import { FaceReckonResult } from '../model/face-reckon-result';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmotionReckonService {

  private emotionApiUrl = '';

  constructor(private httpClient: HttpClient) { }

  getEmotions(): Observable<FaceReckonResult[]> {
      return this.httpClient.get<FaceReckonResult[]>(this.emotionApiUrl);
  }
}
