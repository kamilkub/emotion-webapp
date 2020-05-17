import { Directive, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[uploadHandler]'
})
export class UploadHandler {

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

  }

}
