import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PruebaProvider } from '../../providers/prueba/prueba';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  key: string = "";
  data: any;

  msg: string = "";
  tags: string = "";
  dataMessage : any;

  id: string = "";
  dataMessageGetId : any;

  tag: string = "";
  dataMessageGetTags : any;

  constructor(public navCtrl: NavController, public _pruebaProvider:PruebaProvider) {

  }

  credential(){

   
    this._pruebaProvider.credential(this.key)
          .subscribe(
            (data) =>{
               console.log(data);
               this.data = data;
            })
  }

  message_post(){

   
    this._pruebaProvider.message_post(this.msg, this.tags)
          .subscribe(
            (data) =>{
               console.log(data);
               this.dataMessage = data;
            })
  }

  message_get_id(){

   
    this._pruebaProvider.message_get(this.id)
          .subscribe(
            (data) =>{
               console.log(data);
               this.dataMessageGetId = data;
            })
  }

  message_get_tag(){

    this._pruebaProvider.messages_get(this.tag)
          .subscribe(
            (data) =>{
               this.dataMessageGetTags = data;
            })
  }


}
