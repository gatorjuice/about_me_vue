<template>
  <nav
    @click="collapseNavbar"
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <router-link to="/" class="navbar-brand">
      <span class="d-block d-lg-none">James Gates</span>
      <span class="d-none d-lg-block"
        ><img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="@/assets/img/profile.jpg"
          alt="..." /></span
    ></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/repo_tracker" class="nav-link"
            >Github Tracker</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/movies" class="nav-link">Movie Search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/books" class="nav-link">Favorite Books</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/maps" class="nav-link">Data Maps</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/funny_bot" class="nav-link"
            >FunnyBot AI</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TheNavBar",
  methods: {
    collapseNavbar() {
      document.getElementById("navbarResponsive").classList.remove("show");
    },
  },
};
</script>
<style scoped></style>
