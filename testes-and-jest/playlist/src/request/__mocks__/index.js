const request = {
  getPlaylist: () => Array(8).fill(null).map((_, i) => ({
    track: i,
    title: `song ${i}`
  }))
};

module.exports = request;