const requests = require("../requests");

class Playlist {
  constructor() {
    this.playlist = requests.getPlaylist();
  }

  shuffle() {
    const playlist = Array.from(this.playlist);

    for (let i = playlist.length - 1; i > 0; i--) {
      // separar esse `Math.floor(Math.random() * (i + 1));` em outro módulo
      const newPosition = Math.floor(Math.random() * (i + 1));
      const currentSong = playlist[i];
      playlist[i] = playlist[newPosition];
      playlist[newPosition] = currentSong;
    }

    this.playlist = playlist;
  }
}

module.exports = Playlist;
