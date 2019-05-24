import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/map";

@Injectable()
export class PruebaProvider {

  URL_SERVICIOS= "http://localhost/pruebaREST/index.php";

  constructor(public http: Http) {

  }

  credential(key: string) {
    let url = this.URL_SERVICIOS + "/prueba/credential";
    let data = new URLSearchParams();

    data.append("key", key);
    data.append("shared_secret", 'abc123');

    return this.http
      .put(url, data)
      .timeout(30000)
      .map(resp => resp.json());
  }

  message_post(msg: string, tags: string) {
    let url = this.URL_SERVICIOS + "/prueba/message";
    let data = new URLSearchParams();

    data.append("msg", msg);
    data.append("tags", tags);

    return this.http
      .post(url, data)
      .timeout(30000)
      .map(resp => resp.json());
  }

  message_get(id: string) {
    let url =  this.URL_SERVICIOS  + "/prueba/message/"+id;

    return this.http.get( url )
              .timeout(30000)
              .map(
                resp => resp.json()
    );
  }

  messages_get(tag: string) {

    console.log("tags ",tag);
    let url =  this.URL_SERVICIOS  + "/prueba/messages/"+tag;

    return this.http.get( url )
              .timeout(30000)
              .map(
                resp => resp.json()
    );
  }

  

}
