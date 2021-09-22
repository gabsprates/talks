const Playlist = require("./index");

jest.mock("../requests", () => ({
  getPlaylist() {
    return Array(8)
      .fill(null)
      .map((_, i) => ({
        track: i,
        title: `song ${i}`
      }));
  }
}));

describe("testing playlist", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should to shuffle playlist", () => {
    const playlist = new Playlist();

    // jest
    //   .spyOn(Math, "random")
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0)
    //   .mockImplementationOnce(() => 0);
    jest.spyOn(Math, "floor").mockImplementation(() => 1);

    const initialOrder = playlist.playlist.map(song => song.track);

    playlist.shuffle();
    const finalOrder = playlist.playlist.map(song => song.track);

    // console.log(Math.floor.mock.calls);

    expect(initialOrder).not.toEqual(finalOrder);
  });

  describe("resquests", () => {
    beforeAll(() => {
      jest.unmock("../requests");
    });

    test("getPlaylist should return an empty array", () => {
      const { getPlaylist } = require("../requests");
      expect(getPlaylist()).toEqual([]);
    });
  });

  describe("should be 5", () => {
    const onePointX = Array(10)
      .fill(null)
      .map((_, index) => 5 + index / 10);

    onePointX.forEach(value => {
      test(`the largest integer <= to ${value} must to be 5`, () => {
        expect(Math.floor(value)).toEqual(5);
      });
    });
  });
});
