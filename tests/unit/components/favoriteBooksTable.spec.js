import { shallowMount } from "@vue/test-utils";
import store from "@/store/store";
import FavoriteBooksTable from "@/components/FavoriteBooksTable.vue";

jest.mock("@/services/HttpService.js", () => ({
  get: (path, callback) =>
    callback(200, {
      data: [
        {
          id: 1,
          title: "the testing",
          author: "Crass Bean",
          is_favorite: false,
        },
        {
          id: 2,
          title: "Great Expections",
          author: "Manfred Cholsum",
          is_favorite: true,
        },
      ],
    }),
}));

describe("FavoriteBooksTable", () => {
  let wrapper;
  let table;

  beforeEach(() => {
    wrapper = undefined;
    wrapper = shallowMount(FavoriteBooksTable, {
      global: { plugins: [store] },
    });

    table = wrapper.find("table");
  });

  it("renders the table", () => {
    expect(table.exists()).toBe(true);
  });

  it("renders a row for each book", () => {
    const rows = table.findAll("favorite-books-row-stub");

    expect(rows).toHaveLength(2);
  });
});
