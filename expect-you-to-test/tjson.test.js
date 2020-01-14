const getTopSongs = require("./tjson").getTopSongs;

describe("getTopSongs", () => {
  it("should return an array", () => {
    expect(getTopSongs()).toBeInstanceOf(Array);
  });

  it("should return an with with songs", () => {
    expect(getTopSongs()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: expect.stringMatching(/^https?:\/\//),
          title: expect.any(String),
          plays: expect.any(Number)
        })
      ])
    );
  });
});
