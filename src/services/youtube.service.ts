import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../.env';


@Injectable()
export class YoutubeService {
    public urlBuscar = 'https://www.googleapis.com/youtube/v3/search';
    public urlVideos = 'https://www.googleapis.com/youtube/v3/videos';
    public key = API_KEY;

    constructor(private _http: HttpClient) {}

    buscar(valores: string, result: string, orden: string): Observable<any> {
    // Peticion a la api de Youtube con el númer de resultados, el orden solicitado y la palabras deseadas.
        const uriBuscar = `${this.urlBuscar}?part=snippet&type=video&order=${orden}&maxResults=${result}&q=${valores}&key=${this.key}`;
        return this._http.get<any>(uriBuscar);
    }

    
    videos(id: string): Observable<any> {
        // Peticion a la api de Youtube con el Id de los videos que fueron buscados con el otro método,
        // para tener los datos del video embebido, número de reproducciones y otros datos que no te
        // devuelve cuando buscas un video.
            const uriVideos = `${this.urlVideos}?part=snippet,statistics,player&id=${id}&key=${this.key}`;
            return this._http.get<any>(uriVideos);
    }
}