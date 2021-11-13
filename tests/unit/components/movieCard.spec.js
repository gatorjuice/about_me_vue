import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

xdescribe("MovieCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = undefined;
    wrapper = shallowMount(MovieCard, {
      props: {
        movie: {
          title: "The 'Burbs (1989)",
          image: "https://m.media-amazon.com/images/M/M@._V1CR0,0,92,139_.jpg",
          summary: "An overstressed suburbanite...",
        },
        modalId: "movieCard1",
      },
    });
  });

  it("displays the title", () => {
    expect(wrapper.get("h5.card-title").text()).toEqual("The 'Burbs (1989)");
  });

  it("displays the summary", () => {
    expect(wrapper.get(".card-body p").text()).toEqual(
      "An overstressed suburbanite..."
    );
  });

  it("renders a movie-modal", () => {
    expect(wrapper.find("movie-modal-stub").exists()).toBeTruthy();
  });
});
