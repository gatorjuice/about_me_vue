import { shallowMount } from "@vue/test-utils";
import Movie from "@/components/Movie.vue";

describe("Movie.vue", () => {
  it("renders props.movie when passed", () => {
    const movie = { image: "image_link" };
    const wrapper = shallowMount(Movie, {
      props: { movie },
    });
    expect(wrapper.text()).toMatch("Last updated 3 mins ago");
  });
});
