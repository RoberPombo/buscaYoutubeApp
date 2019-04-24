import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoOptions, VideoPlayer } from '@ionic-native/video-player';
@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  id: string;
  videoOptions: VideoOptions;
  videoUrl: string;

  constructor(private navParams: NavParams, private youtube: YoutubeVideoPlayer, 
    private plt: Platform, private videoPlayer: VideoPlayer) {
    this.id = this.navParams.get('id');
    console.log(this.id);
    this.openVideo();
  }
 
  async openVideo() {
    try{
      this.videoOptions = {
        volume: 0.7
      }
      this.videoUrl = 'https://www.youtube.com/watch?v=' + this.id
      await this.videoPlayer.play(this.videoUrl, this.videoOptions)
    }catch(e){
      console.error(e);
    }

    if (this.plt.is('cordova')) {
      this.youtube.openVideo(this.id);
    } else {
      window.open('https://www.youtube.com/watch?v=' + this.id);
    }
  }
}
