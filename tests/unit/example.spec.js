import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

describe("MovieCard.vue", () => {
  it("renders props.movie when passed", () => {
    const movie = { image: "image_link" };
    const wrapper = shallowMount(MovieCard, {
      props: { movie },
    });
    expect(wrapper.text()).toMatch("Show Details");
  });
});
