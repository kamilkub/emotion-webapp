import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface EmotionPhoto {
    file: File,
    previewUrl: SafeUrl

}


@Directive({
  selector: '[uploadHandler]'
})
export class UploadHandler {

  @Output() emotionImage: EventEmitter<EmotionPhoto> = new EventEmitter();

  @HostBinding("style.background") private background = "";
  @HostBinding("style.background-image") private backgroundImage: any;

  constructor(private domSanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#0061f2";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "";
  }

   @HostListener("drop", ["$event"])
  public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "";

    let file: File = event.dataTransfer.files[0];
    let previewUrl = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

    this.emotionImage.emit({file, previewUrl});

  }

}
