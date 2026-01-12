import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private alertController: AlertController,
    public taskService: TaskService,
    public toastController: ToastController
  ) { }

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
          handler: (alertData) => {
            if (alertData.task !== '') {
              this.taskService.addTask(alertData.task, alertData.date);
            } else {
              this.presentToast();
              this.presentAlertPromptAdd();
            }
          }
        }
      ],
      inputs: [
        {
          name: 'task',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Tarefa',
        },
        {
          name: 'date',
          type: 'date',
          min: '2026-01-01',
          max: '2099-12-31',
        }
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Preencha a tarefa!',
      duration: 2000
    });

    toast.present();
  }

}
