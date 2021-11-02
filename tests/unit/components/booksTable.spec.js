import { mount } from "@vue/test-utils";
import BooksTable from "@/components/BooksTable.vue";

jest.mock("@/services/HttpService.js", () => ({
  post: (path, payload, callback) => callback(200, {}),
  delete: (path, callback) => callback(200, {}),
}));

describe("BooksTable", () => {
  const books = [
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
  ];

  const props = { books };
  const wrapper = mount(BooksTable, { props });
  const table_datas = wrapper.get('[data-test="book1"]').findAll("td");

  it("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("accepts books as prop", () => {
    expect(wrapper.props().books).toEqual(props.books);
    expect(wrapper.findAll("span.fa")).toHaveLength(2);
  });

  it("displays the title", () => {
    expect(table_datas[1].text()).toEqual("the testing");
  });

  it("displays the author", () => {
    expect(table_datas[2].text()).toEqual("Crass Bean");
  });

  describe("toggleFavorite", () => {
    describe("when book is not a favorite", () => {
      it("sets the book as a favorite", async () => {
        const star = wrapper.get('[data-test="book1"]').get("span.fa");
        expect(star.classes()).toEqual(["fa", "fa-star-o"]);

        await star.trigger("click");

        expect(star.classes()).toEqual(["fa", "checked", "fa-star"]);
      });
    });

    describe("when book is not a favorite", () => {
      it("removes the book as a favorite", async () => {
        const star = wrapper.get('[data-test="book2"]').get("span.fa");
        expect(star.classes()).toEqual(["fa", "checked", "fa-star"]);

        await star.trigger("click");

        expect(star.classes()).toEqual(["fa", "fa-star-o"]);
      });
    });
  });
});
