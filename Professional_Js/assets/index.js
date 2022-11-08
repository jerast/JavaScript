const BUTTON = document.querySelector("button");
const VIDEO = document.querySelector("video");

// function MediaPlayer(media) {
//      this.media = media.element;
// }
//      MediaPlayer.prototype.play = function() {
//           this.media.play();
//      };
//      MediaPlayer.prototype.pause = function() {
//           this.media.pause();
//      };
//      MediaPlayer.prototype.tooglePlay = function() {
//           if (this.media.paused) {
//                this.play();
//           } else {
//                this.pause();
//           }
//      }

class MediaPlayer {
     constructor(media) {
          this.media = media.element;
     }
     play() {
          this.media.play();
     }
     pause() {
          this.media.pause();
     }
     tooglePlay() {
          if (this.media.paused) {
               this.play();
          } else {
               this.pause();
          }
     }
}

const player = new MediaPlayer({ element: VIDEO });
BUTTON.onclick = () => player.tooglePlay();