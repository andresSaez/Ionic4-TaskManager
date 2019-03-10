import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public deseosService: DeseosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminadosPage');
  }

  listaSeleccionada( lista: Lista ) {
    console.log(lista);
  }

}
