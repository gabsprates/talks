const getTopSongs = () => {
  const songs = Array(10).fill(null);

  return songs.map((_, index) => ({
    url: `https://placeholder.songs/${index}`,
    title: `música ${index}`,
    plays: 1000 * songs.length - index
  }));
};

module.exports = { getTopSongs };
