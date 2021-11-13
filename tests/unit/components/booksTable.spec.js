import { mount } from "@vue/test-utils";
import BooksTable from "@/components/BooksTable.vue";

jest.mock("@/services/HttpService.js", () => ({
  post: (path, payload, callback) => callback(200, {}),
  delete: (path, callback) => callback(200, {}),
}));

xdescribe("BooksTable", () => {
  let wrapper;

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

  beforeEach(() => {
    wrapper = undefined;
    wrapper = mount(BooksTable, { props });
  });

  it("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("accepts books as prop", () => {
    expect(wrapper.props().books).toEqual(props.books);
    expect(wrapper.findAll("i.fas")).toHaveLength(2);
  });

  it("displays the title", () => {
    const table_datas = wrapper.get('[data-test="book1"]').findAll("td");

    expect(table_datas[1].text()).toEqual("the testing");
  });

  it("displays the author", () => {
    const table_datas = wrapper.get('[data-test="book1"]').findAll("td");

    expect(table_datas[2].text()).toEqual("Crass Bean");
  });

  describe("toggleFavorite", () => {
    describe("when book is not a favorite", () => {
      xit("sets the book as a favorite", async () => {
        const book = wrapper.get('[data-test="book1"]');
        const star = book.get("span.fa");
        expect(star.classes()).toEqual(["fa", "fa-star-o"]);

        await book.trigger("click");

        expect(star.classes()).toEqual(["fa", "checked", "fa-star"]);
      });
    });

    describe("when book is not a favorite", () => {
      xit("removes the book as a favorite", async () => {
        const book = wrapper.get('[data-test="book2"]');
        const star = book.get("span.fa");
        expect(star.classes()).toEqual(["fa", "checked", "fa-star"]);

        await book.trigger("click");

        expect(star.classes()).toEqual(["fa", "fa-star-o"]);
      });
    });
  });
});
