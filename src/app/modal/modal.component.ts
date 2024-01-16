import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent {
  constructor(private modal: ModalController) {}
  closeClicked() {
    this.modal.dismiss();
  }
}
