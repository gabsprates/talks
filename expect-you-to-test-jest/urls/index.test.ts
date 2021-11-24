import { getListOfAllUrls } from "./index";

import { customDomains, defaultDomain } from "../requests/mocks";

jest.mock("../requests");

// 1. mockify(fetchServiceDomains).mockResolvedValue(null);
// const mockify = (fn: Function) => {
//   return fn as jest.Mock<Promise<ServiceDomains>, string[]>;
// };

// 2. mockedFetchServiceDomain.mockResolvedValue(null);
// const mockedFetchServiceDomain = jest.spyOn(requests, "fetchServiceDomains");

// 3. jest.mock('../requests', () => { ... });

// 4. jest.mock('../requests');

describe("getListOfAllUrls", () => {
  describe("with no domains", () => {
    it("should return an empty array", () => {
      return expect(getListOfAllUrls("empty")).resolves.toEqual([]);
    });
  });

  describe("with default and custom domains", () => {
    it("should return an array with all domains", () => {
      return expect(getListOfAllUrls("full")).resolves.toEqual([
        defaultDomain,
        ...customDomains
      ]);
    });
  });

  describe("with only default domain", () => {
    it("should return one item array with the default domain", () => {
      return expect(getListOfAllUrls("only-default")).resolves.toEqual([
        defaultDomain
      ]);
    });
  });

  describe("with only custom domains", () => {
    it("should return an array with the custom domain", () => {
      return expect(getListOfAllUrls("only-custom")).resolves.toEqual(
        customDomains
      );
    });
  });
});
