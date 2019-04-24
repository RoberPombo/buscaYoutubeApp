import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [YoutubeService],
})
export class HomePage {
  valores: string;
  videos: any[];
  key: string;
  video: any[];
  id = '';
  resultados = '6';
  orden = 'viewCount';

  constructor(public navCtrl: NavController, private _ys: YoutubeService) {
    this.valores = '';
    this.buscarYoutube();
  }

  openPlaylist(id) {
    this.navCtrl.push('PlaylistPage', {id: id});
  }
  
    buscarYoutube() {
      this._ys.buscar(this.valores, this.resultados, this.orden).subscribe( (result) => {
      // Solicitamos a la api de youtube los videos que buscamos.
        this.videos = result.items;
        console.log(result.items);
/*           this.id = '';
          for (const item of result.items) {
              if (this.id === '') {
                  this.id = item.id.videoId;
              } else {
                  this.id += `,${item.id.videoId}`;
              }
          }

          this._ys.videos(this.id).subscribe(result2 => {
          // Ahora que tenemos los id de los videos que queremos mostrar, hacemos otra llamada a la
          // api para que nos devuelva más datos.
              console.log(result2.items);
              this.videos = result2.items;
          }); */
      });
  }
}
