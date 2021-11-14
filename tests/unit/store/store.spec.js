import store from "@/store/store";

describe("store", () => {
  describe("state", () => {
    it("has starting state", () => {
      expect(store.state).toEqual({
        apiVisualizer: {
          apiRequests: [],
          show: true,
        },
        books: [],
        categories: [],
        funnyBot: {
          messages: [],
        },
        jwt: null,
        movies: [],
        repos: [],
        storeReady: false,
      });
    });
  });
});
