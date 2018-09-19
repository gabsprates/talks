// playlist/index.test.js

const Playlist = require('./index');

// faz mock do módulo request
jest.mock('../request')

// cria um grupo de testes
describe('testing playlist', () => {

  it('should to shuffle playlist', () => {
    const playlist = new Playlist();
    const initialOrder = playlist
      .playlist.map(song => song.track);

    playlist.shuffle();
    const finalOrder = playlist
      .playlist.map(song => song.track);

    expect(initialOrder).not.toEqual(finalOrder);
  });

});
