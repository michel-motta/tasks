import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async presentAlertPromptAdd() {
    const alert = await this.alertController.create({
      header: 'Adicionar tarefa',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          role: 'confirm'
        }
      ],
      inputs: [
        {
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Tarefa',
        },
        {
          type: 'date',
          min: '2026-01-01',
          max: '2099-12-31',
        }
      ],
    });

    await alert.present();
  }

}
