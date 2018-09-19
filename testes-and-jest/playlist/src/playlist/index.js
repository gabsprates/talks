// playlist/index.js

const request = require('../request');

class Playlist {
  constructor() {
    this.playlist = request.getPlaylist();
  }

  shuffle() {
    if (!this.playlist.length) {
      return;
    }

    const playlist = Array.from(this.playlist);
    for (let i = playlist.length - 1; i > 0; i--) {
      const newPosition = Math.floor(Math.random() * (i + 1));
      const currentSong = playlist[i];
      playlist[i] = playlist[newPosition];
      playlist[newPosition] = currentSong;
    }
    this.playlist = playlist;
  }
}

module.exports = Playlist;