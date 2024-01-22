import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent {
  @ViewChild('ionButton', { read: ElementRef, static: true })
  ionButton: ElementRef;
  constructor(private modal: ModalController) {}
  closeClicked() {
    this.modal.dismiss();
  }

  ngAfterViewInit() {
    console.log(this.ionButton);
    this.ionButton.nativeElement.focus();
  }
}
