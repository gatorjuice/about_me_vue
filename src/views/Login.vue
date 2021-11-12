<template>
  <div class="container">
    <form @submit.prevent="processForm">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          Use the provided demo user for access.
        </div>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword"
          aria-describedby="passwordHelp"
        />
        <div id="passwordHelp" class="form-text">
          Passwords are stored encrypted.
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import HttpService from "@/services/HttpService.js";
export default {
  data() {
    return {
      email: "demo_user@test.com",
      password: "p@ssw@rd",
    };
  },
  methods: {
    processForm() {
      new HttpService(this.$store).post(
        `login`,
        { username: this.email, password: this.password },
        (status, response) => {
          if (response.data.token) {
            this.$store.commit("setToken", response.data.token);
            document.location = "/";
          }
        }
      );
    },
  },
};
</script>
<style scoped></style>
