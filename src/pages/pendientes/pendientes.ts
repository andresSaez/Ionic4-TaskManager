import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { AgregarPage } from '../agregar/agregar';

/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public deseosService: DeseosService,
    private alertCrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  agregarLista() {
    // this.navCtrl.push( AgregarPage );

    const alerta = this.alertCrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
      },{
        text: 'Agregar',
        handler: data => {
          if (data.titulo.length === 0) {
            return;
          }
          this.navCtrl.push( AgregarPage, {
            titulo: data.titulo
          });
        }
      }]
    });

    alerta.present();
  }
}
